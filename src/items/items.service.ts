import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { ItemsModule } from './items.module';
import { Items } from './schema/items.schema';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Items.name) private itemsModule: Model<ItemsModule>,
  ) {}
  async create(createItemDto: CreateItemDto) {
    const newItemCreated = this.itemsModule.create(createItemDto);
    return newItemCreated;
  }

  findAll() {
    const items = this.itemsModule.find({});
    return items;
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  remove(id: number) {
    return `This action removes a #${id} item`;
  }
}
