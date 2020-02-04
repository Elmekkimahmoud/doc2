import React, { Component } from 'react'; //imrc
import Header from './header.js'
import './App.css'
import Footer from './footer.js';
import Healthcare from './healthcare.js';
import Booking from './Booking.js' ;
import Company from './company.js';
import Platform from './platform.js';
import Countries from './countries.js';


class App extends Component {//cc

  state = {  }
  render() { 
    return (
<docplanner>
  
<Header > </Header>
<main>

<Healthcare> </Healthcare>
<Booking> </Booking>
<Company> </Company>
<Platform></Platform>
<Countries></Countries>
</main>
<Footer> </Footer>

</docplanner>

      );
  }
}
 
export default App;