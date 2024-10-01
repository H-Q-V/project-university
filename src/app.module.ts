import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuModule } from './module/client/menu/menu.module';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
//import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    MenuModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
