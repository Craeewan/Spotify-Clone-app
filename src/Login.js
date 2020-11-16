import React from 'react'
import './Login.css';
import { loginUrl } from './spotify';


function Login() {
    return (
        <div className='login'>
            <img src="https://www.howtogeek.com/wp-content/uploads/2020/06/Sptoify-logo-vertical-with-text-on-black.png"
            alt=""
            />
            <h1>
                i am the login pagef
            </h1>
    <a href={loginUrl}>LOGIN HERE</a>      
  </div>
    )
}

export default Login


