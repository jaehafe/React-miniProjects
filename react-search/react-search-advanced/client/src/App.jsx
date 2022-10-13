import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from './Table';

const App = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) {
      fetchUsers();
    }
  }, [query]);

  return (
    <div className="app">
      <input
        type="text"
        placeholder="search"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  );
};

export default App;

// <ul className="list">
//   {Users.filter((user) =>
//     user.first_name.toLowerCase().includes(query)
//   ).map((user) => (
//     <li key={user.id} className="listItem">
//       {user.first_name}
//     </li>
//   ))}
// </ul>
