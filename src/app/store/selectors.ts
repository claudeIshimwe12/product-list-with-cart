import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../model/appState.interface';
export const selectFeature = (state: AppStateInterface) => state;

export const isLoadingSelector = createSelector(
  selectFeature,
  (state) => state.isLoading
);

export const postsSelector = createSelector(
  selectFeature,
  (state) => state.products
);

export const errorSelector = createSelector(
  selectFeature,
  (state) => state.error
);
