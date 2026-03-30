import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncreament = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecreament = () => {
    if (count > 0) setCount((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div className="container">
        <h1>count : {count}</h1>
        <div className="btn-Group">
          <button
            style={{ background: 'blue', color: 'white', fontWeight: 'bold' }}
            // onClick={() => setCount(count + 1)}
            onClick={handleIncreament}
          >
            Increament
          </button>
          <button
            style={{
              background: 'red',
              color: 'white',
              fontWeight: 'bold',
              cursor: count === 0 ? 'not-allowed' : 'pointer',
            }}
            // onClick={() => setCount(count - 1)}
            onClick={handleDecreament}
          >
            Decreament
          </button>
        </div>
      </div>
    </>
  );
};
