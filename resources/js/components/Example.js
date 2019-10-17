import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom'
import Dashboard from './admin/Dashboard';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Nav from './Nav';
import Axios from 'axios';


class Example extends Component {
    componentDidMount() {
        let url = 'http://consumer.test/redirect';
        Axios.get(url
            ,{
            headers: {
                'Access-Controll-Allow-Orgigin' : "*",
                'Access-Controll-Allow-Methods' : "*",
                'Access-Controll-Allow-Header' : 'Origin,X-Requested-With'
            }
        }
        )
        .then(res=>console.log(res.data))
        .catch(err=>{
            console.log(err);
        })
    }
    
    render() {
        return (
            <BrowserRouter >
            <div className="flex-center position-ref full-height">
                <div className="top-right links">
                    <Link to="/">Home</Link>
                    <Link to="/dashboard">Dashboard</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
                {/* <div className="content"> */}
                <Switch>
                    <Route exact path="/" ><Home /></Route>
                    <Route  path="/dashboard" ><Dashboard /></Route>
                    <Route  path="/login" > <Login /> </Route>
                    <Route  path="/register" > <Register /></Route>
                </Switch>
                {/* </div> */}
            </div>
            </BrowserRouter>
        )
    }
}


export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
