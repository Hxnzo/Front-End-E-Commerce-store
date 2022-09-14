import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../Images/s22.jpg';

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
                    Samsung Galaxy S22
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Samsung Galaxy S22 5G Android smartphone. Announced Feb 2022. Features 6.1″ display, Exynos 2200 chipset, 3700 mAh battery</Typography>
            </CardContent>
            <CardActions>
                <Button size="small" style={{ color: 'red' }}>$1100</Button>
                <Button size="small">Buy Now</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
