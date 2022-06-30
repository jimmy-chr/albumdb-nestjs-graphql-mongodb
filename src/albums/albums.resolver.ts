import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AlbumsService } from './albums.service';
import { Album } from './entities/album.entity';
import { CreateAlbumInput } from './dto/create-album.input';
import { UpdateAlbumInput } from './dto/update-album.input';
import { ListAlbumsInput } from './dto/list-albums.input';

@Resolver(() => Album)
export class AlbumsResolver {
  constructor(private readonly albumsService: AlbumsService) {}

  @Mutation(() => Album)
  createAlbum(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput) {
    return this.albumsService.create(createAlbumInput);
  }

  @Query(() => [Album], { name: 'albums' })
  findAll(@Args('listAlbumsInput') listAlbumsInput: ListAlbumsInput) {
    return this.albumsService.findAll(listAlbumsInput);
  }

  @Query(() => Album, { name: 'album' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.albumsService.findOne(id);
  }

  @Mutation(() => Album)
  updateAlbum(@Args('updateAlbumInput') updateAlbumInput: UpdateAlbumInput) {
    return this.albumsService.update(updateAlbumInput._id, updateAlbumInput);
  }

  @Mutation(() => Album)
  removeAlbum(@Args('_id', { type: () => String }) id: string) {
    return this.albumsService.remove(id);
  }
}
