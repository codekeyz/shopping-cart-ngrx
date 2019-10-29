import { CartItem } from 'src/app/models/cartitem';

export interface CartState {
  cartItems: CartItem[];
  totalPrize: number;
}

export const initialState: CartState = {
  cartItems: [],
  totalPrize: 0
};
