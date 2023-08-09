import React, { createContext, useState } from "react";

export interface Book {
  id: number;
  title: string;
  author: string;
  description: string;
  price: number;
}

export interface CartContextProps {
  cartItems: Book[];
  addToCart: (book: Book) => void;
}

export const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<Book[]>([]);

  const addToCart = (book: Book) => {
    setCartItems((prevCartItems) => [...prevCartItems, book]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
