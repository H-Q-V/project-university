import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Payos } from 'src/schema/pay.schema';

@Injectable()
export class RevenueService {
  constructor(@InjectModel(Payos.name) private revenueModule: Model<Payos>) {}
  async getAll() {
    const data = await this.revenueModule.find();
    return data;
  }
  async delete(id: string) {
    const data = await this.revenueModule.findOne({ _id: id });
    if (!data) {
      throw new NotFoundException('Revenue not found');
    }
    await this.revenueModule.deleteOne({ _id: id });
    return true;
  }
}
