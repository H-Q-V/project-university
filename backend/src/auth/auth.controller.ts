import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, UserLoginDto } from 'src/module/client/user/user.dto';
import { AdminLoginDto, CreateAdminDto } from 'src/module/admin/auth/auth.dto';
// import { IsEmail } from 'class-validator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  //user
  @Post('/register')
  async register(@Body() body: CreateUserDto) {
    const data = await this.authService.register(body);
    return {
      success: true,
      code: 200,
      data,
    };
  }

  @Post('/login')
  async login(@Body() body: UserLoginDto) {
    const data = await this.authService.login(body);
    return {
      success: true,
      code: 200,
      data,
    };
  }

  // @Post('/forgot')
  // async forgot(@Body('email') email: string) {
  //   await this.authService.forgotPassword(email);
  //   return {
  //     success: true,
  //     code: 200,
  //   };
  // }

  // admin

  @Post('/admin/register')
  async registerAdmin(@Body() body: CreateAdminDto) {
    const data = await this.authService.registerAdmin(body);
    return {
      success: true,
      code: 200,
      data,
    };
  }

  @Post('/admin/login')
  async loginAdmin(@Body() body: AdminLoginDto) {
    const data = await this.authService.loginAdmin(body);
    return {
      success: true,
      code: 200,
      data,
    };
  }
}
