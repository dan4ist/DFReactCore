import { NavLink } from 'react-router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
//import CardActions from '@mui/material/CardActions';
//import Button from '@mui/material/Button';

export function MultiActionCard({ title, description, imgurl }) {
    return (
        <NavLink to={'/' + title }>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={imgurl}
                        alt="code"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {/*<CardActions>*/}
                {/*    <Button size="small" color="primary" disabled>*/}
                {/*        Share*/}
                {/*    </Button>*/}
                {/*</CardActions>*/}
            </Card>
        </NavLink>
    );
}

export default MultiActionCard;