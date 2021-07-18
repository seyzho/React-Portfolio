import React from 'react';
import { makeStyles, IconButton } from '@material-ui/core/';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import { Link as Scroll } from 'react-scroll';
import Button from '@material-ui/core/Button';
import useFormControls from '../static/ContactFormControls';
import GetAppIcon from '@material-ui/icons/GetApp';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  content: {
    display: "flex",
    textTransform: "uppercase",
    fontSize: '2.5vw',
    color: '#fff',
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    justityContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: '3vw'
  },
  description: {
    fontFamily: 'Nunito',
    justityContent: "center",
    alignItems: "center",
    fontSize: '1.5vw',
    margin: "3.5vw"
  },
  form: {
    maxWidth: "45vw",
    margin: '0.4vw',
  },
  goHome: {
    color: '#fff',
    fontSize: '3vw',
    display: "flex",
    margin: '2vw',
  },
}));

const inputFieldValues = [
  {
    name: "fullName",
    label: "Full Name",
    id: "my-name"
  },
  {
    name: "email",
    label: "Email",
    id: "my-email"
  },
  {
    name: "message",
    label: "Message",
    id: "my-message",
    multiline: true,
    rows: 10
  }
];

export default function Contact() {
  const classes = useStyles();
  const {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
  } = useFormControls();


  return (
    <React.Fragment>
      <Container maxWidth="xl" id='contact' style={{ height: "48vw" }}>
        <div className={classes.root} style={{ background: 'rgba(0,0,0,0.3)', height: '45vw', borderStyle: 'ridge' }}>
          <Grid container >
            <Grid item xs={6} sm={6} container>
              <Grid item xs container direction="column" >
                <Grid item xs>
                  <Typography className={classes.content}>
                    Contact Me
                  </Typography>
                  <Typography variant="body2" className={classes.description} >
                    thanks for visiting my portfolio! feel free to reach out our contact me for any inqiries
                    </Typography>
                  <Scroll to="home" smooth={true}>
                    <IconButton>
                      <HomeIcon className={classes.goHome} />
                    </IconButton>
                  </Scroll>
                  <IconButton aria-label="resume" onClick={() => window.open('https://www.omfgdogs.com/')}>
                    <GetAppIcon className={classes.goHome} />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} sm={6} container>
              <Grid item xs container direction="column">
                <Grid item xs>
                  <form autoComplete="off" onSubmit={handleFormSubmit} className={classes.form} >
                    {inputFieldValues.map((inputFieldValue, index) => {
                      return (
                        <TextField xs={6} sm={6} style={{ margin: "1vw" }}
                          variant='outlined'
                          key={index}
                          onChange={handleInputValue}
                          onBlur={handleInputValue}
                          name={inputFieldValue.name}
                          label={inputFieldValue.label}
                          error={errors[inputFieldValue.name] > 0}
                          multiline={inputFieldValue.multiline ?? false}
                          fullWidth
                          rows={inputFieldValue.rows ?? 1}
                          autoComplete="none"
                          {...(errors[inputFieldValue.name] && {
                            error: true,
                            helperText: errors[inputFieldValue.name]
                          })}
                        />
                      )
                    })}
                    <Button style={{ margin: "1.5vh" }}
                      variant="contained"
                      type="submit"
                      color="primary"
                      disabled={!formIsValid()}
                    >
                      Send Message
                </Button>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </Container>
    </React.Fragment >
  );
}