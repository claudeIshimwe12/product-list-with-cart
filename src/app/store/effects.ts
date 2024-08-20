import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ProductsService } from '../services/products.service';
import * as ProductsActions from './actions';

@Injectable()
export class PostsEffects {
  getPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.getProducts),
      mergeMap(() => {
        return this.productsService.getProducts().pipe(
          map((products) => ProductsActions.getProductsSuccess({ products })),
          catchError((error) =>
            of(ProductsActions.getProductsFailure({ error: error.message }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
