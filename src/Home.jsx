import React from 'react';
import { Button, Card, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.css';
import { Room1 } from './Asset'; // Make sure to import Room1 component
import { Room2 } from './Asset'; // Make sure to import Room1 component
import { Room3 } from './Asset'; // Make sure to import Room1 component
import { Landing } from './Landing';
import { Footer } from './footer';

export const Home = () => {
  return (
    <div>
      {/* nav bar start */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">

          <Link to='/'><i className="fa-solid fa-house" style={{ color: '#F2D17A' }}></i>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav Navitem">
              <li className="nav-item">
                <Link to='/' className="nav-link active me-3" aria-current="page" href="/">

                  Home <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/roombooking' className="nav-link" >
                  Room Booking <i className="fa-solid fa-fax"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/aboutus' className="nav-link" >
                  About <i className="fa-solid fa-heart"></i>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <Link to='/contect'>Contect <i className="fa-brands fa-blogger"></i></Link>
            <Button style={{ backgroundColor: '#F2D17A', borderRadius: '13px', color: 'white', marginLeft: 20 }}>Acount</Button>
          </div>
        </div>
      </nav>
      {/* nav bar end*/}

      {/* carousel start */}

      <div>
        <Carousel interval={7000} pause={false} wrap={true} className="custom-carousel" >
          <Carousel.Item >
            <img style={{ width: 1518, height: 565 }} src={Room1} alt="First slide" />
            <Carousel.Caption className="text-center custom-carousel-caption">
              <div className="carousel-text">
                <h2>Welcome to Our Hotel</h2>
                <h3>Discover Our Luxurious Rooms</h3>
                <h3>Deluxe Room</h3>
                <p>Experience luxury and comfort in our deluxe room.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ width: 1518, height: 565 }} src={Room2} alt="Second slide" />
            <Carousel.Caption className="text-center custom-carousel-caption">
              <div className="carousel-text">
                <h2>Welcome to Our Hotel</h2>
                <h3>Discover Our Luxurious Rooms</h3>
                <h3>Executive Suite</h3>
                <p>Enjoy an elevated stay in our executive suite.</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Carousel.Caption className="text-center custom-carousel-caption">
              <div className="carousel-text">
                <h2>Welcome to Our Hotel</h2>
                <h3>Discover Our Luxurious Rooms</h3>
                <h3>Premium Suite</h3>
                <p>Indulge in luxury with our premium suite.</p>
              </div>
            </Carousel.Caption>
            <img className="d-block" src={Room3} alt="Third slide" style={{ width: 1518, height: 565 }} />
          </Carousel.Item>
        </Carousel>
      </div>




      
      <Landing/>
      <Footer/>

    </div>

  );
};


