import React, { useState } from 'react'
import EyeIcon from '../../component/EyeIcon/EyeIcon';
import "./Signin.css";

function Signin() {
    const [isPasswordShow, setIsPasswordShow] = useState(false);
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');
    
    const toggleIsPasswordShowValue = () => {
        setIsPasswordShow(!isPasswordShow);
    };
    let onchangeusernamehandler = (event) => {
        setUsername(event.target.value);
        console.log(event.target.value)
    }
    let onchangepasswordhandler = (event) => {
        setPassword(event.target.value);
        console.log(event.target.value)
    }
    return (
       <>
        <div class="container">
            <div class="wrapper">
                <div class="title"><span>Sign in</span></div>
                <form action="#">
                    <div class="row">
                        <i class="fas fa-user"></i>

                        <input type="text" placeholder="User Name" onChange={onchangeusernamehandler} id='username' required />
                    </div>
                    <div class="row">

                        <i class="fas fa-lock"></i>

                        <input type={isPasswordShow ? 'text' : 'password'} placeholder="Password" id='password' onChange={onchangepasswordhandler} required />
                        
                    </div>
                    {/* {password && (
                            <button className='eye-icon' onClick={toggleIsPasswordShowValue}>
                                <EyeIcon />
                            </button>
                        )} */}

                    <div class="row button">
                        <input type="submit" value="Login" />
                    </div>

                </form>
            </div>
        </div>
       
       </>
    )
}

export default Signin