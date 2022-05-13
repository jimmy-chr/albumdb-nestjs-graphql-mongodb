import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAlbumInput {
  @Field(() => String, { description: 'album title' })
  title: string;
  @Field(() => String, { description: 'album artist' })
  artist: string;
  @Field(() => Int, { description: 'release year' })
  year: number;
}
