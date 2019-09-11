import React from "react";
import {BrowserRouter as Route,Link} from "react-router-dom";
import '../navbar.css';

function Nav(props){
    return (
        <div>
            <div id="navbar">
                <span className="branding">Logo</span>

                <span className="nav-mid">
                   <Link to="/Men"><button>Men</button></Link>
                   <Link to="/Women"><button>Women</button></Link>                   
                   <Link to="/Kids"><button>Kids</button></Link>                
                </span>
                
                <span className="nav-right">
                   <Link to="/Wishlist"><button>Wishlist {props.wishlist.length}</button></Link>
                   <Link to="/Cart"><button>Cart {props.cart.length}</button></Link>
                   <button>Login</button>
                   <input type="text" placeholder="Search..." onKeyDown={(e)=>props.keyPress(e)}></input>
                </span>
            </div>
        </div>
    )
}

export default Nav;