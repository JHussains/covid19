import React , {Fragment} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../../App.css'
import logo from '../../vid21.png';
export default function NavBar() {
    return (
        <div>
             <AppBar>
             
        <Toolbar className="nav-container">
        <div className="img-cont">
                <img src={logo} alt=""/>
                </div>
            <Fragment>
            <Button color="inherit" component={Link} to="/">
              <h3><b>Home</b></h3>
              </Button>
              <Button color="inherit" component={Link} to="/search">
              <h3><b>Results</b></h3>
              </Button>
              <Button color="inherit" component={Link} to="/contact">
              <h3><b>Contact Us</b></h3>
              </Button>
            </Fragment>
        </Toolbar>
      </AppBar>
        </div>
    )
}