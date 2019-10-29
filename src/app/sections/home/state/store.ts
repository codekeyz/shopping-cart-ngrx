import { Product } from 'src/app/models/product';
import { Filter, Category } from 'src/app/models/filter';

export class HomeState {
  productsList: Product[];
  filter: Filter;
}

export const initialState: HomeState = {
  productsList: [],
  filter: {}
};
