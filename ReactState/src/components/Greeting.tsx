import { useEffect, useState } from 'react';

export const Greeting = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  };

  // useEffect(() => {
  //   handleToggleVisibility();
  // }, []);

  return (
    <>
      <div>
        <h1>Hello : {isVisible ? 'Mehtab' : 'Guest'}</h1>
        <button onClick={handleToggleVisibility}>Update User</button>
      </div>
    </>
  );
};
