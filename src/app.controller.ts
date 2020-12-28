import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';
import {
  AddToCartBody,
  CheckoutCartBody,
  RegisterBody,
  RemoveFromCartBody,
} from './types';

@Controller()
export class AppController {
  @Post('/souq/api/register')
  public register(@Body() body: RegisterBody) {
    return {
      id: new Date().getTime(),
      name: body.name,
      token: new Date().toISOString(),
      refresh_token: `refresh ${new Date().toISOString()}`,
    };
  }

  @Put('/souq/api/cart/add/:id')
  @ApiParam({ name: 'id', example: '1' })
  public addToCart(@Body() body: AddToCartBody, @Param('id') id: string = '1') {
    return {
      added: true,
      status: 'OK',
    };
  }

  @Delete('/souq/api/cart/remove/:id')
  @ApiParam({ name: 'id', example: '1' })
  public removeFromCart(
    @Body() body: RemoveFromCartBody,
    @Param('id') id: string = '1',
  ) {
    return {
      removed: true,
      status: 'OK',
    };
  }

  @Post('/souq/api/cart/checkout')
  public checkoutCart(@Body() body: CheckoutCartBody) {
    return {
      status: true,
      done: 'OK',
    };
  }
}
