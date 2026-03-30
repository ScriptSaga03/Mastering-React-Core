import React, { useEffect, useState } from 'react';

// ==========================================
// 1. UI STYLES (Moved Outside to avoid TDZ)
// ==========================================
const containerStyle = {
  padding: '20px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  minHeight: '100vh',
  fontFamily: "'Segoe UI', sans-serif",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  padding: '30px',
  borderRadius: '20px',
  boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
  width: '100%',
  maxWidth: '500px',
  textAlign: 'center',
};

const inputStyle = (isEdit) => ({
  padding: '12px 15px',
  border: isEdit ? '2px solid #ff9800' : '2px solid #eee',
  borderRadius: '10px',
  outline: 'none',
  fontSize: '16px',
  width: '100%',
  boxSizing: 'border-box',
  marginBottom: '10px',
});

const btnStyle = {
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  fontSize: '18px',
};

const mainBtnStyle = (isEdit) => ({
  padding: '12px',
  border: 'none',
  borderRadius: '10px',
  background: isEdit
    ? 'linear-gradient(to right, #f2994a, #f2c94c)'
    : 'linear-gradient(to right, #00b09b, #96c93d)',
  color: '#fff',
  fontWeight: 'bold',
  cursor: 'pointer',
  width: '100%',
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
});

const listItemStyle = (isCompleted) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: isCompleted ? '#f9f9f9' : '#fff',
  padding: '15px',
  marginBottom: '12px',
  borderRadius: '12px',
  borderLeft: isCompleted ? '6px solid #ccc' : '6px solid #667eea',
  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
});

// ==========================================
// 2. MAIN COMPONENT
// ==========================================
export const Todos = () => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('groceryList');
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            name: 'Milk',
            completed: false,
          },
          {
            id: 2,
            name: 'Eggs',
            completed: true,
          },
        ];
  });
  const [newItem, setNewItem] = useState('');
  const [editId, setEditId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      const saved = localStorage.getItem('groceryList');
      if (saved) setItems(JSON.parse(saved));
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  // B. Auto Save Logic
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('groceryList', JSON.stringify(items));
    }
  }, [items, isLoading]);

  // --- B. Helpers ---
  const capitalize = (text) =>
    text
      .split(' ')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(' ');

  // --- C. Logic Functions (Before Return) ---
  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    const trimmedItem = newItem.trim().toLowerCase();
    const isDuplicate = items.some(
      (item) => item.name.toLowerCase() === trimmedItem && item.id !== editId
    );
    if (isDuplicate) {
      alert('This item is already in your list! 🚫');
      return;
    }
    if (editId) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === editId
            ? {
                ...item,
                name: capitalize(newItem),
              }
            : item
        )
      );

      setNewItem('');
      setEditId(null);
    } else {
      if (trimmedItem === '' || !isNaN(trimmedItem)) {
        alert('Please enter a valid item name (Numbers only not allowed)!');
        return;
      }
      const newItemList = {
        id: Date.now(),
        name: capitalize(newItem),
        completed: false,
      };
      setItems([...items, newItemList]);
      alert('new item added succssfully');
      setNewItem('');
    }
  };

  const startEdit = (id) => {
    const itemToEdit = items.find((i) => i.id === id);
    setNewItem(itemToEdit.name);
    setEditId(id);
  };

  const deleteItem = (id) => setItems(items.filter((i) => i.id !== id));

  const toggleComplete = (id) => {
    setItems(
      items.map((i) => (i.id === id ? { ...i, completed: !i.completed } : i))
    );
  };

  const filteredItems = items.filter((i) =>
    i.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ color: '#2d3436', marginBottom: '5px' }}>
          Grocery Master 🛒
        </h1>
        <p style={{ color: '#636e72', marginBottom: '25px', fontSize: '14px' }}>
          Mehtab's Smart Shopping List
        </p>

        {isLoading ? (
          <div style={{ padding: '30px' }}>
            <h2 style={{ color: '#764ba2' }}>🔄 Fetching List...</h2>
          </div>
        ) : (
          <>
            <input
              style={{
                ...inputStyle(false),
                backgroundColor: '#f5f6fa',
                marginBottom: '20px',
              }}
              placeholder="🔍 Search your list..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <form
              onSubmit={handleAddOrUpdate}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '25px',
              }}
            >
              <input
                style={inputStyle(!!editId)}
                placeholder="Add e.g. Fresh Milk"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
              />
              <button style={mainBtnStyle(!!editId)} type="submit">
                {editId ? 'Update Item' : 'Add to List'}
              </button>
            </form>

            <ul style={{ listStyle: 'none', padding: 0 }}>
              {filteredItems.length === 0 ? (
                <p style={{ color: '#999' }}>No items found!</p>
              ) : (
                filteredItems.map((item) => (
                  <li key={item.id} style={listItemStyle(item.completed)}>
                    <span
                      onClick={() => toggleComplete(item.id)}
                      style={{
                        textDecoration: item.completed
                          ? 'line-through'
                          : 'none',
                        color: item.completed ? '#b2bec3' : '#2d3436',
                        cursor: 'pointer',
                        fontWeight: '500',
                        flex: 1,
                        textAlign: 'left',
                      }}
                    >
                      {item.completed ? '✅' : '⚪'} {item.name}
                    </span>

                    <div style={{ display: 'flex', gap: '10px' }}>
                      <button
                        onClick={() => startEdit(item.id)}
                        style={btnStyle}
                      >
                        ✏️
                      </button>
                      <button
                        onClick={() => deleteItem(item.id)}
                        style={btnStyle}
                      >
                        🗑️
                      </button>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};
