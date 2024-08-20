import { Product } from './product.interface';
export interface AppStateInterface {
  isLoading: boolean;
  products: Product[];
  error: string | null;
}
