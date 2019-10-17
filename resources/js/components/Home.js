import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom'
import Axios from 'axios';

export default class Home extends Component {

    login(e){
        e.preventDefault();
        console.log("clicked")
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
            <div>
                <a href="/login-in" onClick={(event)=>this.login(event)} target="_blank">Login with passport</a>
            </div>
        )
    }
}
