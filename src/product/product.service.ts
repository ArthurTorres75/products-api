import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { CreateProductDto } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return await createdProduct.save();
  }

  async getProducts(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async getProduct(productId: string): Promise<Product> {
    return await this.productModel.findById(productId);
  }

  async deleteProduct(productId: string): Promise<Product> {
    return await this.productModel.findByIdAndDelete(productId);
  }

  async updateProduct(
    productId: string,
    createProductDto: CreateProductDto,
  ): Promise<Product> {
    return await this.productModel.findByIdAndUpdate(
      productId,
      createProductDto,
      { new: true },
    );
  }
}
