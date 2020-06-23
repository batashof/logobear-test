import React from 'react'
import '../../styles/styles.scss'
import {ReactComponent as Logo} from './../../assets/logo.svg';
import {ReactComponent as Menu} from './../../assets/menu.svg';
import {ReactComponent as CloseIcon} from './../../assets/cancel.svg';
import {ReactComponent as FilterActive} from './../../assets/filter-active.svg';
import {ReactComponent as Filter} from './../../assets/filter.svg';
import {Link, useLocation} from "react-router-dom";
import Modal from 'react-modal';
import Input from "../input/input";

const Header = (props) => {

    const [filterActive, setFilterActive] = React.useState("none");
    const [modalIsOpen,setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const [filter, setFilter] = React.useState("");
    let location = useLocation();
    const path = location.pathname;

    const dateFrom = (e) => {
        props.onChangeDateFrom(e.target.value);
    };
    const dateTo = (e) => {
        props.onChangeDateTo(e.target.value);
    };

    const changeFilter = () => {
        if (path === "/") {
            if (filterActive === "none") {
                setFilterActive("");
                setFilter("none");
            } else {
                setFilterActive("none");
                setFilter("");

            }
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
                    <Menu onClick={openModal} width={28}/>
                </div>
            </div>
            <div style={path === "/" ?{display: filterActive}: {display: "none"}} className="header-filter">
                <label>Date from</label>
                <Input type="date" onChange={dateFrom}/>
                <label>Date to</label>
                <Input type="date" onChange={dateTo}/>
            </div>

            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={closeModal}
                // style={customStyles}
                className="menu-modal"
                overlayClassName="menu-overlay"
                contentLabel="Modal"
            >
                <Logo className="menu-logo"/>
                <CloseIcon className="menu-close" fontSize={"small"} onClick={() => setIsOpen(false)}/>
                <div className="menu-modal-container">
                    <Link to="/">
                        <p onClick={() => setIsOpen(false)}>jogs</p>
                    </Link>
                    <Link to="/info">
                        <p onClick={() => setIsOpen(false)} style={{color: "#7ed321"}}>info</p>
                    </Link>
                    <p>contact us</p>
                </div>

            </Modal>
        </div>
    )
};

export default Header;