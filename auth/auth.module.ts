import { Module } from '@nestjs/common';
import { AuthController } from './module/auth.controller';
import { AuthService } from './module/auth.service';


@Module({
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {
 
   
  
}
