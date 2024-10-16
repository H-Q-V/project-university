import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, UserLoginDto } from 'src/module/client/user/user.dto';
import { AdminLoginDto, CreateAdminDto } from 'src/module/admin/user/user.dto';
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

  @Get('/admin/all')
  async getAllUser() {
    let users = await this.authService.getAllUser();
    return {
      success: true,
      code: 200,
      data: users,
    };
  }

  @Post('/verify-otp')
  async verifyOtp(@Body() body: { otp: string }) {
    const data = await this.authService.verifyOtp(body.otp);
    return {
      success: true,
      code: 200,
      data,
    };
  }
}
