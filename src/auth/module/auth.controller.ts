import { Body, Controller, Post } from '@nestjs/common';
import * as auth from './dtos/auth';

@Controller('module')
export class ModuleController 
{
    // Post request to /module/signup
    @Post('signup')
    
    async signup(@Body() body: auth.SignupDto) {
        console.log(body);
        return body;
    }

    // Post request to /module/signin
    @Post('signin')
    
    async signin(@Body() body: auth.SigninDto) {
        console.log(body);
        return body;
    }

}
