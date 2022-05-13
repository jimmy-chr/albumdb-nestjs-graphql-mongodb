import { Injectable } from '@nestjs/common';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { Album } from './entities/album.entity';

@Injectable()
export class AlbumsService {
  create(createAlbumInput: CreateAlbumInput): Album {
    return { exampleField: createAlbumInput.exampleField };
  }

  findAll(): [Album] {
    return [{ exampleField: 1 }];
  }

  findOne(id: number): Album {
    return { exampleField: id };
  }

  update(id: number, updateAlbumInput: UpdateAlbumInput): Album {
    return { exampleField: updateAlbumInput.id };
  }

  remove(id: number): Album {
    return { exampleField: id };
  }
}
