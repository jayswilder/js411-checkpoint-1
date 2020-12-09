import React from 'react';
import Button from '@material-ui/core/Button';


const logout = (event) => {
    window.location.reload();
    console.log('clicked')
}
const LogoutButton = () => {
    return (
        <Button variant="contained" id='logout' onClick={logout}>
            Logout
        </Button>
    )
}

export default LogoutButton