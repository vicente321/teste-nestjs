import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtConstant } from './auth/constant';
import { CrudModule } from './crud/crud.module';


@Module({
  imports: [AuthModule, JwtModule.register({
    global: true,
    secret: JwtConstant.secret,
    signOptions: { expiresIn: '1d' },
  }), CrudModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
