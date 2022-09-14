import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../Images/tabs8.jpg';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem1() {
    return (
        <Card sx={{ maxWidth: 345 }} id="Card">
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt="something"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Samsung Tablet S8 Ultra
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Samsung Galaxy Tab S8 Ultra Android tablet. Announced Feb 2022. Features 14.6″ display, Snapdragon 8 Gen 1 chipset </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ color: 'blue' }}><AddIcon /></Button>
                <Button size="small" style={{ color: 'red' }}><RemoveIcon /></Button>
                <Button size="small">Learn More</Button>
                <Button size="small" style={{ color: 'red' }}><DeleteIcon /></Button>
            </CardActions>
        </Card>
    );
}
