import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './menu.dto';

@Controller('menu')
export class MenuController {
  constructor(private menuService: MenuService) {}

  @Post('/create')
  @UsePipes(new ValidationPipe())
  async createMenu(@Body() createMenuDto: CreateMenuDto) {
    let data = await this.menuService.create(createMenuDto);
    return {
      success: true,
      code: 200,
      message: 'create menu successfuly',
      data,
    };
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() body) {
    const data = await this.menuService.update(id, body);
    return {
      success: true,
      code: 200,
      message: 'update menu successfuly',
      data,
    };
  }

  @Delete('/delete/:id')
  @UsePipes(new ValidationPipe())
  async delete(@Param('id') id: string) {
    await this.menuService.delete(id);
    return {
      success: true,
      code: 200,
      message: 'delete menu successfuly',
    };
  }

  @Get('getAll')
  async getMenus() {
    let menus = await this.menuService.getMenus();
    return {
      success: true,
      code: 200,
      data: menus,
    };
  }
}
