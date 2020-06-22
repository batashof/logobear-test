import React from 'react'
import '../../styles/styles.scss'
import {ReactComponent as BearFace} from './../../assets/bear-face.svg';
import Button from "../../components/button/button";
import {login} from "../../api/auth";


const Login = (props) => {
    const onClickLogin = () => {
        login("hello")
    };
    return (
        <div className="login">
            <div className="login-box">
                <BearFace/>
                <Button name="Let me in" className="login-button" onClick={onClickLogin} link="/"/>
            </div>

        </div>
    )
};

export default Login;