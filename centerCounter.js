
import './App.css';
import React, { Component } from 'react';
import { useState } from 'react';
import styled from 'styled-components';



function App() {
  let [count, setCount] = useState(0); 

  const Button = styled.button`
  background-color: green;
  color: white;
  padding: 5px 15px;
  `
  const Button2 = styled.button`
  background-color: crimson;
  color: white;
  padding: 5px 15px;
  `

const Button3 = styled.button`
background-color: grey;
color: white;
padding: 5px 15px;
`


  function Increment(){
  setCount(count+1);
  
  }
  
  
  function Decrement(){
    setCount(count-1);
  }
  
  function Reset(){
    setCount(0);
  }
 


  return(


    <>
    <div>
      

      <h1  style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>Current Count: {count.toString()}</h1>
    </div>

      
      <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>

      <Button onClick={Increment}>
        Increment
      </Button>
      

      
      <Button3 onClick={Reset}>
        Reset
      </Button3>
      
      

      
      <Button2 onClick={Decrement}>
        Decrement
      </Button2>
      </div>
      
    </>
      

    
  );

}

export default App;
