import {
  Body,
  Injectable,
  NotFoundException,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
const PayOS = require('@payos/node');
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
// import PayOS from '@payos/node';
import { Model } from 'mongoose';
import { Helper } from 'src/common/util/helper';
import { Coin } from 'src/schema/coin.schema';
import { Payos } from 'src/schema/pay.schema';
import { User } from 'src/schema/user.schema';
@Injectable()
export class PayosService {
  private payos;
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(Payos.name) private payosModel: Model<Payos>,
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Coin.name) private coinModel: Model<Coin>,
  ) {
    this.payos = new PayOS(
      process.env.CLIENT_ID,
      process.env.API_KEY,
      process.env.CHECKSUM_KEY,
    );
  }
  async createPayment(body, user: any): Promise<any> {
    const username = await this.userModel.findOne({ _id: user.id });
    const desc = Helper.random(9);
    const codePay = Helper.generateOrderCode();
    const order = {
      amount: body.amount,
      description: `${desc}`,
      orderCode: codePay,
      returnUrl: `http://localhost:5173/recruitment`,
      cancelUrl: `http://localhost:5173/recruitment`,
    };
    await this.payosModel.create({
      User: username._id,
      Charity: codePay,
      Amount: body.amount,
      Status: 'Pending',
      Code: desc,
    });
    const paymentLink = await this.payos.createPaymentLink(order);
    return { checkoutUrl: paymentLink.checkoutUrl };
  }

  async AuthenPay(paymentData: any): Promise<any> {
    console.log('a', paymentData.code);
    if (paymentData.code == '00') {
      const code = paymentData.data.description;
      const paymentInfo = await this.payosModel.findOneAndUpdate(
        { Code: code },
        { Status: 'confirmed' },
        { new: true },
      );
      const userId = await this.payosModel.findOne({ User: paymentInfo.User });
      const coinleft = await this.coinModel.findOne({ User: userId.User });
      if (!coinleft) {
        await this.coinModel.create({
          User: userId.User,
          coins: paymentData.data.amount,
        });
      } else {
        const newAmount =
          Number(paymentData.data.amount) + Number(coinleft.coins);
        await this.coinModel.findOneAndUpdate(
          { User: userId.User },
          { coins: newAmount.toString() },
          { new: true },
        );
      }
      return paymentInfo;
    }
  }

  async Coin(user: any) {
    const data = this.coinModel.findOne({ User: user.id });
    return data;
  }

  async getAllCoin() {
    const data = this.payosModel.find({
      Status: 'confirmed',
    });
    return data;
  }

  async UpdatePay(id: string, body): Promise<any> {
    const update = await this.payosModel.updateOne(
      {
        _id: id,
      },
      body,
    );
    if (update.modifiedCount === 0) {
      throw new NotFoundException('apply not found');
    }
    return update;
  }

  async DeletePay(id: string) {
    const data = await this.payosModel.findOne({ _id: id });
    if (!data) {
      throw new NotFoundException('apply not found');
    }
    await this.payosModel.deleteOne({ _id: id });
    return true;
  }
}
