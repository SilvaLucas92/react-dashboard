import React, {useRef} from 'react';
import Home from './Home';
import Products from './Products';
import Users from './Users';
import {Route, Link, Switch} from 'react-router-dom';
import NotFound from './NotFound';
function Nav() {
    const btn =  useRef();
    const showSideNav = () => {
        btn.current.classList.toggle('active')
    }
    return(
        <header>
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
    
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/users" component={Users}></Route>
            <Route component={NotFound} />
            
            </Switch>
    </header> 
    )
}
export default Nav;