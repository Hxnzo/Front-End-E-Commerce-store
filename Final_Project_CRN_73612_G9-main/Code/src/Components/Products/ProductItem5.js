import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../Images/asuslaptop.jpg';

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
                    ASUS ROG Strix 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Asus is back for Part 3 with the ROG Strix Scar III, and the new version is just as badass as its predecessor. </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ color: 'red' }}>$1500</Button>
                <Button size="small">Buy Now</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
