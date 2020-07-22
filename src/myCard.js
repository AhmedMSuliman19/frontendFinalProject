import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

    const useStyles = makeStyles({
        root: {
        maxWidth: 345,
        },
    });

const myCard = (prop) => {

    return (
        <Card className={useStyles.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt=""
            height="140"
            image={prop.image}
            title={prop.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {prop.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {prop.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Click here
          </Button>
        </CardActions>
      </Card>
    )
}

export default myCard;