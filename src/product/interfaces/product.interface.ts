export interface IProduct {
  name: string;
  description: string;
  imageURL: string;
  price: number;
  category: string;
  stock: number;
  rating: number;
  numReviews: number;
  reviews: IReviews[];
  createdAt?: Date;
}

export interface IReviews {
  name: string;
  rating: number;
  comment: string;
}
