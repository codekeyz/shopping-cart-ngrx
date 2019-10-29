import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  Store
} from '@ngrx/store';
import { environment } from '../environments/environment';
import { CartState } from './sections/cart/state/store';
import { reducer as cartReducer } from './sections/cart/state/reducer';
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
  homeState: null
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [debug];
