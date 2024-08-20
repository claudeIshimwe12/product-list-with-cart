import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  products$!: Observable<Product[]>;
  constructor(private products: ProductsService) {}

  ngOnInit(): void {
    this.products$ = this.products.getProducts();
  }
}
