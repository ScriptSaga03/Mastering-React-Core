import React, { useState } from 'react';

export const UserDashboard = () => {
  const [user, setUser] = useState({
    name: 'Mehtab',
    age: 21,
    address: {
      city: 'Delhi',
      zip: 110001,
    },
    skills: ['JavaScript', 'React'],
  });

  const [skillInput, setSkillInput] = useState('');

  // Task 1: Age बढ़ाना (Simple Object Update)
  const handleAgeUpdate = () => {
    setUser((prevUser) => ({
      ...prevUser,
      age: prevUser.age + 1,
    }));
  };

  // Task 2: City बदलना (Nested Object Update)
  const handleCityUpdate = (newCity) => {
    setUser((prevUser) => ({
      ...prevUser,
      address: {
        ...prevUser.address,
        city: newCity,
      },
    }));
  };

  // Task 3: Skill जोड़ना (Array Update)
  // Task 3: Array Update Fixed
  const addSkill = () => {
    if (skillInput.trim() === '') return;

    setUser((prev) => ({
      ...prev,
      skills: [...prev.skills, skillInput],
    }));

    setSkillInput('');
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc' }}>
      <h1>
        User: {user.name} ({user.age})
      </h1>
      <p>
        Location: {user.address.city}, Zip: {user.address.zip}
      </p>

      <button onClick={handleAgeUpdate}>Increase Age</button>
      <button onClick={() => handleCityUpdate('Mumbai')}>Move to Mumbai</button>

      <h3>Skills:</h3>
      <ul>
        {user.skills.map((skill, index) => (
          <li key={index}>
            {skill}
            <button
              onClick={() => {
                setUser((prev) => ({
                  ...prev,
                  skills: prev.skills.filter((s) => s !== skill),
                }));
              }}
            >
              x
            </button>
          </li>
        ))}
      </ul>

      <input
        value={skillInput}
        placeholder="Add a skill"
        onChange={(e) => setSkillInput(e.target.value)}
      />
      <button onClick={addSkill}>Add</button>
    </div>
  );
};
