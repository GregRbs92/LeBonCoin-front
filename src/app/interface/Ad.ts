import { Category } from './Category';

export interface Ad {
  id: number;
  title: string;
  content: string;
  category: Category;
  salary?: number;
  contractType?: string;
  surface?: number;
  price?: number;
  fuelType?: string;
}
