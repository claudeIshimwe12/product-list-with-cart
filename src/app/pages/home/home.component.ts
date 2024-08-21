import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product.interface';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  products$!: Observable<Product[]>;
  isOrderConfirmed: boolean = false;
  constructor(
    private products: ProductsService,
    private cartService: CartService
  ) {}

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
