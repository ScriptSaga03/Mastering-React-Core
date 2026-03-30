import React from 'react';

export const ItemsList = () => {
  const navLinks = ['Home', 'Services', 'About', 'Contact-Us'];
  return (
    <>
      <nav>
        <ul>
          {navLinks.map((items, ind) => {
            return <li key={ind + 1}>{items}</li>;
          })}
        </ul>
      </nav>
    </>
  );
};
