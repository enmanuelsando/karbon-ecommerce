import React from 'react';
import { Item } from './Item';

    
export const ItemList = ({items}) => {

    return (
        <article>
            <h2>Productos</h2>
            <hr/>
            <div>
                {items.map((prod) => <Item key={prod.id} {...prod}/>)}
            </div>
        </article>
    )
}

