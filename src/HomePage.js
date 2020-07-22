import React, { useContext, useEffect, useState } from 'react';
import AppContext from './AppContext';
import NavBarLoggedin from './NavBarLoggedin'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import myCard from './myCard.js';
import './App.css';

const useStyles = makeStyles({
    root: {
    maxWidth: 345,
    },
});

const HomePage = () => {

  const [globalState, setGlobalState] = useContext(AppContext);
  const [state, setState] = useState({
       services: [

           {
            title: 'Share your thoughts about PUBG equipment, vehicles, weapons and maps',
            image: 'https://cdn.mos.cms.futurecdn.net/v3TWPVw48JyfTPajamqbnS-1200-80.jpg',
            content: 'Do you have any thoughts about them? Would you like to share some or view what other player have shared?'
           }
        ]
    
    })

  return (
    <div>

        <div>
            <NavBarLoggedin />
        </div>
    <body className = "masthead">
        <div className="row" style={{position:'relative', top:'-25rem'}}>
            <div className="col-lg-3 col-sm-6" style={{position:'relative', top:'5rem', left:'1rem', padding:'0px 50px'}}>
                <Card className={useStyles.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Share and view recommendations"
                        height="140"
                        image="https://s1.econotimes.com/assets/uploads/20191206a0fd1e2b5f75445c5_th_1024x0.jpg"
                        title="Share and view recommendations"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            <b>Share and view recommendations</b>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Do you have any recommendations in mind for other player? Or do you want to have a look to what other player recommend?<br></br><br></br>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Click here
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <div className="col-lg-3 col-sm-6" style={{position:'relative', top:'5rem', left:'1rem', padding:'0px 50px'}}>
                <Card className={useStyles.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Share and view tactics"
                        height="140"
                        image="https://cdn.telanganatoday.com/wp-content/uploads/2019/03/PUBG-640x400-640x400.jpg"
                        title="Share and view tactics"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        <b>Share and view<br></br> tactics</b>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Do you have a tactic that you think other players are not aware of? Or do you want to add more tactics to yours? <br></br><br></br><br></br>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Click here
                        </Button>
                    </CardActions>
                </Card>
            </div>

            <div className="col-lg-3 col-sm-6" style={{position:'relative', top:'5rem', left:'1rem', padding:'0px 50px'}}>
                <Card className={useStyles.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Share and view kills"
                        height="140"
                        image="https://cdn.mos.cms.futurecdn.net/v3TWPVw48JyfTPajamqbnS-1200-80.jpg"
                        title="Share and view kills"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        <b>Share and view <br></br>kills</b>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Have you ever made an unbelievable kill and wished you recorded it? Start recording and share the best of your recordings here. Would you like to see other players\' best kills?
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Click here
                        </Button>
                    </CardActions>
                </Card>
            </div>

            <div className="col-lg-3 col-sm-6" style={{position:'relative', top:'5rem', left:'1rem', padding:'0px 50px'}}>
                <Card className={useStyles.root}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Share your thoughts about PUBG equipment, vehicles, weapons and maps"
                        height="140"
                        image="https://cdn.mos.cms.futurecdn.net/v3TWPVw48JyfTPajamqbnS-1200-80.jpg"
                        title="Share your thoughts about PUBG equipment, vehicles, weapons and maps"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        <b>Share your <br></br>thoughts </b>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Do you have any thoughts about PUBG equipment, vehicles, weapons and maps? Would you like to share some or view what other player have shared? <br></br><br></br>
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Click here
                        </Button>
                    </CardActions>
                </Card>
            </div>
            </div>
        </body>
    </div>
  );
}


export default HomePage;