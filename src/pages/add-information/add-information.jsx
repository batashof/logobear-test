import React from 'react'
import '../../styles/styles.scss'
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import {postData} from "../../api/data";

const Add = (props) => {
    const token = localStorage.getItem("logo-bear-token");
    const [distance, setDistance] = React.useState(0);
    const [time, setTime] = React.useState(0);
    const [date, setDate] = React.useState(0);
    const handleSubmit = (e) => {
        postData(token, date, time, distance);
        props.history.push('/')
        // e.preventDefault();
    };
    return (
        <div className="add-information">
            <form className="add-information-box" onSubmit={handleSubmit}>
                <div className="add-information-box-item">
                    <label>Distance</label>
                    <Input type="number" onChange={(e)=>setDistance(e.target.value)} className="add-information-box-input"/>
                </div>
                <div className="add-information-box-item">
                    <label>Time</label>
                    <Input type="number" onChange={(e)=>setTime(e.target.value)} className="add-information-box-input"/>
                </div>
                <div className="add-information-box-item">
                    <label>Date</label>
                    <Input type="date" onChange={(e)=>setDate(e.target.value)} className="add-information-box-input"/>
                </div>
                <Button name="Save" type="submit" className="add-information-button"/>
            </form>

        </div>
    )
};

export default Add;