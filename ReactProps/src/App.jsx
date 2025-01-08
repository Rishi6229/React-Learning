import { useState } from "react";
import Child from "./Components/Child";
import ChotaBeta from "./Components/ChotaBeta";
import ButtonProps from "./Components/ButtonProps";
import EventHandler from "./Components/EventHandler";
import "./App.css";


const listItems = [
  {id:1 , name:"Graphics card" , brand:"AMD"},
  {id:2 , name:"Monitor" , brand:"Samsung"},
  {id:3 , name:"Processor" , brand:"Intel"},
]




function App() {
  function handleEvent(){
    alert('Button Clicked !!!');
  }
  return (
    <>
      <p>
        <Child 
          name="Rishi Jha" 
           skill="Software developer" 
           age="20" 
           likes = {listItems[0].brand}/>
        <ChotaBeta name="Mayank Jha" skill="Good for nothing !" age="19" likes={listItems[1].brand}/>
        <ButtonProps color="red" label="Submit"/> 
        <ButtonProps color = "green" label = "Cancel"/>    
        <EventHandler onClick = {handleEvent}/>



      </p>
    </>
  );
}

export default App;
