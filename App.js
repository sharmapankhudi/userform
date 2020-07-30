import React, {useState} from 'react';
import './App.css';
import Registration from './Registration'
 import UserManagement from './UserManagement';
function App() {
  const [name, setName] = useState([])
  
  return (
    <>
      <UserManagement />
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
