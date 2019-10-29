import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './ngrx-store';
import { Observable } from 'rxjs';
import { CartState } from './sections/cart/state/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  $cartCount: Observable<CartState>;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.$cartCount = this.store.select('cartState');
  }
}
