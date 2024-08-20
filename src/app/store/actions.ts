import { createAction, props } from '@ngrx/store';
import { AppStateInterface } from '../model/appState.interface';
import { Product } from '../model/product.interface';
export const getProducts = createAction('[Products] Get Products');
export const getProductsSuccess = createAction(
  '[Products] Get Products success',
  props<{ products: Product[] }>()
);
export const getProductsFailure = createAction(
  '[Products] Get Products failure',
  props<{ error: string }>()
);
