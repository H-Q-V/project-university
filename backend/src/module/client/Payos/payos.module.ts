import { Module } from '@nestjs/common';
import { PayosController } from './payos.controller';
import { PayosService } from './payos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Payos, PayosSchema } from 'src/schema/pay.schema';
import { PassportModule } from '@nestjs/passport';
import { User, UserSchema } from 'src/schema/user.schema';
import { Coin, CoinSchema } from 'src/schema/coin.schema';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),

    MongooseModule.forFeature([
      {
        name: Payos.name,
        schema: PayosSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Coin.name,
        schema: CoinSchema,
      },
    ]),
    // PassportModule,
  ],
  controllers: [PayosController],
  providers: [PayosService],
})
export class PayosModule {}
