import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../Images/s22.jpg';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartItem2() {
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
                    Samsung Galaxy S22 5G Android smartphone. Announced Feb 2022. Features 6.1″ display, Exynos 2200 chipset, 3700 mAh battery </Typography>
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
