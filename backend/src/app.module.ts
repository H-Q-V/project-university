import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuModule } from './module/client/menu/menu.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './module/admin/user/user.module';
import { JobModule } from './module/client/job/job.module';
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
