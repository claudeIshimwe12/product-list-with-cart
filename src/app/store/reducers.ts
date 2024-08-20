import { createReducer, on } from '@ngrx/store';
import * as ProductsActions from './actions';
import { AppStateInterface } from '../model/appState.interface';

export const initialState: AppStateInterface = {
  isLoading: false,
  products: [],
  error: null,
};

export const reducers = createReducer(
  initialState,
  on(ProductsActions.getProducts, (state) => ({ ...state, isLoading: true })),
  on(ProductsActions.getProductsSuccess, (state, action) => ({
    ...state,
    isLoading: false,
    posts: action.products,
  })),
  on(ProductsActions.getProductsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);
