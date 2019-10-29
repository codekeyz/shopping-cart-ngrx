import { createReducer, on, Action } from '@ngrx/store';
import { initialState, CartState } from './store';
import { CartActions } from './actions';

const cartReducer = createReducer(
  initialState,
  on(CartActions.addToCart, state => ({ ...state, cartItems: [] }))
  // on(CartActions.removeFromCart, state => ({ ...state, home: state.home + 1 })),
  // on(CartActions.increaseProductCount, state => ({
  //   ...state,
  //   home: state.home + 1
  // })),
  // on(CartActions.decreaseProductCount, state => ({
  //   ...state,
  //   home: state.home + 1
  // })),
  // on(CartActions.clearCart, state => ({ ...state, home: state.home + 1 }))
);

export function reducer(state: CartState | undefined, action: Action) {
  return cartReducer(state, action);
}
