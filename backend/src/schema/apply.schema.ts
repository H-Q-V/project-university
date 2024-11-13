import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Apply {
  @Prop()
  userid: string;

  @Prop()
  fullname: string;

  @Prop()
  phone: string;

  @Prop()
  gender: string;

  @Prop()
  date_of_birth: string;

  @Prop()
  marriage: string;

  @Prop()
  province: string;

  @Prop()
  residence: string;

  @Prop()
  file: string[];

  @Prop()
  title: string;

  @Prop()
  qualification: string;

  @Prop()
  experience: string;

  @Prop()
  current_position: string;

  @Prop()
  desired_position: string;

  @Prop()
  desired_job: string;

  @Prop()
  salary: string;

  @Prop()
  workplace: string;
}

export const ApplySchema = SchemaFactory.createForClass(Apply);
