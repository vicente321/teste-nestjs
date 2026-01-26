import { Module } from '@nestjs/common';
import { ModuleController } from './module/auth.controller';
import { ModuleService } from './module/auth.service';


@Module({
  controllers: [ModuleController],
  providers: [ModuleService]
})
export class AuthModule {
 
   
  
}
