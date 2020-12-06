import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import MenuAppBar from './AppBar'
import Typography from '@material-ui/core/Typography';


import '../index.css'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
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

export default function OutlinedCard() {
    const classes = useStyles();
    const { isAuthenticated } = useAuth0();

    return (
        !isAuthenticated && (
            <div>
                <header>
                    <MenuAppBar />
                </header>

                <div id="login-page">
                    <Card className={classes.root} variant="outlined">
                        <CardContent>
                            <div id="login-page-photo">Sign In</div><br></br>
                            <Typography variant="bold" component="h6">
                                Input fields are irrevelevant. Click Login button to authenticate with Auth0
                            </Typography>
                            <form id="login-form" className={classes.root} noValidate autoComplete="off">
                                <TextField className="text-field" id="standard-basic" label="Enter Username" /><br></br>
                                <TextField className="text-field" id="standard-basic" type="password" label="Enter Password" /><br></br><br></br>
                                <LoginButton />
                            </form>
                        </CardContent>
                    </Card >
                </div>
            </div>
        )
    );
}
