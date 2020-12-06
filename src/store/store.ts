import { createContext, useContext } from 'react';
import { BookStore } from './BookStore';

export const store = {
  bookStore: BookStore()
};
export const StoreContext = createContext(store);
export const useStore = () => {
  return useContext(StoreContext);
};