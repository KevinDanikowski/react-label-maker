import React from 'react';
import { GoogleLogout } from 'react-google-login';

const LogoutBar = ({logout}) => (
    <div className='log-out-wrapper'>
        <GoogleLogout
            clientId='275400160092-4lul5lmk73hsjde1mfhflhpanmdeas3r.apps.googleusercontent.com'
            buttonText='Logout'
            onLogoutSuccess={logout}
        />
    </div>
);

export default LogoutBar