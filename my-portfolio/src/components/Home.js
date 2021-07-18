import { useEffect, useState } from 'react'
import { IconButton, makeStyles, Toolbar } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import { Collapse } from '@material-ui/core';
import { Link as Scroll } from 'react-scroll';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    height: '80vw',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarTitle: {
    flexGrow: "1"
  },
  appbarWrapper: {
    width: '90%',
    margin: '0 auto'
  },
  icon: {
    color: '#fff',
    margin: '1vw'
  },
  title: {
    color: '#fff',
    fontSize: '4vw'
  },
  container: {
    textAlign: "center",
  },
  goDown: {
    color: '#fff',
    fontSize: '4vw',
    display: 'flex',
    justifyContent: 'center'
  }
}));

function Home() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, [])
  return (
    <div className={classes.root} id="home">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>My Portfolio</h1>
          <Scroll to="home" smooth={true}>
            <IconButton>
              <HomeIcon className={classes.icon} />
            </IconButton>
          </Scroll>
          <Scroll to="about" smooth={true}>
            <IconButton>
              <FaceIcon className={classes.icon} />
            </IconButton>
          </Scroll>
          <Scroll to="portfolios" smooth={true}>
            <IconButton>
              <AccountTreeIcon className={classes.icon} />
            </IconButton>
          </Scroll>
          <Scroll to="contact" smooth={true}>
            <IconButton>
              <ContactMailIcon className={classes.icon} />
            </IconButton>
          </Scroll>
        </Toolbar>
      </AppBar>

      <Collapse in={checked} {...(checked ? { timeout: 2000 } : {})}
        collapsedHeight={50}>
        <div className={classes.container}>
          <h1 className={classes.title}>welcome to my portfolio<br /></h1>
          <Scroll to="about" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

export default Home;