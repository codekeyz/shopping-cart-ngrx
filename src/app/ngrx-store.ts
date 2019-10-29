import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  Store,
  createSelector
} from '@ngrx/store';
import { environment } from '../environments/environment';
import { CartState } from './sections/cart/state/store';
import { reducer as cartReducer } from './sections/cart/state/reducer';
import { reducer as homeReducer } from './sections/home/state/reducer';

import { HomeState } from './sections/home/state/store';

export interface AppState {
  cartState: CartState;
  homeState: HomeState;
}

// console.log all actions
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const reducers: ActionReducerMap<AppState> = {
  cartState: cartReducer,
  homeState: homeReducer
};

const cartState = (state: AppState) => state.cartState;
const homeState = (state: AppState) => state.homeState;
export const selectCartItems = createSelector(
  cartState,
  state => state.cartItems
);
export const selectCartTotal = createSelector(
  cartState,
  state => state.totalPrize
);
export const selectFilter = createSelector(
  homeState,
  state => state.filter
);
export const selectProducts = createSelector(
  homeState,
  state => state.productsList
);

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [debug];
