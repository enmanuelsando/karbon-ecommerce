import './App.css';
import * as React from 'react';
import NavBar from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  
  const greeting = 'Bienvenido'
  const usuario = 'Parriller@'
  const handleClick = () => {
    alert("Holis :D, gracias por clickearme")
  }

  return (
    <div className="App">

      <NavBar/>
      <ItemListContainer greeting={greeting} usuario={usuario} handleClick={handleClick}/>

    </div>
  );
}

export default App;
