import React from 'react'
import { Button } from '@mui/material'
import ItemList from './ItemList'

export const ItemListContainer = ({greeting, usuario, handleClick}) => {


    return (
        <div>
            <h1>{greeting}</h1>
            <h2>{usuario}</h2>
            <Button 
            variant="contained" 
            size="large" 
            color="secondary"
            onClick={() => handleClick()}>
                Click Me
            </Button>
            <hr/>
            <ItemList/>
        </div>
    )
}
