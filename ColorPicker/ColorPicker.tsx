const { useState } = React;

export const ColorPicker = () => {



  const [userColor, setUserColor] = useState('#ffffff');

  const containerStyle = {
    width: '300px',
    height: '300px',
    border: '2px solid grey',
    margin: '20px auto',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    transition: 'background-color 0.3s ease',
    backgroundColor: userColor,
  };

  const labelStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '10px 20px',
    borderRadius: '20px',
    fontWeight: 'bold',
    marginBottom: '40px',
    color: '#333'
  };

  const handleChange = (e) => {
    setUserColor(e.target.value);
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <div style={containerStyle} id="color-picker-container">
        <div style={labelStyle}>
          {userColor.toUpperCase()}
        </div>
        <input
          id="color-input"
          type="color"
          value={userColor}
          onChange={handleChange}
          style={{ cursor: 'pointer', width: '50px', height: '50px', border: 'none' }}
        />
      </div>
      <p style={{ fontFamily: 'sans-serif', color: '#666' }}>
        Select a color to change the box background!
      </p>
    </div>
  )
}; 
