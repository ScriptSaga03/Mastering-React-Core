export const UserCard = ({ user }) => {
  const cardStyle = {
    background: '#ffffff',
    borderRadius: '24px',
    padding: '25px',
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
    border: '1px solid #f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const statusStyle = {
    fontSize: '12px',
    padding: '5px 12px',
    borderRadius: '20px',
    fontWeight: 'bold',
    background: user.status === 'Active' ? '#dcfce7' : '#fee2e2',
    color: user.status === 'Active' ? '#166534' : '#991b1b',
  };

  return (
    <div style={cardStyle}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          marginBottom: '10px',
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '15px',
            background: '#3b82f6',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          {user.name.charAt(0)}
        </div>
        <div>
          <h3
            style={{
              margin: 0,
              fontSize: '18px',
              color: '#1e293b',
              fontWeight: '800',
            }}
          >
            {user.name}
          </h3>
          <span
            style={{ fontSize: '13px', color: '#3b82f6', fontWeight: '600' }}
          >
            {user.role}
          </span>
        </div>
      </div>
      <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
        📧 {user.email}
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '10px',
        }}
      >
        <span style={statusStyle}>● {user.status}</span>
        <span style={{ fontSize: '12px', color: '#94a3b8' }}>
          ⚡ {user.skill}
        </span>
      </div>
    </div>
  );
};
