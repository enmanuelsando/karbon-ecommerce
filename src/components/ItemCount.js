import { Button } from '@mui/material'
import { Box } from '@mui/material'
import React, {useState} from 'react'

export const ItemCount = ({stock}) => {

    const [counter, setCounter] = useState(1);

    const add = () => {
        if(stock>counter){
            setCounter(counter +1);
        } else {
            console.log('No hay mas productos en Stock');
        }
    }


    const substract = () => {
        if (counter>1) {
        setCounter(counter -1);
        } else {
            console.log('No se puede reducir mas')
        }
    }

    const answer = () => {
        console.log(`Agregaste ${counter} productos!`);
    }

    return (
        <div>
            <Box sx={{ width: 1 / 4 }}>
                <h2>{counter}</h2>
                <div>
                    <Button variant="primary" onClick={substract}> - </Button>
                    <Button variant="primary" onClick={add}> + </Button>
                </div>
                <Button size='small' variant='outlined' onClick={answer}>
                Add to cart
                </Button>
            </Box>
        </div>
    )
}
