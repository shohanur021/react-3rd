import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Counter></Counter>
          <Users></Users>
      </header>
    </div>
  );
}

function Counter(){
   const[count,setCount]=useState(10);
   const handleIncrease = () => {
    setCount(count+1);
    console.log(count);
   }
  return (
    <div>
      <h1 id="head">Count : {count}</h1>
      <button  onClick={handleIncrease}  style={{margin:'20px'}}>increase</button>
      <button onClick={() => setCount(count-1)} >decrease</button>
      <br></br>
      <button onMouseMove={() => document.getElementById('head').style.backgroundColor="blue"} onMouseOut={ () => document.getElementById('head').style.backgroundColor="#282c34"}>move mouse</button>
    </div> 
  )
}

function Users(){
  const[users,setUser]=useState([]);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUser(data));
  },[])

  return(
    <div>
      <h1>Dynamic Users : {users.length}</h1>
      {
      console.log(users)
      }
      <ul>
        {
          users.map( user => <li>Name : {user.name}  <br></br> city :{user.address.city}</li>)
        }
      </ul> 
    </div>
        

  )
}

export default App;
