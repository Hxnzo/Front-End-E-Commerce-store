import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../Images/ipad.jpg';

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
                    Ipad 12.9" M1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    The 11-inch iPad Pro display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ color: 'red' }}>$1200</Button>
                <Button size="small">Buy Now</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
