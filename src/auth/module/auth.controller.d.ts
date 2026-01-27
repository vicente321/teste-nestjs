import * as auth from './dtos/auth';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(body: auth.SignupDto): Promise<{
        id: any;
        name: any;
        email: any;
    }>;
    signin(body: auth.SigninDto): Promise<auth.SigninDto>;
    me(request: any): Promise<any>;
}
