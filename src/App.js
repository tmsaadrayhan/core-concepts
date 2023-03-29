import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  let person= {
    name: "Dr.Mahfiz",
    profession: "Singer"
  }
  const style= {
    color: "cyan",
    backgroundColor: "green"
  }
  const productsList= [
    {name:"Photoshop", price:"$90.99"},
    {name:"Illustrator", price:"$60.99"},
    {name:"PDF Reader", price:"$6.99"}
  ];
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <p>My first react paragraph</p>
        <h1  style={{color: "blue"}}>{person.profession} </h1>
        <h3 style={style} >My heading: {person.name} </h3>
        <div>
          <PersonInfo name="Jashim" naika="Shabhana"></PersonInfo>
        </div>
        <div>
          {
            productsList.map(product => <Products product={product}></Products>)
          }
        </div>
      </header>
      
    </div>
  );
}
function PersonInfo(props){
  const header= {color: "blue"};
  return <div style={{border: "2px solid yellow", margin: "10px"}}>
    <h1 style={header}> Name: {props.name}</h1>
    <h3> {props.naika}</h3>
  </div>
}
function Users(){
  const [users, setUsers]= useState([]);
  useEffect(()=> {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=> res.json())
    .then(data=> setUsers(data));
  })
  return (
    <div>
      <h3>Dynamic User: {users.length}</h3>
      <ul>
        {
          users.map(user=> <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
function Products(props){
  const productStyle= {
    border: "1px solid grey",
    borderRadius: "5px",
    backgroundColor: "lightgrey",
    height: "200px",
    width: "200px",
    float: "left"
  }
  return (
  <div style={productStyle}>
    <h3>{props.product.name}</h3>
    <h5>{props.product.price}</h5>
    <button>Buy now</button>
  </div>
  )
}
function Counter(){
  const [count, setCount]= useState(10);
  const handleIncrease = () => setCount(count+1);;
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count-1)}>Dencrease </button>
      <button onClick={() => setCount(count+1)}>Increase </button>
    </div>
  )
}

export default App;
