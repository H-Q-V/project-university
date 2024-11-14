import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Apply } from 'src/schema/apply.schema';
import { ApplyDto, UpdateApplyDto } from './apply.dto';

@Injectable()
export class ApplyService {
  constructor(@InjectModel(Apply.name) private applyModel: Model<Apply>) {}

  async create(applyDto: ApplyDto, user: any): Promise<Apply> {
    applyDto.userid = user.id;
    const data = await this.applyModel.create(applyDto);
    if (!data) {
      throw new NotFoundException('Failed to create apply');
    }
    return data;
  }
  async update(id: string, updateDto: UpdateApplyDto): Promise<any> {
    const update = await this.applyModel.updateOne(
      {
        _id: id,
      },
      updateDto,
    );
    if (update.modifiedCount === 0) {
      throw new NotFoundException('Apply not found');
    }
    return update;
  }

  async delete(id: string): Promise<any> {
    const data = await this.applyModel.findOne({ _id: id });
    if (!data) {
      throw new NotFoundException('Apply not found');
    }
    await this.applyModel.deleteOne({ _id: id });
    return true;
  }

  async getApply() {
    const data = await this.applyModel.find();
    return data;
  }
}
