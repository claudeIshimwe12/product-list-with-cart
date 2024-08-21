import { Component, HostListener, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../model/product.interface';
import { ScreenService } from '../../services/window.service';
import { EventEmitter } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input({ required: true }) product!: Product;
  quantity: number = 1;
  screenSize!: number;
  showQuantityChanger: boolean = false;

  constructor(
    private screenService: ScreenService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.screenSize = this.screenService.getScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenSize = this.screenService.getScreenWidth();
  }

  onClick(product: Product) {
    this.showQuantityChanger = true;
    this.cartService.addToCart({ product, quantity: 1 });
  }

  onQuantityIncrese(product: Product) {
    this.cartService.increaseProductQuantity(product);
    this.quantity = this.quantity + 1;
  }
  onQuantityDecrease(product: Product) {
    if (this.quantity <= 1) {
      this.cartService.removeItemFromCart(product);
      this.showQuantityChanger = !this.showQuantityChanger;
    }
    this.cartService.decreaseProductQuantity(product);
    this.quantity = this.quantity - 1;
  }
}
