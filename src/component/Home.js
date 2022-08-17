import React from 'react'
import logo from './image/hospital-beds.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home(){
    return(
        <>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">

  <ol className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  
  <div className="carousel-inner">
    <div className="item active">
     <center> <img src={logo} alt="Los Angeles"/> </center>
    </div>

    <div className="item">
     <center>  <img src={logo} alt="Chicago"/> </center>
    </div>

    <div className="item">
      <center> <img src={logo} alt="New York"/> </center>
    </div>
  </div>


  <a className="left carousel-control" href="#myCarousel" data-slide="prev" style={{background:'none'}}>
    <span className="glyphicon glyphicon-chevron-left"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#myCarousel" data-slide="next" style={{background:'none'}}>
    <span className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
        </>
    )
};


export default Home;