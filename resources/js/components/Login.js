import React, { Component } from 'react'
import Axios from 'axios';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={

        }
        this.login = this.login.bind(this);
    }

    isChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    login(event){
        // event.preventDefault();
        console.log(this.state);
        Axios.post('http://127.0.0.1:8000/api/login',
        {email:this.state.email,password:this.state.password})
        .then(res=>{
            // localStorage.setItem('token',JSON.stringify(res.data.data));
            console.log(res.data.data)
            // this.props.history.push('/');
            // window.location.href="/redirect";
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render() {
        return (
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                <div className="card">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                    <form method="POST" action="/redirect" onSubmit={event=>this.login(event)}>
                        <div className="form-group row">
                        <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Email Address</label>
                        <div className="col-md-6">
                            <input id="email" type="email" className="form-control  is-invalid " name="email" defaultValue="" required onChange={event=>this.isChange(event)} autoComplete="email" autofocus />
                            <span className="invalid-feedback" role="alert">
                            </span>
                        </div>
                        </div>
                        <div className="form-group row">
                        <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                        <div className="col-md-6">
                            <input id="password" type="password" className="form-control  is-invalid " name="password" required onChange={event=>this.isChange(event)} autoComplete="current-password" />
                            <span className="invalid-feedback" role="alert">
                            </span>
                        </div>
                        </div>
                        <div className="form-group row">
                        <div className="col-md-6 offset-md-4">
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" name="remember" id="remember" />
                            <label className="form-check-label" htmlFor="remember">
                            Remember Me
                            </label>
                            </div>
                        </div>
                        </div>
                        <div className="form-group row mb-0">
                        <div className="col-md-8 offset-md-4">
                            <button type="submit" className="btn btn-primary">
                            Login
                            </button>
                            <a className="btn btn-link" href="">
                            Forgot Your Password?
                            </a>
                        </div>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
