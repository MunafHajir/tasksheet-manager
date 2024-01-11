import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import lock from "../Assets/Login.jpg"

import FormControl from '@mui/material/FormControl';
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
  Card,
  TextField,
  Button,
  makeStyles,
  Typography,
  Container,

} from '@mui/material';
import { createUseStyles } from 'react-jss';
import { Email } from '@mui/icons-material';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'Sans Serif',

    ].join(','),
  },
});

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    border: '1px solid',
    borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
   
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const useStyles = createUseStyles((theme) => ({
  card: {
    backgroundColor: 'white',
    padding: '20px',
    boxShadow: 'none'
  },
  title: {
    textAlign: 'center',
    marginBottom: 2,
    fontWeight: "bold",
    marginRight: 325,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 30,
    marginRight: 150,

  },
  textField: {
    marginTop: 2,

  },
  button: {
    marginTop: 2,
  },



}));

const Emaill = () => {

  const classes = useStyles();

  const styles = {

    container: {
      display: 'flex',
      height: '100vh',
      margin: "0",
      padding: "0"
    },
    imageContainer: {
      flex: '0 0 50%',
      height: '100%',
      overflow: 'hidden',

    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    },
    loginContainer: {
      flex: '1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    label: {
      fontSize: "1.5vw",
      margin: "0",
      padding: "0",

    },




  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl" style={styles.container}>
          <div style={styles.imageContainer}>
            <img src={lock} style={styles.image} alt='Lock' />
          </div>
          <div style={styles.loginContainer}>
            <Card className={classes.card}>
              <Typography variant="h4" className={classes.title}>
                Jump In 👋
              </Typography>
              <Typography variant="subtitle1" className={classes.subtitle}>
                Its great to see you here, sign in to begin your journey.
              </Typography>
              <FormControl variant="standard" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                <InputLabel shrink htmlFor="bootstrap-input" style={styles.label}>
                  Email address
                </InputLabel >
                <BootstrapInput placeholder="Enter your email address" id="bootstrap-input" sx={{ width: '500px', marginBottom: '20px' }} />

                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  sx={{
                    width: '500px',
                    marginTop: '100px',
                    padding: '8px'
                  }}


                >
                  send OTP
                </Button>
              </FormControl>
            </Card>
          </div>
        </Container>
      </ThemeProvider>
    </>

  );
};

export default Emaill
