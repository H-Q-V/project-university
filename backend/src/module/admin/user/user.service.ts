import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schema/user.schema';
import * as bcrypt from 'bcrypt';
const BCRYPT_SALT = 10;
@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private UserModel: Model<User>) {}
  getAllUser() {
    const data = this.UserModel.find();
    return data;
  }

  async create(body): Promise<any> {
    let { name, email, role, password } = body;
    if (!body.name) {
      throw new NotFoundException('không đc để trông tên');
    }
    if (!body.email) {
      throw new NotFoundException('không đc để trông email');
    }
    if (!body.role) {
      throw new NotFoundException('không đc để trông role');
    }
    if (!body.password) {
      throw new NotFoundException('không đc để trông mật khẩu');
    }
    const hash = await bcrypt.hash(password, BCRYPT_SALT);
    const createuser: any = {
      name,
      email,
      password: hash,
      role,
      create_at: new Date(),
    };
    let data = await this.UserModel.create(createuser);
    return data;
  }

  async update(id: string, body): Promise<any> {
    let { name, email, role, password } = body;
    const updateeuser: any = {};
    if (name) {
      updateeuser.name = name;
    }
    if (role) {
      updateeuser.role = role;
    }
    if (email) {
      updateeuser.email = email;
    }
    if (password) {
      updateeuser.password = await bcrypt.hash(password, BCRYPT_SALT);
    }

    if (Object.keys(updateeuser).length === 0) {
      throw new NotFoundException('Không có trường nào để cập nhật');
    }
    let update = await this.UserModel.findByIdAndUpdate(
      id,
      { $set: updateeuser },
      { new: true },
    );
    return update;
  }

  async delete(id: string): Promise<any> {
    let data = await this.UserModel.findOne({
      _id: id,
    });
    if (!data) {
      throw new NotFoundException('User not found');
    }
    await this.UserModel.deleteOne({ _id: id });
    return true;
  }
}
