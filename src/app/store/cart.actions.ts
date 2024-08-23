import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.interface';

export const addProduct = createAction('[Cart] addProduct', props<Product>());
