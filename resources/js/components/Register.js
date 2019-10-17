import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <div className="container">
  <div className="row justify-content-center">
    <div className="col-md-8">
      <div className="card">
        <div className="card-header">Register</div>
        <div className="card-body">
          <form method="POST" action="/api/register">
            <div className="form-group row">
              <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>
              <div className="col-md-6">
                <input id="name" type="text" className="form-control  is-invalid " name="name" defaultValue="" required autoComplete="name" autofocus />
                <span className="invalid-feedback" role="alert">
                </span>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
              <div className="col-md-6">
                <input id="email" type="email" className="form-control  is-invalid " name="email" defaultValue="" required autoComplete="email" />
                <span className="invalid-feedback" role="alert">
                </span>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
              <div className="col-md-6">
                <input id="password" type="password" className="form-control  is-invalid " name="password" required autoComplete="new-password" />
                <span className="invalid-feedback" role="alert">
                </span>
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="password-confirm" className="col-md-4 col-form-label text-md-right">Confirm Password</label>
              <div className="col-md-6">
                <input id="password-confirm" type="password" className="form-control is-invalid" name="password_confirmation" required autoComplete="new-password" />
              </div>
            </div>
            <div className="form-group row mb-0">
              <div className="col-md-6 offset-md-4">
                <button type="submit" className="btn btn-primary">
                Register
                </button>
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
