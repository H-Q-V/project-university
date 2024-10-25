import {
  BadGatewayException,
  HttpException,
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto, UserLoginDto } from 'src/module/client/user/user.dto';
import { User } from 'src/schema/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { AdminLoginDto, CreateAdminDto } from 'src/module/admin/user/user.dto';
import { sendEmail } from '../common/util/email';
import { text } from 'stream/consumers';
import { createCache } from 'cache-manager';
import { Keyv } from 'keyv';
import { LRUCache } from 'lru-cache';

const keyv = new Keyv({ store: new LRUCache({ max: 5000, ttl: 60000 }) });
const cache = createCache({ stores: [keyv] });
const BCRYPT_SALT = 10;
const TTL = 1000 * 60 * 3;

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private UserModel: Model<User>,

    private JwtService: JwtService,
  ) {}
  async register(body: CreateUserDto): Promise<any> {
    let { email, password, name } = body;
    email = email.trim().toLocaleLowerCase();
    if (!body.name) {
      throw new NotFoundException('Không được để trống tên');
    }

    if (!body.email) {
      throw new NotFoundException('Không được để trống email');
    }

    if (!body.password) {
      throw new NotFoundException('Không được để trống mật khẩu');
    }
    const checkEmail = await this.UserModel.findOne({ email: body.email });
    if (checkEmail) {
      throw new BadGatewayException('Email already exists!');
    }

    const data: any = {};
    if (name) {
      data.name = name;
    }
    if (email) {
      data.email = email;
    }
    if (password) {
      data.password = await bcrypt.hash(password, BCRYPT_SALT);
    }
    data.role = 'user';

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await cache.set(
      `user-${otp}`,
      { name, email, password: data.password },
      TTL,
    );
    await sendEmail({
      to: email,
      subject: 'Mã OTP đăng ký',
      text: `Mã OTP của bạn là: ${otp}`,
      html: `<b> Mã OTP của bạn là: ${otp}</b>`,
    });

    await cache.set(`otp-${otp}`, otp, TTL);
    return true;
  }

  async verifyOtp(otp: string): Promise<any> {
    const cachedOtp = await cache.get(`otp-${otp}`);
    if (!cachedOtp || cachedOtp !== otp) {
      throw new UnauthorizedException('OTP không hợp lệ');
    }

    const cachedUser = await cache.get<{
      name: string;
      email: string;
      password: string;
    }>(`user-${otp}`);
    if (!cachedUser) {
      throw new NotFoundException('Người dùng không tồn tại');
    }

    const user = await this.UserModel.create({
      name: cachedUser.name,
      email: cachedUser.email,
      password: cachedUser.password,
      role: 'user',
    }).catch((e: any) => {
      throw new HttpException(e.message, 400);
    });
    await cache.del(`user-${otp}`);
    await cache.del(`otp-${otp}`);

    return {
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
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
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
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

  async registerAdmin(body: CreateAdminDto): Promise<any> {
    let { email, password, name } = body;
    email = email.trim().toLocaleLowerCase();
    if (!body.name) {
      throw new NotFoundException('Không được để trống tên');
    }

    if (!body.email) {
      throw new NotFoundException('Không được để trống email');
    }

    if (!body.password) {
      throw new NotFoundException('Không được để trống mật khẩu');
    }
    const checkEmail = await this.UserModel.findOne({ email: body.email });
    if (checkEmail) {
      throw new BadGatewayException('Email already exists!');
    }
    const data: any = {};
    if (name) {
      data.name = name;
    }
    if (password) {
      data.password = await bcrypt.hash(password, BCRYPT_SALT);
    }
    if (email) {
      data.email = email;
    }

    data.role = 'admin';
    const user = await this.UserModel.create(data).catch((e: any) => {
      throw new HttpException(e.message, 400);
    });
    const token = await this.JwtService.sign(
      { id: user._id, user: true },
      // { secret: process.env.JWT_SECRET, expiresIn: '30d' },
    );
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

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
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

  getAllUser() {
    let data = this.UserModel.find();
    return data;
  }
}
