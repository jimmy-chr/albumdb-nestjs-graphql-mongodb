import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
@ObjectType()
export class Album {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  @Prop()
  @Field(() => String, { description: 'Album title ' })
  title: string;
  @Prop()
  @Field(() => String, { description: 'Album artist ' })
  artist: string;
  @Prop()
  @Field(() => Int, { description: 'Album release year ' })
  year: number;
}

export const AlbumSchema = SchemaFactory.createForClass(Album);
