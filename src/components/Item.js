import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Item = ({ id, name, img, desc, price}) => {

  return (
    <Card key={id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img" height="140" image={img} alt={name}/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Precio: ${price}
          </Typography>
            <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

