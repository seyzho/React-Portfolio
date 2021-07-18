import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    textAlign: 'center',
    height: '4vw',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '0.85vw'
  }
}));

function Footer() {
  const classes = useStyles();


  return (
    <React.Fragment>
      <Container maxWidth="xl" id='footer' style={{ backgroundColor: "rgba(243, 243, 136, 0.3)" }}>
        <div className={classes.root}>
          please contact me!
          </div>
      </Container>
    </React.Fragment >
  )

}

export default Footer;