import React from 'react';
import { Card, CardContent, CardActions, Typography, Switch, Slider, Select, MenuItem } from '@material-ui/core';

function valuetext(value) {
    return `${value}°C`;
}

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            online: true,
            volume: 40,
            quality: 2,
            notifications: []
        }
    }

    setOnline = () => {
        this.setState({
            online: !this.state.online
        });
    }

    setVolume = (event, value) => {
        this.setState({
            volume: value
        });
    }

    setQuality = (event) => {
        this.setState({
            quality: event.target.value
        });
    }

    componentDidUpdate = (prevProps, prevState) => {
        let tempNotifications = [];
        if (this.state.online === false) {
            tempNotifications.push("Your application is offline. You won't be able to share or stream music to other devices.");
        }
        if (this.state.volume >= 80) {
            tempNotifications.push("Listening to music at a high volume could cause long-term hearing loss.");
        }
        if (this.state.quality === 1) {
            tempNotifications.push("Music quality is degraded. Increase quality if your connection allows it.");
        }
        if (prevState.notifications.length !== tempNotifications.length) {
            this.setState({
                notifications: tempNotifications
            });
        }
    }


    render() {
        return (
            <div className="dashboard-container">

                <div className="welcome-header">
                    <Typography component="h2" variant="h3" color="textSecondary">Welcome User!</Typography>
                </div>

                <div className="cards-container">
                    <Card className="card">
                        <CardContent>
                            <Typography component="h4" fontWeight="fontWeightBold">
                                Online Mode
              </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Is this application connected to the internet?
              </Typography>
                        </CardContent>
                        <CardActions>
                            <Switch
                                checked={this.state.online}
                                onChange={this.setOnline}
                                value={this.state.online}
                            />
                        </CardActions>
                    </Card>

                    <Card className="card">
                        <CardContent>
                            <Typography component="h4" fontWeight="fontWeightBold">
                                Master Volume
              </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Overrides all other sound settings in this application
              </Typography>
                        </CardContent>
                        <CardActions>
                            <Slider
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                                marks={true}
                                step={10}
                                min={0}
                                max={100}
                                onChange={this.setVolume}
                                value={this.state.volume}
                            />
                        </CardActions>
                    </Card>

                    <Card className="card">
                        <CardContent>
                            <Typography component="h4" fontWeight="fontWeightBold">
                                Sound Quality
              </Typography>
                            <br />
                            <Typography variant="body2" color="textSecondary" component="p">
                                Manually control the music quality in event of poor connection
              </Typography>
                        </CardContent>
                        <CardActions>
                            <Select value={this.state.quality} onChange={this.setQuality}>
                                <MenuItem value={1}>Low</MenuItem>
                                <MenuItem value={2}>Normal</MenuItem>
                                <MenuItem value={3}>High</MenuItem>
                            </Select>
                        </CardActions>
                    </Card>
                </div>

                <div className="notifications-container">
                    <Typography component="h3" variant="h6">System Notifications:</Typography>
                    <div>
                        {this.state.notifications.map((notification, index) => (
                            <p key={index}>
                                {notification}
                            </p>
                        ))}
                    </div>
                </div>


            </div>
        )
    }
}

export default Dashboard;