import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';



export default function Cards() {
  const theme = useTheme();
  const pharmacies = [
    {
      id: 1,
      name: 'Pharmacie de la Place',
      address: '1 Place du Général de Gaulle',
      image: 'https://picsum.photos/200/300',
      postalCode: '75001',
      rating: 4.5,
    },
    {
      id: 2,
      name: 'Pharmacie du Quartier',
      address: '23 Rue de la République',
      image: 'https://picsum.photos/200/300',
      postalCode: '69002',
      rating: 3.8,
    },
    {
      id: 3,
      name: 'Pharmacie des Étoiles',
      address: '11 Rue des Étoiles',
      image: 'https://picsum.photos/200/300',
      postalCode: '13001',
      rating: 4.1,
    },
    {
      id: 4,
      name: 'Pharmacie du Château',
      address: '4 Rue du Château',
      image: 'https://picsum.photos/200/300',
      postalCode: '44000',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Pharmacie de la Mer',
      address: '33 Avenue de la Mer',
      image: 'https://picsum.photos/200/300',
      postalCode: '06000',
      rating: 4.3,
    },
];
  console.log(pharmacies)
  return (
    <div>

    <Card sx={{ display: 'flex', alignItems: 'center', maxWidth: 600 }}>
      <CardMedia component="img" sx={{ width: 151 }} image={image} alt={name} />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {address}, {postalCode}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', pt: 1 }}>
            <Rating name="read-only" value={rating} readOnly />
            <Typography variant="caption" color="text.secondary" component="div" sx={{ ml: 1 }}>
              ({rating})
            </Typography>
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: '8px' }}>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
    </div>
  );
}
