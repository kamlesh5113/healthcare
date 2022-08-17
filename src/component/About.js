import React from "react";
import logo from './image/hospital-beds.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'


function About(){
    return(
        <>
            <center>
                <h1>About Us</h1>
            </center>

            <div className="container-fluid">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <img src={logo} alt="error" width='100%'/>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <p>
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo aspernatur dignissimos sapiente necessitatibus unde magnam assumenda, porro corrupti temporibus! Dolore et enim repellat eum veniam, harum veritatis aperiam facere voluptatum ipsam in assumenda natus? Fugiat, excepturi harum! Illum praesentium dolores molestiae cupiditate harum aliquam corporis facere distinctio, consectetur eligendi hic, atque nam quos cumque explicabo temporibus soluta, earum laudantium itaque! Laudantium rerum eveniet aspernatur, nostrum dicta quam ea soluta temporibus.

                    </h4>
                    </p>
                    <button type="button" className="btn btn-primary">Know More</button>
                </div>
            </div>
        </>
    )
}

export default About;