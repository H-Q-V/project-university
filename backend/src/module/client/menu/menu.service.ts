import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Menu } from 'src/schema/menu.schema';
import { CreateMenuDto } from './menu.dto';

@Injectable()
export class MenuService {
  constructor(@InjectModel(Menu.name) private menuModel: Model<Menu>) {}
  async create(createMenu: CreateMenuDto): Promise<any> {
    const data = await this.menuModel.create(createMenu);
    if (!data) {
      throw new NotFoundException('Failed to create menu');
    }
    return data;
  }

  async update(id: string, body): Promise<any> {
    const update = await this.menuModel.updateOne(
      {
        _id: id,
      },
      body,
    );
    if (update.modifiedCount === 0) {
      throw new NotFoundException('menu not found');
    }
    return update;
  }

  async delete(id: string): Promise<any> {
    const data = await this.menuModel.findOne({
      _id: id,
    });
    if (!data) {
      throw new NotFoundException('Menu not found');
    }
    await this.menuModel.deleteOne({ _id: id });
    return true;
  }

  getMenus() {
    const data = this.menuModel.find();
    return data;
  }
}
