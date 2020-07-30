import React, {useState} from 'react';
import './App.css';
import Registration from './Registration'
 
function App() {
  const [name, setName] = useState([])
  
  return (
    <>
      <Registration title="Form Registartion" 
      name={name} setName={setName} 

      />
      <div>
       
          <p>Name :{name} <br /> Email :{name} </p>
       
       
      </div>
    </>
  )
}

export default App;
