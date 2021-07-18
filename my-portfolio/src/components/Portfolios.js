import { IconButton, makeStyles } from '@material-ui/core';
import PortfolioCard from './PortfolioCard';
import projects from '../static/projects';
import Grid from '@material-ui/core/Grid';
import { Link as Scroll } from 'react-scroll';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: "1vw"
  },
  goDown: {
    color: '#fff',
    fontSize: '4vw',
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    fontSize: '3vw',
    textAlign: 'center',
    borderBottom: 'double',
    margin: "1.75vw"
  },
}));

export default function Portfolio() {
  const classes = useStyles();
  return (
    <section id="portfolios">
      <h1 className={classes.title}>Work Places</h1>
      <div className={classes.root} style={{ margin: "1vw" }}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}>
            <PortfolioCard project={projects[0]} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PortfolioCard project={projects[1]} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PortfolioCard project={projects[2]} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PortfolioCard project={projects[3]} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PortfolioCard project={projects[4]} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <PortfolioCard project={projects[5]} />
          </Grid>
        </Grid>
      </div >
      <div className={classes.goDown}>
        <Scroll to="contact" smooth={true}>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
        </Scroll>
      </div>
    </section>
  )
}