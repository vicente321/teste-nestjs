import { CanActivate, Injectable, ExecutionContext, UnauthorizedException } from "@nestjs/common";    
import { JwtService } from "@nestjs/jwt";
import { JwtConstant } from "src/auth/constant";
@Injectable()
export class AuthGuard  implements CanActivate{
constructor( private jwtService:  JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> { 
    const request = context.switchToHttp().getRequest();

    const token = this.extractTokenFromHeader(request);

    if (!token) { throw new UnauthorizedException('No token provided.');  }

    try {
        const payload =  await this.jwtService.verifyAsync(token, { secret:  JwtConstant.secret });
        request['user'] = payload;
        return true;
    } 
    
    catch
      {
      throw new UnauthorizedException();}


    }
    
    private extractTokenFromHeader(request: Request): string | undefined {
      
        const [type, token]  = request.headers['authorization']?.split(' ') ?? [];
    
        return type === 'Bearer' ? token : undefined;
    }
}
