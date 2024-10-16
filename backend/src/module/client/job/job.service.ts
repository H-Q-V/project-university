// module/job/job.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Job } from 'src/schema/job.schema';
import { JobDto } from './job.dto';

@Injectable()
export class JobService {
  constructor(@InjectModel(Job.name) private jobModel: Model<Job>) {}

  async create(jobDto: JobDto): Promise<Job> {
    const data = await this.jobModel.create(jobDto);
    if (!data) {
      throw new NotFoundException('Failed to create job');
    }
    return data;
  }

  async update(id: string, jobDto: JobDto): Promise<any> {
    const update = await this.jobModel.updateOne(
      {
        _id: id,
      },
      jobDto,
    );
    if (update.modifiedCount === 0) {
      throw new NotFoundException('Job not found');
    }
    return update;
  }

  async delete(id: string): Promise<boolean> {
    const data = await this.jobModel.findOne({
      _id: id,
    });
    if (!data) {
      throw new NotFoundException('Job not found');
    }
    await this.jobModel.deleteOne({ _id: id });
    return true;
  }

  async getJobs(): Promise<Job[]> {
    const data = await this.jobModel.find().exec();
    return data;
  }
}
