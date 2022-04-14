import React, {useRef} from 'react';
import Logo from '../images/LeMaison.png';
import Home from './Home';
import Products from './Products';
import Users from './Users';
import {Route, Link} from 'react-router-dom';
function Nav() {
    const btn =  useRef();
    const showSideNav = () => {
        btn.current.classList.toggle('active')
    }
    return(
        <header>
            {/* <div className="header-container">
                <div className="div-logo">
                    <img src={Logo} alt="logo" />
                </div>

                {/* <nav className="header-nav">
                    <ul>    
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/users">Users</Link></li>
                    </ul>
                </nav> */}
                <div className='header-container'>
                    <div class="toggle-btn">
                        <span onClick={showSideNav}>&#9776;</span>
                    </div>
                    <h1 className='titleLemaison'>LeMaison</h1>
                </div>
                
                <div ref={btn} id="sidebar">
                    <ul>
                        <li>
                            DH dashboard
                        </li>
                        <li className='li-nav'><Link to="/">Home</Link></li>
                        <li  className='li-nav'><Link to="/products">Products</Link></li>
                        <li  className='li-nav'><Link to="/users">Users</Link></li>
                    </ul>
                </div>

            <Route exact path="/" component={Home}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/users" component={Users}></Route>
    </header> 
    )
}
export default Nav;