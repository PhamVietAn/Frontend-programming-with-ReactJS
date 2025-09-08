export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
  quantity: number;
  available: number;
  isbn: string;
  status: 'available' | 'out_of_stock' | 'discontinued';
}

export type BookStatus = 'available' | 'out_of_stock' | 'discontinued';

export interface BookFormData {
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
  quantity: number;
  isbn: string;
  status: BookStatus;
}

export interface BookStats {
  totalBooks: number;
  availableBooks: number;
  outOfStockBooks: number;
}
