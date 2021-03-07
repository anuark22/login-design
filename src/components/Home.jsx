import React, { Fragment } from 'react';
import '../public/css/Home.css';
import logo from '../public/img/homeimg.png';

function Home (){
    return(
        <Fragment>
            <div className="effort">
                <div className="homeEffort">
                    <p className="effp1">Secure your effort</p>
                    <p className="effp2">Get access to all the data you need.</p>
                </div> 
                <div className="homeImage">
                    <img src={logo} alt="home" className="homeimg"/>
                </div>
            </div>
        </Fragment>
    );
}
export default Home;