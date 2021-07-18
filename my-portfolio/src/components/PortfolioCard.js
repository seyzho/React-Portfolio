import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 650,
    background: 'rgba(0,0,0,0.5)',
    margin: '10px'
  },
  media: {
    height: '15vw',
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '1.5vw',
    color: '#fff'
  },
  description: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '0.5vw',
    color: '#ddd'
  },
  button: {
    fontSize: '0.75vw',
    fontWeight: 'bold',
    fontFamily: 'Nunito',
    border: '1px',
    borderColor: '#000'
  }
});

export default function PortfolioCard({ project }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => window.open(project.url)}>
        <CardMedia
          className={classes.media}
          height="140"
          image={project.image}
          title={project.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
