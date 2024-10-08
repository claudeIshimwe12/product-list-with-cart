import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  private url = 'assets/data.json';
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }
}
