import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JobService } from './job.service';
import { JobDto } from './job.dto';
import { AuthGuard } from '@nestjs/passport';
import { CreatorGuard } from 'src/auth/creator.guard';

@Controller('jobs')
export class JobController {
  constructor(private jobService: JobService) {}

  @Post('/create')
  @UseGuards(AuthGuard(), CreatorGuard)
  async createJob(@Body() jobDto: JobDto, @Request() req: any) {
    const data = await this.jobService.create(jobDto, req.creator);
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
  @Get(':id')
  async getJobById(@Param('id') id: string) {
    const job = await this.jobService.getJobById(id);
    if (!job) {
      throw new NotFoundException(`Job with ID ${id} not found`);
    }
    return {
      success: true,
      code: 200,
      data: job,
    };
  }
}
