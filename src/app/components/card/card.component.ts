import {
  Component,
  HostListener,
  Inject,
  Input,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { Product } from '../../model/product.interface';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ScreenService } from '../../services/window.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input({ required: true }) product!: Product;

  screenSize!: number;

  constructor(private screenService: ScreenService) {}

  ngOnInit(): void {
    this.screenSize = this.screenService.getScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.screenSize = this.screenService.getScreenWidth();
  }
}
