import { Module } from '@nestjs/common';
import { RevenueController } from './revenue.controller';
import { RevenueService } from './revenue.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Payos } from 'src/schema/pay.schema';
import { PayosSchema } from 'src/schema/pay.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Payos.name, schema: PayosSchema }]),
  ],
  controllers: [RevenueController],
  providers: [RevenueService],
})
export class RevenueModule {}
