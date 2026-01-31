import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCrudDto } from './dto/create-crud.dto';
import { UpdateCrudDto } from './dto/update-crud.dto';

@Injectable()
export class CrudService {
  constructor(private prisma: PrismaService) {}

  async create(createCrudDto: CreateCrudDto) {
    return await this.prisma.livros.create({
      data: createCrudDto,
      include: {
        autor: true,
      },
    });
  }

  async findAll() {
    return await this.prisma.livros.findMany({
      include: {
        autor: true,
      },
    });
  }

  async findOne(id: number) {
    const livro = await this.prisma.livros.findUnique({
      where: { id_livro: id },
      include: {
        autor: true,
      },
    });

    if (!livro) {
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }

    return livro;
  }

  async update(id: number, updateCrudDto: UpdateCrudDto) {
    await this.findOne(id); // Verifica se existe

    return await this.prisma.livros.update({
      where: { id_livro: id },
      data: updateCrudDto,
      include: {
        autor: true,
      },
    });
  }

  async remove(id: number) {
    await this.findOne(id); // Verifica se existe

    return await this.prisma.livros.delete({
      where: { id },
    });
  }
}