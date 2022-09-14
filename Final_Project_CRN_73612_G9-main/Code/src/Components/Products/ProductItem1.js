import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../Images/mac.png';
import './products.css'

export default function MediaCard() {
    return (
        <div className="Card">
            <Card sx={{ maxWidth: 345 }} id="Card">
                <CardMedia
                    component="img"
                    height="140"
                    image={image}
                    alt="something"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Macbook Pro M1
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        The ‌M1‌ Max is equipped with 57 billion transistors and it is built on a 5-nanometer process.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" style={{ color: 'red' }}>$1500</Button>
                    <Button size="small">Buy Now</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </div>
    );
}
