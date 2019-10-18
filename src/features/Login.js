import React from 'react';
import { GoogleLogin } from 'react-google-login';

const LoginPage = ({login}) => (
    <div className='main-wrapper login-wrapper'>
        <h1>To begin making labels, please login.</h1>
        <GoogleLogin
            clientId='275400160092-4lul5lmk73hsjde1mfhflhpanmdeas3r.apps.googleusercontent.com'
            buttonText="Login"
            onSuccess={login}
            cookiePolicy={'single_host_origin'}
            fetchBasicProfile={true}
        />
    </div>
);

export default LoginPage