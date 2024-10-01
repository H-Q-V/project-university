import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from 'src/schema/menu.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Menu.name,
        schema: MenuSchema,
      },
    ]),
    MenuModule,
  ],
  controllers: [MenuController],
  providers: [MenuService],
})
export class MenuModule {}
