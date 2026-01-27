import { SigninDto, SignupDto } from './dtos/auth';
import { PrismaService } from 'src/database/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prismaService;
    private jwtService;
    constructor(prismaService: PrismaService, jwtService: JwtService);
    signup(data: SignupDto): Promise<{
        id: any;
        name: any;
        email: any;
    }>;
    signin(data: SigninDto): Promise<{
        acessToken: string;
    }>;
}
