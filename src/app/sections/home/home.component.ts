import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { debounce, distinctUntilChanged, debounceTime } from 'rxjs/operators';
import { Filter } from '../../models/filter';
import { Store, select } from '@ngrx/store';
import { AppState, selectProducts, selectFilter } from 'src/app/ngrx-store';
import { HomeActions } from './state/actions';
import { HomeState } from './state/store';
import { Product } from 'src/app/models/product';
import { CartActions } from '../cart/state/actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  $filter = this.store.pipe(select(selectFilter));
  $products = this.store.pipe(select(selectProducts));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}

  ontoggled(showOnlySale: boolean) {
    this.store.dispatch(
      HomeActions.filterProducts({ filter: { showOnlySale } })
    );
  }

  rangeChanged(range: number) {
    this.store.dispatch(HomeActions.filterProducts({ filter: { range } }));
  }

  onaddtoCart(product: Product) {
    this.store.dispatch(CartActions.addToCart(product));
  }
}
