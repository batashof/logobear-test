import React from 'react'
import '../../styles/styles.scss'
import {getData} from "../../api/data";
import {ReactComponent as RunningMan} from './../../assets/running-man.svg';
import {ReactComponent as Add} from './../../assets/add.svg';
import {Link} from "react-router-dom";


const Main = (props) => {

    const [data, setData] = React.useState([]);
    const token = localStorage.getItem("logo-bear-token");
    React.useEffect(() => {
        console.log("lol")

        getData(token)
            .then((res) => {
                setData(res.data.response.jogs.reverse())
            })
    }, [token]);

    React.useEffect(() => {
        const datesFrom = data.filter(item => item.date > Date.parse(props.dateFrom) / 1000);
        setData(datesFrom)
    }, [props.dateFrom]);

    React.useEffect(() => {
        const datesTo = data.filter(item => item.date < Date.parse(props.dateTo) / 1000);
        setData(datesTo)
    }, [props.dateTo]);
    return (
        <div className="main">
            {
                data.map((jog, key) => (
                    <div key={key} className="jog">

                        <RunningMan/>

                        <div className="jog-table">
                            <p><span>{new Date(jog.date * 1000).toISOString().slice(0, 10)}</span></p>
                            <p>Speed: <span>15</span></p>
                            <p>Distance: <span>{jog.distance} km</span></p>
                            <p>Time: <span>{jog.time} min</span></p>
                        </div>

                    </div>


                ))
            }

            <Link className="add-button" to="/add">
                <Add/>
            </Link>

        </div>
    )
};

export default Main;