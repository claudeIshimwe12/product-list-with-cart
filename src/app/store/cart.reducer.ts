import { createReducer, on } from '@ngrx/store';
import { addProduct } from './cart.actions';

export const initialState = {
  image: {
    thumbnail: './assets/images/image-macaron-thumbnail.jpg',
    mobile: './assets/images/image-macaron-mobile.jpg',
    tablet: './assets/images/image-macaron-tablet.jpg',
    desktop: './assets/images/image-macaron-desktop.jpg',
  },
  name: 'Macaron Mix of Five',
  category: 'Macaron',
  price: 8.0,
};

export const cartReducer = createReducer(
  initialState,
  on(addProduct, (state) => state)
);
