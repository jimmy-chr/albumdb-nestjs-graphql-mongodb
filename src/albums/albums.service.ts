import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { ListAlbumsInput } from './dto/list-albums.input';
import { Album } from './entities/album.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AlbumsService {
  constructor(
    @InjectModel(Album.name)
    private readonly albumModel: Model<Album>,
  ) {}

  create(createAlbumInput: CreateAlbumInput) {
    const album = new this.albumModel(createAlbumInput);
    return album.save();
  }

  findAll(paginationQuery: ListAlbumsInput) {
    const { limit, offset } = paginationQuery;
    return this.albumModel.find().skip(offset).limit(limit).exec();
  }

  async findOne(id: string) {
    const album = await this.albumModel.findOne({ _id: id }).exec();
    if (!album) {
      throw new NotFoundException(`Album ${id} not found`);
    }
    return album;
  }

  async update(id: string, updateAlbumInput: UpdateAlbumInput) {
    const existingAlbum = await this.albumModel
      .findOneAndUpdate({ _id: id }, { $set: updateAlbumInput }, { new: true })
      .exec();

    if (!existingAlbum) {
      throw new NotFoundException(`Album ${id} not found`);
    }
    return existingAlbum;
  }

  async remove(id: string) {
    const album = await this.findOne(id);
    return album.remove();
  }
}
