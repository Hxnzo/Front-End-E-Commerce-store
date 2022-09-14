import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../Images/sbook.jpg';

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
                    Samsung Book 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Slim & sturdy, the build comes with a 180-degree hinge — ready to go where life takes you. Galaxy Book Go helps you stay connected & cord-free </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ color: 'red' }}>$1400</Button>
                <Button size="small">Buy Now</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
