import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../Images/iphone.jpg';

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
                    Iphone 13 Pro
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    The iPhone 13 Pro is Apple's smaller premium iPhone with a 6.1" screen size and for the first time in an iPhone, it comes with a 120Hz</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ color: 'red' }}>$1100</Button>
                <Button size="small">Buy Now</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
