import { SmartSearch } from './components/1)smartSearch/SmartSearch';

function App() {
  const users = [
    {
      id: 1,
      name: 'Mehtab Ansari',
      role: 'Frontend Developer',
      skill: 'React',
      status: 'Active',
      email: 'mehtab@example.com',
    },
    {
      id: 2,
      name: 'Sandeep Kumar',
      role: 'Full Stack Developer',
      skill: 'Node.js',
      status: 'Inactive',
      email: 'sandeep@example.com',
    },
    {
      id: 3,
      name: 'Anjali Sharma',
      role: 'UI/UX Designer',
      skill: 'Figma',
      status: 'Active',
      email: 'anjali@example.com',
    },
    {
      id: 4,
      name: 'Rahul Verma',
      role: 'Backend Developer',
      skill: 'MongoDB',
      status: 'Active',
      email: 'rahul@example.com',
    },
    {
      id: 5,
      name: 'Priya Singh',
      role: 'Frontend Developer',
      skill: 'Vue.js',
      status: 'Inactive',
      email: 'priya@example.com',
    },
    {
      id: 6,
      name: 'Vikas Gupta',
      role: 'Mobile App Developer',
      skill: 'React Native',
      status: 'Active',
      email: 'vikas@example.com',
    },
    {
      id: 7,
      name: 'Sneha Patel',
      role: 'Product Manager',
      skill: 'Agile',
      status: 'Active',
      email: 'sneha@example.com',
    },
    {
      id: 8,
      name: 'Amit Yadav',
      role: 'DevOps Engineer',
      skill: 'Docker',
      status: 'Ooo',
      email: 'amit@example.com',
    },
    {
      id: 9,
      name: 'Pooja Das',
      role: 'Frontend Developer',
      skill: 'Tailwind CSS',
      status: 'Active',
      email: 'pooja@example.com',
    },
    {
      id: 10,
      name: 'Arjun Mehra',
      role: 'Backend Developer',
      skill: 'Python',
      status: 'Inactive',
      email: 'arjun@example.com',
    },
  ];

  return <SmartSearch users={users} />;
}

export default App;
