import { motion } from 'framer-motion';

export function CartItems({
  cartItems,
  totalPrice,
  onBack,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="bg-white p-6 rounded-xl shadow-sm"
    >
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h2 className="text-2xl font-bold text-gray-800">
          Cart Items ({cartItems.reduce((sum, i) => sum + i.quantity, 0)})
        </h2>
        <button
          type="button"
          onClick={onBack}
          className="bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg cursor-pointer transition flex items-center gap-2"
        >
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back to Products</span>
        </button>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-10 text-gray-500">
          <p className="text-lg font-medium">Your cart is empty.</p>
          <button
            type="button"
            onClick={onBack}
            className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg cursor-pointer"
          >
            See Products
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-gray-200 p-4 rounded-xl"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-bold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    ₹{item.price} × {item.quantity} ={' '}
                    <span className="font-semibold text-gray-900">
                      ₹{item.price * item.quantity}
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => onDecrease(item.id)}
                  className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold cursor-pointer"
                >
                  -
                </button>
                <span className="font-bold min-w-6 text-center">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => onIncrease(item.id)}
                  className="w-8 h-8 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold cursor-pointer"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => onRemove(item.id)}
                  className="ml-2 text-red-600 hover:text-red-700 px-2 py-1 cursor-pointer"
                  title="Remove item"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center pt-4 border-t mt-6">
            <span className="text-lg font-bold text-gray-700">Grand Total</span>
            <span className="text-2xl font-extrabold text-purple-700">
              ₹{totalPrice}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
