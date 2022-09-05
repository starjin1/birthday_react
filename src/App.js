import { useState } from 'react';
import data from './data.js';
import List from './List.js';
import './App.css';

function App() {
  const [users,setUser] = useState(data);
  console.log(users);
  return (
    <main className='main_box'>
      <h3>{users.length} Birthdays September</h3>
      <List people = {users}/>
      <button className='btn' onClick={() => setUser([])}>Delete All</button>
    </main>

  )
}

export default App;
