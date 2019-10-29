import { createAction, props } from '@ngrx/store';
import { CartItem } from 'src/app/models/cartitem';

export class CartActions {
  static addToCart = createAction('[Cart] addToCart', props<CartItem>());

  static removeFromCart = createAction(
    '[Cart] removeFromCart',
    props<{ productId: string }>()
  );

  static increaseProductCount = createAction('[Cart] increaseProductCount');

  static decreaseProductCount = createAction('[Cart] decreaseProductCount');

  static clearCart = createAction('[Cart] clearCart');
}
