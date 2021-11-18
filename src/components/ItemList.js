import React, { useState, useEffect } from 'react';
import {Item} from './Item';

export default function ItemList(props) {
  const [items, setItems] = useState(false);

  useEffect((async) => {
    fetch('https://javascript.rickandmortyapi.com/interfaces/interfaces.Character.html')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return <div>{items !== false ? 
    
    items.map((characters, i)=>(
      <Item 
        image= {characters.image}
        name={characters.name} 
        origin={characters.origin} 
        id={characters.id}/>
    ))
      
      : 
    
    'no hay'}</div>;
}

