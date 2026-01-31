import { Module } from '@nestjs/common';
import { AuthController } from './module/auth.controller';
import { AuthService } from './module/auth.service';
import { PrismaService } from 'src/database/prisma.service';


@Module({
  controllers: [AuthController],
  providers: [AuthService,  PrismaService],
})
export class AuthModule {
 
   
  
}
