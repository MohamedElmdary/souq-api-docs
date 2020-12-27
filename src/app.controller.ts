import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
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

  @Put('/souq/api/cart/add/{productid}')
  public addToCart(@Body() body: AddToCartBody) {
    return {
      added: true,
      status: 'OK',
    };
  }

  @Delete('/souq/api/cart/remove/{productid}')
  public removeFromCart(@Body() body: RemoveFromCartBody) {
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
