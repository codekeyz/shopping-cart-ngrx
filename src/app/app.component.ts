import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState, selectCartTotal } from './ngrx-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  $cartCount = this.store.pipe(select(selectCartTotal));

  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
