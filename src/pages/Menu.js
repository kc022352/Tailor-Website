import React from 'react';
import { MenuList } from '../data/data';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Menu = () => {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent:'center', py: 4 }}>
      {MenuList.map(menu => (
        <Card key={menu.name} sx={{ maxWidth:'390px', m:2 }}>
          <CardActionArea>
            <CardMedia component="img" height="400" src={menu.image} alt={menu.name} />
            <CardContent>
              <Typography variant='h5'>{menu.name}</Typography>
              <Typography variant='body2'>{menu.description}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
};

export default Menu;
