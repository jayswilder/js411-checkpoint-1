import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';





const useStyles = makeStyles({
    root: {
        width: 275,
        height: 250,
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

export default function SoundQuality() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>

                <Typography variant="bold" component="h2">
                    Online Mode
            </Typography><br></br><br></br>

                <Typography variant="body2" component="p">
                    Manually control the music <br></br>
                    quality in event of poor <br></br>
                    connection
            </Typography>
            </CardContent><br></br>
            <CardActions>
                <Select
                    labelId="demo-simple-select-label"
                    defaultValue={20}
                    id="demo-simple-select"
                >
                    <MenuItem value={10}>Low</MenuItem>
                    <MenuItem value={20}>Normal</MenuItem>
                    <MenuItem value={30}>High</MenuItem>
                </Select>

            </CardActions>
        </Card>
    );
}