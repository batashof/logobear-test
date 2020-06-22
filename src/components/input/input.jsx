import React from 'react'
import '../../styles/styles.scss'

const Input = (props) => {
    const style = `input ${props.className}`;
    return (
        <input type={props.type} onChange={props.onChange} className={style}>
            {props.name}
        </input>


    )
};

export default Input;