import React from 'react'
import '../../styles/styles.scss'
import {Link} from "react-router-dom";

const Button = (props) => {
    const style = `button ${props.className}`;
    return (
        <>
            {props.type === "submit" ?
                <button type={props.type} onClick={props.onClick} className={style}>

                    {props.name}

                </button> :
                <Link to={props.link}>
                    <button type={props.type} onClick={props.onClick} className={style}>
                        {props.name}
                    </button>
                </Link>
            }
        </>

    )
};

export default Button;