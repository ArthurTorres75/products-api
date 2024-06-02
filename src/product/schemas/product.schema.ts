import { Prop, raw, SchemaFactory, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop({ type: String, required: true })
  name: string;
  @Prop(String)
  description: string;
  @Prop(Number)
  price: number;
  @Prop(String)
  imageURL: string;
  @Prop(String)
  category: string;
  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
  @Prop(Number)
  stock: number;
  @Prop(Number)
  rating: number;
  @Prop(Number)
  numReviews: number;
  @Prop(
    raw([
      {
        name: { type: String },
        rating: { type: Number },
        comment: { type: String },
      },
    ]),
  )
  reviews: any[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);

// export const ProductSchema = new Schema({
//   name: { type: String, required: true },
//   description: String,
//   price: Number,
//   imageURL: String,
//   category: String,
//   createdAt: { type: Date, default: Date.now() },
//   stock: Number,
//   rating: Number,
//   numReviews: Number,
//   reviews: [
//     {
//       name: String,
//       rating: Number,
//       comment: String,
//     },
//   ],
// });
