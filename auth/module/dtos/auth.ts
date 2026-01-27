import { IsEmail, IsNotEmpty } from "class-validator";

export class SignupDto {
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsEmail()
    email: string;
}
export class SigninDto {
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}   