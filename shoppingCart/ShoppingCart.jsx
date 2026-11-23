import { useState } from 'react';
import { motion } from 'framer-motion';
import { products } from './Products';
import { Card } from './Card';
import { CartItems } from './CartItems';

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showCartProducts, setShowCartProducts] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });

    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  // Cart items
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // remove cart item
  const handleRemovesItems = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // increasse products
  const handleIncrease = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // decrease items
  const handleDecrease = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // grand total
  const grandTotal = cart.reduce(
    (sum, items) => sum + items.quantity * items.price,
    0
  );

  return (
    <div className="w-full p-6 bg-purple-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {!showCartProducts ? (
          <>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold capitalize text-purple-600 ml-2">
                Shopping Cart
              </h2>

              <button
                type="button"
                onClick={() => setShowCartProducts(true)}
                className="relative text-xl font-bold hover:cursor-pointer p-2 text-gray-800"
              >
                <i
                  className={`fa-solid fa-cart-shopping transition-transform duration-300 ease-out inline-block ${
                    isAnimating
                      ? 'scale-125 -rotate-12 text-purple-600'
                      : 'scale-100 rotate-0'
                  }`}
                />
                <span
                  className={`absolute -top-1.5 -right-2.5 bg-purple-700 text-white text-xs font-bold px-1.5 py-0.5 rounded-full transition-transform duration-300 ${
                    isAnimating ? 'scale-125 bg-amber-500' : 'scale-100'
                  }`}
                >
                  {totalItems}
                </span>
              </button>
            </div>

            <div className="w-full bg-white p-6 rounded-xl shadow-sm flex flex-wrap justify-center gap-5">
              {products.length > 0 ? (
                products.map((product) => (
                  <Card
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                  />
                ))
              ) : (
                <p className="w-full text-center text-gray-500">
                  No Products Available
                </p>
              )}
            </div>
          </>
        ) : (
          <CartItems
            cartItems={cart}
            onBack={() => setShowCartProducts(false)}
            onRemove={handleRemovesItems}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            totalPrice={grandTotal}
          />
        )}
      </div>
    </div>
  );
}
