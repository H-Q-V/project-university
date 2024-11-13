import {
  All,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Request,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PayosService } from './payos.service';
import { AuthGuard } from '@nestjs/passport';
import { CreatorGuard } from 'src/auth/creator.guard';
import { Code } from 'mongodb';
// import { Request } from 'express';
// import { UsersGuard } from 'src/auth/user.guard';

@Controller('payos')
export class PayosController {
  constructor(private payosService: PayosService) {}
  @Post('/create-payment-link')
  @UseGuards(AuthGuard(), CreatorGuard)
  async createPayment(@Body() body, @Request() req: any) {
    let data = await this.payosService.createPayment(body, req.creator);
    return {
      success: true,
      code: 200,
      data: data,
    };
  }

  @Post('/status-payment')
  async AuthenPay(@Body() body: any) {
    console.log('a:', body);
    const result = await this.payosService.AuthenPay(body);
    return {
      success: true,
      code: 200,
      data: result,
      message: 'Trạng thái thanh toán đã được cập nhật',
    };
  }

  @Get('/coin')
  @UseGuards(AuthGuard(), CreatorGuard)
  async Coin(@Request() req: any) {
    const data = await this.payosService.Coin(req.creator);
    return {
      success: true,
      code: 200,
      data: data,
    };
  }

  @Get('/getAllCoin')
  async GetAll() {
    const data = await this.payosService.getAllCoin();
    return {
      success: true,
      code: 200,
      data: data,
    };
  }

  @Put('/update/:id')
  async update(@Param('id') id: string, @Body() body) {
    const data = await this.payosService.UpdatePay(id, body);
    return {
      success: true,
      code: 200,
      data: data,
    };
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    await this.payosService.DeletePay(id);
    return {
      success: true,
      code: 200,
      message: 'delete successfuly',
    };
  }
}
