import './App.css';
import * as React from 'react';
import NavBar from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer';

function App() {


  return (
    <div className="App">

      <NavBar/>
      <ItemListContainer/>

    </div>
  );
}

export default App;
