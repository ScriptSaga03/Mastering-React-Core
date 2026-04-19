import { useState } from 'react';
import { UserCard } from './UserCard';
import { SearchInput } from './SearchInput';

export const SmartSearch = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    const result = users.filter(
      (u) =>
        u.name.toLowerCase().includes(query) ||
        u.role.toLowerCase().includes(query) ||
        u.email.toLowerCase().includes(query)
    );
    setFilteredUsers(result);
  };

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: '900' }}>Directory</h2>
        <SearchInput searchTerm={searchTerm} onSearchChange={handleSearch} />
      </header>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '25px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {filteredUsers.length > 0 ? (
          filteredUsers.map((u) => <UserCard key={u.id} user={u} />)
        ) : (
          <p
            style={{ gridColumn: '1/-1', textAlign: 'center', padding: '50px' }}
          >
            No users found! 🔍
          </p>
        )}
      </div>
    </div>
  );
};
