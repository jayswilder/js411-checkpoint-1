import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import MenuAppBar from './AppBar'
import OnlineMode from './OnlineMode';
import MasterVolume from './MasterVolume';
import SoundQuality from './SoundQuality';
import Typography from '@material-ui/core/Typography';


const Profile = (props) => {
    const { user, isAuthenticated } = useAuth0();

    return (

        isAuthenticated && (
            <div>
                <MenuAppBar />

                <div id="dasboard-container">
                    <Typography variant="bold" color="textSecondary" component="h1">
                        Welcome {user.name}!
                    </Typography>

                    <div id="card-components">
                        <OnlineMode /> <br></br>
                        <MasterVolume /> <br></br>
                        <SoundQuality />
                    </div>

                    <div>
                        <Typography id="notifications" variant="bold" component="h2">
                            My Playlists:
                        </Typography>

                    </div>
                </div>
            </div>
        )
    )
}

export default Profile