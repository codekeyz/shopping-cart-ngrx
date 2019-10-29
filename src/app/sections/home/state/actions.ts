import { createAction, props } from '@ngrx/store';
import { Filter, Category } from 'src/app/models/filter';

export class HomeActions {
  static loadProducts = createAction(
    '[Home] loadProducts',
    props<{ category?: Category }>()
  );

  static filterProducts = createAction(
    '[Home] filterProducts',
    props<{ filter?: Filter }>()
  );

  static clearFilter = createAction('[Home] clearFilter');
}
