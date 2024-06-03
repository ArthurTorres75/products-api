import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { CreateProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';
import { Response } from 'express';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Post('/create')
  async createPost(
    @Res() res: Response,
    @Body() createProductDto: CreateProductDto,
  ) {
    const newProduct =
      await this.productService.createProduct(createProductDto);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'Product successfully created', newProduct });
  }

  @Get('/')
  async getProducts(@Res() res: Response) {
    const products = await this.productService.getProducts();
    return res.status(HttpStatus.OK).json(products);
  }

  @Get('/:productId')
  async getProduct(
    @Res() res,
    @Param('productId') productId,
  ): Promise<Product[]> {
    const product = await this.productService.getProduct(productId);
    if (!product) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json(product);
  }

  @Delete('/delete/:productId')
  async deleteProduct(@Res() res, @Param('productId') productId): Promise<any> {
    const deletedProduct = await this.productService.deleteProduct(productId);
    if (!deletedProduct) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json({
      message: 'Product deleted successfully',
      deletedProduct,
    });
  }

  @Delete('/')
  async deleteProductUsingQueryParams(
    @Res() res,
    @Query('productId') productId,
  ): Promise<any> {
    const deletedProduct = await this.productService.deleteProduct(productId);
    if (!deletedProduct) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json({
      message: 'Product deleted successfully',
      deletedProduct,
    });
  }

  @Put('/update/:productId')
  async updateProduct(
    @Res() res,
    @Param('productId') productId,
    @Body() updatedProductData: CreateProductDto,
  ) {
    const updatedProduct = await this.productService.updateProduct(
      productId,
      updatedProductData,
    );
    if (!updatedProduct) throw new NotFoundException('Product not found');
    return res.status(HttpStatus.OK).json({
      message: 'Product updated successfully',
      updatedProduct,
    });
  }
}
