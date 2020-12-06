import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
    root: {
        width: 275,
        height: 250,
        marginRight: 100,
        padding: 15
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

export default function OnlineMode() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>

                <Typography variant="bold" component="h2">
                    Online Mode
                </Typography><br></br><br></br>

                <Typography variant="body2" component="p">
                    Is this application connected <br></br>
                    to the internet?
                </Typography>
            </CardContent><br></br>
            <CardActions>

                <Switch
                    checked={state.checkedA}
                    onChange={handleChange}
                    name="checkedA"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </CardActions>
        </Card>
    );
}