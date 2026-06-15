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




function Menu(){

  const pizzas = pizzaData;
const numPizzas = pizzas.length;
return(
  <main className = "menu">
    <h2>Our Menu</h2>
   
    {numPizzas > 0 ? ( 
      <React.Fragment>
       <p>
      Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven
    </p>
      <ul className="pizzas">
      {pizzaData.map((pizza) => (
        <Pizza pizzaObj = {pizza} key={pizza.name}/>
      ))}
    </ul>
    </React.Fragment>) : (<p>We are still working on are menu, please come back later</p>)
    }
   
    
    {/* <Pizza name='Pizza Funghi' ingredient='Tomato, mushrooms' imageName="pizzas/funghi.jpg" price={12}/> */}
   

  </main>
);
}

function Pizza({pizzaObj}){
// if (pizzaObj.soldOut) return null;

  return (
  <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
    <img src = {pizzaObj.photoName} alt={pizzaObj.name}/>
    <div>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "SOLD OUT":pizzaObj.price}</span>
      </div>
  </li>
  );
}

function Order({closeTime, openHour}){
  return(
     <div className="order">
             <p>
               We're open from {openHour}:00 to {closeTime}:00. Come visit us or order online
            </p>
            <button className="btn">Order</button>

          </div>
  )
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
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
         <Order closeTime={closeHour} openHour={openHour}/>
         ): <p>We are closed! Our Hours are {openHour}:00 to {closeHour}:00</p>}
    </footer>
    
   
      // ? "We are currently Open!" : "Sorry, we are closed!"}</footer>
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