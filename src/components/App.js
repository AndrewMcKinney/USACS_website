import React from 'react';
//import logo from '../logo.svg'
import Sidebar from "./Sidebar"
import Profile from "./Profile"
import peopleData from "./peopleData"
import './App.css';

function App() {


  const profiles = peopleData.map( person => (
    <Profile 
      key = {person.name}
      label = {person.name}
      person = {person}
    />
    
  ))
  return (
    <div className="App">
      <Sidebar>
        {profiles}
      </Sidebar>
    </div>
  )
}


export default App;
