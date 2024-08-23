import { Product } from '../models/product.interface';

export const cartSelector = (state: {
  isLoading: boolean;
  products: Product[];
  error: string;
}) => state;
