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
import { JobService } from './job.service';
import { JobDto } from './job.dto';

@Controller('jobs')
export class JobController {
  constructor(private jobService: JobService) {}

  @Post('/create')
  @UsePipes(new ValidationPipe())
  async createJob(@Body() jobDto: JobDto) {
    const data = await this.jobService.create(jobDto);
    return {
      success: true,
      code: 200,
      message: 'Create job successfully',
      data,
    };
  }

  @Put('/update/:id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() jobDto: JobDto) {
    const data = await this.jobService.update(id, jobDto);
    return {
      success: true,
      code: 200,
      message: 'Update job successfully',
      data,
    };
  }

  @Delete('/delete/:id')
  @UsePipes(new ValidationPipe())
  async delete(@Param('id') id: string) {
    await this.jobService.delete(id);
    return {
      success: true,
      code: 200,
      message: 'Delete job successfully',
    };
  }

  @Get('/getAll')
  async getJobs() {
    const jobs = await this.jobService.getJobs();
    return {
      success: true,
      code: 200,
      data: jobs,
    };
  }
}
