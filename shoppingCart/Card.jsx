import { motion } from 'framer-motion';

export function Card({ product, handleAddToCart }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.35,
        delay: 0.04,
        ease: 'easeOut',
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: {
          type: 'spring',
          stiffness: 400,
          damping: 1,
        },
      }}
      key={product.id}
      className="w-full sm:w-[250px] bg-white border border-gray-200 p-3 shadow-md rounded-lg flex flex-col justify-between transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:cursor-pointer"
    >
      <div>
        <div className="overfllow-hidden rounded-md mb-3">
          <motion.img
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.25 }}
            src={product.image}
            alt={product.name}
            className="w-full h-44 object-cover"
          />
        </div>
        <span className="text-xs font-semibold text-purple-600 uppercase">
          {product.category}
        </span>
        <p className="font-bold text-gray-800 text-base mt-1">{product.name}</p>
        <p className="text-gray-900 font-bold text-lg mt-1">₹{product.price}</p>
      </div>

      <div className="flex gap-2 mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 600, damping: 5 }}
          type="button"
          onClick={() => handleAddToCart(product)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-3 rounded cursor-pointer transition-colors flex items-center justify-center gap-1.3"
        >
          <i className="fa-solid fa-cart-plus"></i>
          Add To Cart
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          type="button"
          onClick={() => handleAddToCart(product)}
          className="bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium py-2 px-3 rounded cursor-pointer transition flex items-center justify-center gap-1"
        >
          <i className="fa-solid fa-bolt"></i>
          Buy Now
        </motion.button>
      </div>
    </motion.div>
  );
}
