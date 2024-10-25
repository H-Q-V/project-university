import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Payos {
  @Prop()
  User: string;

  @Prop()
  Charity: string;

  @Prop()
  Amount: string;

  @Prop()
  Status: string;

  @Prop()
  Code: string;
}
export const PayosSchema = SchemaFactory.createForClass(Payos);
