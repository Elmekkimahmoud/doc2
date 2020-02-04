import React, { Component } from 'react';
class Platform extends Component {
    state = {  }
    render() { 
        return (<section class="mainsec4">
        <div class="sec4div1">
        <h1>The world's  <br />biggest healthcare platform</h1>
        <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
        <img src={"https://www.docplanner.com/img/logo.png"} alt=""/>
        </div>
      <div class="container">
        <div class="contdiv1">
            <img src={"https://www.docplanner.com/img/flag.png"} alt=""/>
            <h3>Leader in 10 countries</h3>
            <p>Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile</p>
        </div>
        <div class="contdiv2">
            <img src={"https://www.docplanner.com/img/visits.png"} alt=""/>
            <h3>1.5 million appointments</h3>
            <p>booked last month</p>
        </div>
        <div class="condiv3">
            <img src={"https://www.docplanner.com/img/patients.png"} alt=""/>
            <h3>30 million unique patients</h3>
            <p>visit us every month</p>
        </div>
        <div class="contdiv4">
            <img src={"https://www.docplanner.com/img/doctors.png"} alt=""/>
            <h3>2 million active doctors</h3>
            <p>trust in our solutions</p>
        </div>
     </div>
    </section>  );
    }
}
 
export default Platform;