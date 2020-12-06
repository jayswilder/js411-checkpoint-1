import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 275,
        height: 250,
        marginRight: 100,
        padding: 15
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function valuetext(value) {
    return `${value}°C`;
}
function volumeAlertMessage(e) {
    console.log(e.target)
}

export default function MasterVolume() {
    const classes = useStyles();

    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>

                <Typography variant="bold" component="h2">
                    Master Volume
                </Typography><br></br><br></br>

                <Typography variant="body2" component="p">
                    Overrides all other sound <br></br>
                settings in this application
            </Typography>
            </CardContent><br></br>
            <CardActions>

                <Slider onChange={volumeAlertMessage}
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks
                    min={0}
                    max={100}
                />
            </CardActions>
        </Card>
    );
}