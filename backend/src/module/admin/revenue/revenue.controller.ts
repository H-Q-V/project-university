import { Controller, Delete, Get, Param } from '@nestjs/common';
import { RevenueService } from './revenue.service';

@Controller('admin/revenue')
export class RevenueController {
  constructor(private revenueService: RevenueService) {}
  @Get('/getAll')
  async getAll() {
    const data = await this.revenueService.getAll();
    return {
      success: true,
      code: 200,
      data: data,
    };
  }
  @Delete('/Delete/:id')
  async delete(@Param('id') id: string) {
    await this.revenueService.delete(id);
    return {
      success: true,
      code: 200,
      message: 'delete done',
    };
  }
}
