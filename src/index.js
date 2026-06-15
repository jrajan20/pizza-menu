import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import { useState } from "react";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container"> 
     <Header/>
      <Menu/>
      <Footer/>
    </div>
   
  );
}

function Header(){

  return (
    
  <header className = "header">
    <h1  style={{color: 'red',fontSize: '48px', textTransform: "uppercase",fontFamily: 'Calibri'}}>Joker's Pizza Company</h1>

  </header>
  );
  
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 14;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
console.log(isOpen);
  //   if(hour >= openHour && hour <= closeHour){
//  alert("We're currently Open!") }
//  else {
//   alert("Sorry, We are closed!")
//   }
   
if(!isOpen){
  return(
    <p>We are closed! Our Hours are {openHour}:00 to {closeHour}:00</p>
  )
}


  return (
  
         <footer className = "footer">{isOpen ?(
          <div className="order">
             <p>
               We're open until {closeHour}:00. Come visit us or order online
            </p>
            <button className="btn">Order</button>

          </div>
         ): <p>We are closed! Our Hours are {openHour}:00 to {closeHour}:00</p>}
    </footer>
    
   
      // ? "We are currently Open!" : "Sorry, we are closed!"}</footer>
  );
}


function Menu(){

  const pizzas = pizzaData;
const numPizzas = pizzas.length;
return(
  <main className = "menu">
    <h2>Our Menu</h2>
    {numPizzas > 0 ? ( 
      <ul className="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizzaObj = {pizza} key={pizza.name}/>
      ))}
    </ul>) : <p>We are still working on are menu, please come back later</p>
    }
   
    
    {/* <Pizza name='Pizza Funghi' ingredient='Tomato, mushrooms' imageName="pizzas/funghi.jpg" price={12}/> */}
   

  </main>
);
}

function Pizza(props){
if (props.pizzaObj.soldOut) return null;

  return (
  <div className="pizza">
    <img src = {props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
    <h3>{props.pizzaObj.name}</h3>
    <p>{props.pizzaObj.ingredients}</p>
    <span>{props.pizzaObj.price + 3}</span>
  </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
    </React.StrictMode>
);
//React before 18 
//React.render(<App/>, document.getElementById("root"));