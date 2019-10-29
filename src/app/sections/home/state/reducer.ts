import { createReducer, on, Action, createSelector } from '@ngrx/store';
import { initialState, HomeState } from './store';
import { HomeActions } from './actions';

const homeReducer = createReducer(
  initialState,
  on(HomeActions.loadProducts, state => ({ ...state, productsList: [] }))
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

export function reducer(state: HomeState | undefined, action: Action) {
  return homeReducer(state, action);
}
