import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Nav extends Component {
    render() {
        return (
            <div>
  <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
    <div className="container">
      <Link className="navbar-brand" to="/">
        Laravel
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/* Left Side Of Navbar */}
        <ul className="navbar-nav mr-auto">
        </ul>
        {/* Right Side Of Navbar */}
        <ul className="navbar-nav ml-auto">
          {/* Authentication Links */}
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
          </li>
          <li className="nav-item dropdown">
            <a id="navbarDropdown" className="nav-link dropdown-toggle" href="/logout" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
              {'{'}{'{'} Auth::user()-&gt;name {'}'}{'}'} <span className="caret" />
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                               document.getElementById('logout-form').submit();">
                {'{'}{'{'} __('Logout') {'}'}{'}'}
              </a>
              <form id="logout-form" action="{{ route('logout') }}" method="POST" style={{display: 'none'}}>
                @csrf
              </form>
            </div>
          </li>
          @endguest
        </ul>
      </div>
    </div>
  </nav>
  <main className="py-4">
    @yield('content')
  </main>
</div>

        )
    }
}
