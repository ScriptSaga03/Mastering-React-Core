import { Fragment } from 'react';
import AlertBox from './components/AlertBox';

function App() {
  const profileImg = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7EV7OVezomMFitNqGGKROleR2etDXyQ-nbawUj9aEng&s=10`;

  const products = [
    {
      id: 1,
      title: 'Wireless Bluetooth Headphones',
      price: 59.99,
      description:
        'High-quality active noise-canceling wireless headphones with 30-hour battery life.',
      img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
    },
    {
      id: 2,
      title: 'Smart Fitness Watch',
      price: 129.99,
      description:
        'Waterproof fitness tracker with heart rate monitor, GPS, and sleep tracking.',
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300',
    },
    {
      id: 3,
      title: 'Minimalist Leather Backpack',
      price: 89.99,
      description:
        'Durable genuine leather backpack with a dedicated 15-inch laptop compartment.',
      img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300',
    },
    {
      id: 4,
      title: 'Mechanical Gaming Keyboard',
      price: 79.99,
      description:
        'RGB backlit mechanical keyboard with tactile switches for high-performance gaming.',
      img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300',
    },
    {
      id: 5,
      title: 'Ergonomic Office Chair',
      price: 249.99,
      description:
        'Breathable mesh back office chair with adjustable lumbar support and armrests.',
      img: 'https://images.unsplash.com/photo-1580481077494-e3299ac2505e?w=300',
    },
    {
      id: 6,
      title: 'Portable Bluetooth Speaker',
      price: 45.0,
      description:
        'Compact waterproof speaker delivering rich stereo sound and deep bass outdoors.',
      img: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300',
    },
    {
      id: 7,
      title: 'Ultra-Wide Gaming Monitor',
      price: 399.99,
      description:
        '34-inch curved ultra-wide monitor with 144Hz refresh rate and 1ms response time.',
      img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300',
    },
    {
      id: 8,
      title: 'Stainless Steel Water Bottle',
      price: 24.99,
      description:
        'Double-wall vacuum insulated bottle that keeps drinks cold for 24 hours or hot for 12.',
      img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=300',
    },
    {
      id: 9,
      title: 'Professional DSLR Camera',
      price: 899.99,
      description:
        'High-resolution digital camera with 4K video recording and interchangeable lens.',
      img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300',
    },
    {
      id: 10,
      title: 'Smart LED Desk Lamp',
      price: 34.99,
      description:
        'Dimmable LED desk lamp with adjustable color temperatures and USB charging port.',
      img: 'https://images.unsplash.com/photo-1534349762230-e1cadfefc2c5?w=300',
    },
  ];
  return (
    <div className="p-6">
      <h1>Basic Fundamentals of ReactJS</h1>

      <AlertBox type="success">
        <p>✅ Your account has been created</p>
      </AlertBox>

      <AlertBox type="error">
        <p>❌ Something went wrong</p>
      </AlertBox>

      <AlertBox type="warning">
        <p>⚠️ Your subscription is expiring</p>
      </AlertBox>

      <AlertBox type="info">
        <p>ℹ️ New update is available!</p>
      </AlertBox>

      <AlertBox>
        <p>😎 Random Alert Box</p>
      </AlertBox>

      <UserCard name="Mehtab" role="Developer" city="Delhi" img={profileImg} />

      <h2 className="mt-6 mb-4 text-xl font-bold">Product List</h2>

      <ul className="flex flex-wrap justify-center items-center gap-4">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard
              title={product.title}
              img={product.img}
              price={product.price}
              desc={product.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

// UserCard Component
function UserCard(props) {
  return (
    <div
      style={{
        width: '300px',
        backgroundColor: 'whitesmoke',
        padding: '20px',
        borderRadius: 10,
        boxShadow: '4px 5px 5px lightGrey',
      }}
    >
      <img
        src={props.img}
        style={{
          width: '90%',
          height: '200px',
          borderRadius: 10,
          objectFit: 'cover',
        }}
        alt={props.name}
      />
      <p>
        <strong>Name:</strong> {props.name}
      </p>
      <p>
        <strong>Role:</strong> {props.role}
      </p>
      <p>
        <strong>City:</strong> {props.city}
      </p>
    </div>
  );
}

// ProductCard Component (Ab ye sirf ek single card ka design rakhega)
function ProductCard({ title, img, desc, price }) {
  return (
    <div
      className="w-64  bg-white border border-gray-300 rounded-lg p-3 shadow-md cursor-pointer
      transition
      duration-300
      ease-in
      hover:-translate-y-2
      hover:shadow-2xl
    "
    >
      <div>
        <img
          loading="lazy"
          src={img}
          alt={title}
          className="w-full h-48 object-cover rounded"
        />
      </div>
      <div className="mt-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-green-600 font-bold">${price}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{desc}</p>
      </div>
    </div>
  );
}

import ProfileCard from './components/ProfileCard';

function AppSecond() {
  return (
    <>
      <ProfileCard name="Mehtab" role="NodeJS Developer" city="Delhi">
        <button>Follow Me</button>
      </ProfileCard>
    </>
  );
}

export default App;



export default function ProfileCard({ name, role, city, children }) {
  return (
    <>
      <div className="w-full p-2xl bg-gray-200 h-screen">
        <div>
          <p>{name}</p>
          <p>{role}</p>
          <p>{city}</p>
          {children}
        </div>
      </div>
    </>
  );
}



export default function AlertBox({ type, children }) {
  const alertService = {
    success: 'bg-green-400  hover:bg-green-700 ',
    error: 'bg-red-400  hover:bg-red-700 ',
    warning: 'bg-yellow-400  hover:bg-yellow-700 ',
    info: 'bg-blue-400  hover:bg-blue-700 ',
  };

  const alertClass = alertService[type] || 'bg-gray-400';

  return (
    <>
      <div
        className={`
      w-4xl p-4 mt-2 rounded-lg text-white subpixel-antialiased font-bold shadow-md trasition duration-500 ease-in-out hover:shadow-lg hover:cursor-pointer hover:translate-x-4
      ${alertClass}
`}
      >
        {children}
      </div>
    </>
  );
}
