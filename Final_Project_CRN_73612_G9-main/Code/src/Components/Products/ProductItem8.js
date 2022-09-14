import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../Images/tabs8.jpg';
import './products.css'

export default function MediaCard() {
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
                <Button size="small" style={{ color: 'red' }}>$1200</Button>
                <Button size="small">Buy Now</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
