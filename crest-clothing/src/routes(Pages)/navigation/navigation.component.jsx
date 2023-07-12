import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import './navigation.styles.scss';

//Navigation is the parent route. Home and other routes/pages will be nested in the parent route.
//Outlet is used to tell the DOM where to render the nested element(s).

const Navigation = () =>{
    return(
      <Fragment>
        <div className="navigation">
            <Link className="logo-container" to='/'>
                <CrwnLogo className="logo"/>
            </Link>
            
            <div className="nav-links-container">
                <Link className="nav-Link" to='/shop'>
                    SHOP
                </Link>
                <Link className="nav-Link" to='/sign-in'>
                SIGN IN
            </Link>
            </div>

        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation;