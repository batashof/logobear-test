import React from 'react'
import '../../styles/styles.scss'
import {ReactComponent as Logo} from './../../assets/logo.svg';
import {ReactComponent as Menu} from './../../assets/menu.svg';
import {ReactComponent as FilterActive} from './../../assets/filter-active.svg';
import {ReactComponent as Filter} from './../../assets/filter.svg';
import {Link, useLocation} from "react-router-dom";
import Input from "../input/input";
import Main from "../../pages/main/main";

const Header = (props) => {

    const [filterActive, setFilterActive] = React.useState("none");
    const [filter, setFilter] = React.useState("");
    let location = useLocation();
    const path = location.pathname;
    console.log(path)

    const dateFrom = (e) => {
        props.onChangeDateFrom(e.target.value);
    };
    const dateTo = (e) => {
        props.onChangeDateTo(e.target.value);
    };

    const changeFilter = () => {
        if (filterActive === "none") {
            setFilterActive("");
            setFilter("none");
        } else {
            setFilterActive("none");
            setFilter("");

        }
    };
    return (
        <div className="header">
            <div className="header-container">
                <Link to="/login"><Logo/></Link>
                {location.pathname === "/login" ? <div/> :
                    <div className="header-right">
                        <div className="menu">
                            <Link to="/">
                                <div style={path === "/" ? {borderBottom: "solid 2px #fff"} : {}} className="menu-item">
                                    jogs
                                </div>
                            </Link>
                            <Link to="/info">

                                <div style={path === "/info" ? {borderBottom: "solid 2px #fff"} : {}}
                                     className="menu-item">
                                    info
                                </div>
                            </Link>
                            <div className="menu-item">
                                contact us
                            </div>
                        </div>
                        <div className="filter-icons">
                            <FilterActive style={{display: filterActive}} onClick={changeFilter}/>
                            <Filter style={{display: filter}} onClick={changeFilter}/>
                        </div>
                    </div>
                }
                <div className="menu-mobile">
                    <Menu width={28}/>
                </div>
            </div>
            <div style={{display: filterActive}} className="header-filter">
                <label>Date from</label>
                <Input type="date" onChange={dateFrom}/>
                <label>Date to</label>
                <Input type="date" onChange={dateTo}/>
            </div>
        </div>
    )
};

export default Header;