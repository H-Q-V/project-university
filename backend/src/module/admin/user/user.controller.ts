import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/getAll')
  async getAllUser() {
    const data = await this.userService.getAllUser();
    return {
      success: true,
      code: 200,
      data: data,
    };
  }

  @Post('/post')
  @UsePipes(new ValidationPipe())
  async createUser(@Body() body) {
    let data = await this.userService.create(body);
    return {
      success: true,
      code: 200,
      data: data,
    };
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  async UpdateAuth(@Param('id') id: string, @Body() body) {
    const data = await this.userService.update(id, body);
    return {
      success: true,
      code: 200,
      data,
    };
  }

  @Delete('/delete/:id')
  @UsePipes(new ValidationPipe())
  async DeleteAuth(@Param('id') id: string) {
    await this.userService.delete(id);
    return {
      success: true,
      code: 200,
      message: 'delete done',
    };
  }
}
