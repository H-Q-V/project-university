import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from '@mestrak/passport-multi-jwt';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schema/user.schema';
import { Model } from 'mongoose';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {
    super([
      {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
      },
    ]);
  }
  async validate(payload) {
    let user: any;
    if (payload.user) {
      console.log('Payload:', payload);
      user = await this.UserModel.findOne({ _id: payload.id }).lean();
      user = { ...user, id: user._id, user: true };
    }
    if (!user) {
      throw new UnauthorizedException('Access denied !');
    }
    return user;
  }
}
