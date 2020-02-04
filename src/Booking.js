import React, { Component } from 'react';
class Booking extends Component {
    state = {  }
    render() { 
        return ( <section class="mainsec2">
        <div class="sec2div1">
        <h6>For patients</h6>
        <p>Find a doctor, book a visit and solve any health-related doubt 
        </p>
        <select>
            <option>Choose country</option>
                                                <option value="http://www.doctoraliar.com">Argentina</option>
                                                <option value="http://www.doctoralia.com.au">Australia</option>
                                                <option value="http://www.doctoralia.com.br">Brazil</option>
                                                <option value="http://www.doctoralia.cl">Chile</option>
                                                <option value="http://www.doctoralia.co">Colombia</option>
                                                <option value="http://www.znamylekar.cz">Czech</option>
                                                <option value="http://www.doctoralia-fr.com">France</option>
                                                <option value="http://www.miodottore.it">Italy</option>
                                                <option value="http://www.doctoralia.com.mx">Mexico</option>
                                                <option value="http://www.doctoralia.pe">Peru</option>
                                                <option value="http://www.znanylekarz.pl">Poland</option>
                                                <option value="http://www.doctoralia.com.pt">Portugal</option>
                                                <option value="http://www.doctoralia.es">Spain</option>
                                                <option value="http://www.doktortakvimi.com">Turkey</option>
                                                <option value="http://www.doctoralia.co.uk">UK</option>
                                        </select>
        <img src={"https://www.docplanner.com/img/screen-marketplace@2x.png"} alt="" />
    </div>
    <div class="sec2div2">
        <h6>For doctors</h6>
        <p>Save time managing visits and cut no-shows by half 
        </p>
        <img src={"https://www.docplanner.com/img/screen-saas@2x.png"} alt=""/>
    </div>

</section> );
    }
}
 
export default Booking;