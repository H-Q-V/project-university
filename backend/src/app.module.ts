import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuModule } from './module/client/menu/menu.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './module/admin/user/user.module';
// import { CacheModule } from '@nestjs/cache-manager';
import { JobModule } from './module/client/job/job.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true,
    }),
    // CacheModule.register({
    //   ttl: 5, // thời gian sống của cache (tính bằng giây)
    //   max: 100, // số lượng tối đa các mục trong cache
    // }),
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
