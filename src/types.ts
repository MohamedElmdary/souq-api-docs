export interface RegisterBody {
  name: string;
  email: string;
  password: string;
}

export interface AddToCartBody {
  token: string;
}

export interface RemoveFromCartBody {
  token: string;
}

export interface CheckoutCartBody {
  token: string;
  card_number: string;
  valid_form: string;
  pin: string;
  name: string;
}
