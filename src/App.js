import React, { useState } from 'react';
import { TextField, Button, Card, CardContent, makeStyles } from '@material-ui/core';
import MenuBar from './components/MenuBar';
import Dashboard from './components/Dashboard';
import './App.css';
import LogoutButton from './components/LogoutButton';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 400,
    width: 500,
    marginTop: 50,
    padding: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const App = () => {

  const classes = useStyles();
  const [loggedIn, setLogin] = useState(false)

  const login = (event) => {
    setLogin(true)
  }

  return (
    <div>
      <MenuBar />
      <div id='container'>
        {loggedIn ? <div><LogoutButton /><br></br><br></br><Dashboard /></div> : (
          <Card className={classes.root} variant="outlined">
            <CardContent className="form-container">
              <div id="login-page-photo">Sign In</div><br></br>
              <div>
                <form id="login-form" onSubmit={login}>
                  <TextField
                    label="Enter Username"
                    type="text"
                    name="username"
                    required
                  /> <br></br>
                  <TextField
                    label="Enter Password"
                    type="password"
                    name="password"
                    required
                  />
                  <br />
                  <Button variant="contained" color="primary" type="submit">Log In</Button>
                </form>
              </div>
            </CardContent>
          </Card >
        )}
      </div>
    </div>
  )
}

export default App;