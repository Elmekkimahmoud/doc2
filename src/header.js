import React, { Component } from 'react';
class Header extends Component {
 
    render() { 
        return ( 

            <header>
            <nav>
            <a href="https://www.docplanner.com/about-us"> 
            <img src={"https://www.docplanner.com/img/logo-default-group-en.svg?v=1"} alt="ttZSS"  /> 
            </a>
            <ul>
                <li> About us</li>    
               <li>  Career</li>
                <li> Departments</li>  
            </ul>
            </nav>
        </header>


         );
    }
}
 
export default Header;