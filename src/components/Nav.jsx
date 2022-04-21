import React, {useRef} from 'react';
import Home from './Home';
import Products from './Products';
import Users from './Users';
import ProductsDetail from './ProductsDetail'
import {Route, Link, Switch} from 'react-router-dom';
import NotFound from './NotFound';
import LastPdt from './LastPdt';
import UserDetail from './UserDetail';
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
                        <li className='li-nav'><Link to="/products">Products</Link></li>
                        <li className='li-nav'><Link to="/users">Users</Link></li>
                        <li className='li-nav'><Link to="/lastPdt">Last Product</Link></li>
                    </ul>
                </div>
    
            <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/products/:id" component={ProductsDetail}></Route>
            <Route path="/users/:id" component={UserDetail}></Route>
            <Route path="/products" component={Products}></Route>
            <Route path="/users" component={Users}></Route>
            <Route path="/lastPdt" component={LastPdt}></Route>
            <Route component={NotFound} />
            
            </Switch>
    </header> 
    )
}
export default Nav;