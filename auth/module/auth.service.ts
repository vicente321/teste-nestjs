import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SigninDto, SignupDto } from './dtos/auth';
import { PrismaService } from 'src/database/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as  bcrypt from 'bcrypt';

@Injectable()
export class AuthService 
{

    constructor(private prismaService: PrismaService, private jwtService: JwtService) {}
    
    async signup(data: SignupDto  ) {
        // Signup logic here
        const existingUser = await this.prismaService.user.findUnique({
            where: { email: data.email }
        });

        
    if (existingUser) {     
        throw new UnauthorizedException('User with this email already exists.');
        
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);


    const User = await this.prismaService.user.create({
        data: { ...data, password: hashedPassword }
    });
        
        return { id: User.id, 
            name: User.username,
            email: User.email
        };    
    }   
    

    async signin(data: SigninDto) {
        // Signin logic here

         const User = await this.prismaService.user.findUnique({
            where: { email: data.email }
        });
        if (!User) {
            throw new UnauthorizedException('Invalid credentials.');
        }

        const passwordMatch = await bcrypt.compare(data.password, User.password);
        if (!passwordMatch) {
            throw new UnauthorizedException('Invalid credentials.');
        }
        const acessToken =  await this.jwtService.signAsync({ id: User.id, email: User.email, name: User.username });

    return { acessToken, };
    }
}