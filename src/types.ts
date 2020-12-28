import { ApiProperty } from '@nestjs/swagger';

export class RegisterBody {
  @ApiProperty({ default: 'John Wick' })
  name: string;

  @ApiProperty({ default: 'John.Wick@gmail.com' })
  email: string;

  @ApiProperty({ default: 'John123456789Wick' })
  password: string;
}

export class AddToCartBody {
  @ApiProperty({ default: new Date().toISOString() })
  token: string;
}

export class RemoveFromCartBody {
  @ApiProperty({ default: new Date().toISOString() })
  token: string;
}

export class CheckoutCartBody {
  @ApiProperty({ default: new Date().toISOString() })
  token: string;

  @ApiProperty({ default: '	4111 1111 1111 1111' })
  card_number: string;

  @ApiProperty({ default: '02 / 24' })
  valid_form: string;

  @ApiProperty({ default: '0000' })
  pin: string;

  @ApiProperty({ default: 'John Wick' })
  name: string;
}
