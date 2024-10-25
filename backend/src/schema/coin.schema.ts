import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Coin {
  @Prop()
  User: string;

  @Prop()
  coins: string;
}

export const CoinSchema = SchemaFactory.createForClass(Coin);
