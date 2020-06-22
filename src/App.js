import React from 'react';
import './styles/styles.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from './components/header'
import Main from './pages/main'
import Login from './pages/login'
import Info from './pages/info'
import Add from './pages/add-information'

function App() {
    const [dateFrom, setDateFrom] = React.useState();
    const [dateTo, setDateTo] = React.useState();

    // console.log(dateFrom)

    const onChangeDateFrom = (value) => {
        setDateFrom(value)
    };
    const onChangeDateTo = (value) => {
        setDateTo(value)
    };
    return (
        <div className="app">
            <Router>
                <Header onChangeDateFrom={onChangeDateFrom} onChangeDateTo={onChangeDateTo}/>
                <Switch>
                    <Route exact path={["/home", "/"]}>
                        <Main dateFrom={dateFrom} dateTo={dateTo}/>
                    </Route>
                    <Route path="/login" component={Login}/>
                    <Route path="/info" component={Info}/>
                    <Route path="/add" component={Add}/>

                </Switch>
            </Router>
        </div>
    );
}

export default App;
