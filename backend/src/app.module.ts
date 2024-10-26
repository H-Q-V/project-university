import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuModule } from './module/client/menu/menu.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './module/admin/user/user.module';
import { JobModule } from './module/client/job/job.module';
import { PayosModule } from './module/client/Payos/payos.module';
import { PassportModule } from '@nestjs/passport';
import { RevenueModule } from './module/admin/revenue/revenue.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MenuModule,
    UserModule,
    AuthModule,
    JobModule,
    PayosModule,
    PassportModule,
    RevenueModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
