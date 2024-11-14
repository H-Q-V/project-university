import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document;

@Schema()
export class Job {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  company: string;

  @Prop({ required: true })
  location: string;

  @Prop({ required: true })
  salary: string;

  @Prop({ required: true })
  logo: string;


  @Prop({ required: true, type: [String] })
  benefits: string[];

  @Prop({ required: true })
  jobDescription: string;

  @Prop({ required: true })
  jobRequest: string;

  @Prop({ required: true, type: [String] }) 
  programmingLanguages: string[];
}

export const JobSchema = SchemaFactory.createForClass(Job);
