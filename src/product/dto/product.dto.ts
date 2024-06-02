import { IReviews } from '../interfaces/product.interface';

export class CreateProductDto {
  readonly name: string;
  readonly description: string;
  readonly imageURL: string;
  readonly price: number;
  readonly category: string;
  readonly stock: number;
  readonly rating: number;
  readonly numReviews: number;
  readonly reviews: IReviews;
  readonly createdAt: Date;
}
