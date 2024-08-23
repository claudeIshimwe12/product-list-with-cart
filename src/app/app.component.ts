import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './models/product.interface';
import { Observable } from 'rxjs';
import { CartService } from './services/cart.service';
import { Store } from '@ngrx/store';
import { cartSelector } from './store/cart.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  products$!: Observable<Product[]>;
  isOrderConfirmed: boolean = false;
  constructor(private products: ProductsService, private store: Store) {}

  ngOnInit(): void {
    this.products$ = this.products.getProducts();
  }

  handleOrderConfirmation() {
    this.isOrderConfirmed = !this.isOrderConfirmed;
  }
  placeNewOrder() {
    this.isOrderConfirmed = !this.isOrderConfirmed;
  }
}
