import { useState } from 'react';

export const SearchInput = ({ searchTerm, onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputStyle = {
    padding: '12px 20px',
    border: '1px solid transparent',
    outline: 'none',
    borderRadius: '12px',
    backgroundColor: '#f3f4f6',
    width: isFocused ? '80vw' : '250px',
    borderColor: isFocused ? '#3b82f6' : 'transparent',
    boxShadow: isFocused
      ? '0px 10px 25px rgba(59, 130, 246, 0.2)'
      : '0px 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <input
      type="search"
      placeholder="Search users..."
      value={searchTerm}
      onChange={onSearchChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      style={inputStyle}
    />
  );
};
