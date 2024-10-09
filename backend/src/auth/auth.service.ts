import {
  BadGatewayException,
  //BadRequestException,
  HttpException,
  //Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UserLoginDto } from 'src/module/client/user/user.dto';
import { User } from 'src/schema/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AdminLoginDto, CreateAdminDto } from 'src/module/admin/auth/auth.dto';
//import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
const BCRYPT_SALT = 10;

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,
    //  @Inject(CACHE_MANAGER) private cacheManager: ,
    private JwtService: JwtService,
  ) {}
  async register(body: CreateUserDto): Promise<any> {
    let { email, password, name } = body;
    email = email.trim().toLocaleLowerCase();
    const checkEmail = await this.UserModel.findOne({ email: body.email });
    if (checkEmail) {
      throw new BadGatewayException('Email already exists!');
    }

    const hash = await bcrypt.hash(password, BCRYPT_SALT);
    const data: any = {
      email,
      password: hash,
      name,
      role: 'user',
      create_at: new Date(),
    };
    const user = await this.UserModel.create(data).catch((e: any) => {
      throw new HttpException(e.message, 400);
    });
    const token = await this.JwtService.sign({ id: user._id, user: true });
    return {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
      token,
    };
  }

  async login(body: UserLoginDto): Promise<any> {
    const { email, password } = body;
    if (!email) {
      throw new UnauthorizedException('Invalid Email');
    }
    const user = await this.UserModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid Email or Password');
    }
    if (!password) {
      throw new UnauthorizedException('Invalid Email or Password');
    }
    const token = await this.JwtService.sign({ id: user._id, user: true });
    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
  private randomOTP(n = 6) {
    const random = Math.random().toString().split('.').pop();
    return random.slice(0, n);
  }
  // async forgotPassword(email: string): Promise<any> {
  //   const user = await this.UserModel.findOne({ email });
  //   if (!user) {
  //     throw new BadRequestException('User not found !');
  //   }
  //   const otp = this.randomOTP();
  //   const subject = 'Reset your Password - ' + otp;
  //   const title = 'Reset your Password';
  //   const content = `Hi ${user.name || user.email},<br /><br />
  //                    Forgot your password? We received a request to reset your password.<br />
  //                    Use the verification code below to continue: <strong>${otp}</strong>`;

  // }

  // admin
  async registerAdmin(body: CreateAdminDto): Promise<any> {
    let { email, password, name } = body;
    email = email.trim().toLocaleLowerCase();

    const checkEmail = await this.UserModel.findOne({ email: body.email });
    if (checkEmail) {
      throw new BadGatewayException('Email already exists!');
    }

    const hash = await bcrypt.hash(password, BCRYPT_SALT);
    const data: any = {
      email,
      password: hash,
      name,
      role: 'admin',
      create_at: new Date(),
    };
    const user = await this.UserModel.create(data).catch((e: any) => {
      throw new HttpException(e.message, 400);
    });
    const token = await this.JwtService.sign({ id: user._id, user: true });
    return {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
      token,
    };
  }

  async loginAdmin(body: AdminLoginDto): Promise<any> {
    const { email, password } = body;
    if (!email) {
      throw new UnauthorizedException('Invalid Email');
    }
    const user = await this.UserModel.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('Invalid Email or Pasword');
    }

    if (!password) {
      throw new UnauthorizedException('Invalid Email or Pasword');
    }

    const token = await this.JwtService.sign({ id: user._id, user: true });
    return {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}
