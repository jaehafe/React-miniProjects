import './App.css';
import React, { useState } from 'react';
import { Users } from './users';
import Table from './Table';

const App = () => {
  const [query, setQuery] = useState('');

  const keys = ['first_name', 'last_name', 'email'];

  console.log(Users[0]['email']);

  // some method: or조건, 하나라도 true가 발생하면 true를 반환
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <div className="app">
      <input
        type="text"
        placeholder="search"
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={search(Users)} />
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
