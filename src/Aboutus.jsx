import React from 'react';
import { videoabout } from './Asset'; // Assuming videoabout is the path to your video file
import { imgroom1, imgroom2, imgroom3, imgroom4, imgroom5, imgroom6, imgroom7, imgroom8, imgroom9, imgroom10, imgroom11, imgroom12 } from './Asset';
import { useState } from 'react';
import { Footer } from './footer';
import { Room1, Room2, Room3, f1, f2, f3, hotelimg, profile, cardimg, cardimg2, line } from './Asset'; // Make sure to import Room1 component
import { about ,aboutvideo} from './Asset';

export const Aboutus = () => {

    const landingpage = [
        {
            Image: imgroom11,
            heading: 'Luxury Ocean View Suite',
            body: 'Spacious room with a king-size bed and a beautiful view.',
            details: 'Book this room now for a relaxing stay!',
        },
        {
            Image: imgroom2,
            heading: 'Deluxe Mountain Retreat Room',
            body: 'Comfortable room with twin beds and modern amenities.',
            details: 'Reserve this room online for a convenient stay!',
        },
        {
            Image: imgroom3,
            heading: 'Executive Urban Escape Room',
            body: 'Luxurious suite with a separate living area and premium amenities.',
            details: 'Book this suite online for a luxurious experience!',
        },
        {
            Image: imgroom4,
            heading: 'Elegant Countryside Hideaway Room',
            body: 'Elegant room with a queen-size bed and a cozy ambiance.',
            details: 'Make your reservation now for a memorable stay!',
        },
        {
            Image: imgroom9,
            heading: 'Family Paradise Retreat Room',
            body: 'Spacious room suitable for families with comfortable bedding.',
            details: 'Plan your family getaway and book this room today!',
        },
        {
            Image: imgroom10,
            heading: 'Grand Luxury Palace Room',
            body: 'The epitome of luxury with a grand bedroom and opulent amenities.',
            details: 'Indulge in luxury by booking this suite online!',
        },
        // {
        //     Image: imgroom11,
        //     heading: 'Royal Serenity Haven',
        //     body: 'Beautifully designed room with a luxurious ambiance.',
        //     details: 'Experience luxury at its finest. Book now!',
        // },
        // {
        //     Image: imgroom12,
        //     heading: 'Exquisite Deluxe Mansion',
        //     body: 'Exquisite room with premium amenities for a lavish stay.',
        //     details: 'Treat yourself to luxury. Reserve now!',
        // },
    ]
    const faclities = [
        {
            Image: f1,
            head: 'Room Services',
            body: 'Our hotel rooms are very open and spacious.Which are made in modern style.'

        },
        {
            Image: f2,

            head: 'Wifi',
            body: 'Wi-Fi available in every room of our hotel so you can so which connected family and friends.'

        },
        {
            Image: f3,

            head: 'Breakfast',
            body: 'Our hotel provides breakfast for guests every morning.'
        },

        {
            Image: f3,

            head: 'Breakfast',
            body: 'Our hotel provides breakfast for guests every morning.'
        }



    ]
    return (
       <div>
           <div className='row container-fluid '>
    <div className='col-lg-12'>
        <div >
            <img src={about} alt="Responsive image" style={{width: '1349px', height:'500px'}}/>
            <h1 style={{position:'absolute', top:'50%', left:'50%' , transform: 'translate(-50%, -50%)', color: 'white'}}>About</h1>
                        <h4 style={{position:'absolute', top:'60%', left:'50%',  transform: 'translate(-50%, -50%)', color: 'white'}}>Home/About</h4>

        </div>
    </div>
</div>
         <div className='container'>
            <section className='abousection'>
                <div className='aboutus'>
                    <h2> Abot UsOur Hotel</h2>
                    <p>Welcome to our luxury hotel! Nestled in the heart of the city, we offer unparalleled comfort, style, and hospitality to our guests. Our elegant accommodations, state-of-the-art facilities, and personalized services ensure a memorable stay for every visitor.</p>
                    <p>Whether you're here for business or leisure, our dedicated team is committed to exceeding your expectations and creating unforgettable experiences. Discover the perfect blend of sophistication and relaxation at our hotel.</p>
                </div>
                {/* Ensure proper grid setup for the row and column */}
                <div className='row'>
                   <div className='col-lg-6 container' style={{backgroundColor:'black'}}>
                       {/* Ensure the video occupies the full width of its parent container */}
                       <video controls style={{ width: '100%', height:400, }}>
                           <source src={videoabout} type="video/mp4" />
                           Your browser does not support the video tag.
                       </video>
                   </div>
                   <div className='col-lg-6 container' style={{backgroundColor:'black'}} >
                       {/* Ensure the video occupies the full width of its parent container */}
                       <video controls style={{ width: '100%', height:400}}>
                           <source src={aboutvideo} type="video/mp4" />
                           Your browser does not support the video tag.
                       </video>
                   </div>
                </div>
            </section>
            </div>

            
            <section className='card-section'>
                <section className='section1'>
                    <h2>Our Rooms</h2>
                    <p>Choose from our range of luxurious rooms and book your stay now.</p>
                </section>
                <div className="container">
                    <div className="row">
                        {landingpage.map((data, index) => (
                            <div key={index} className="col-lg-4 ">
                                <div
                                    className="card glass-effect"
                                  
                                >
                                      <div>
                                    <img src={data.Image} style={{ width: '100%', height: 'auto' }} alt="Room" />
                                    {/* <h3>{data.heading}</h3>
                              
                                      
                                            <p>{data.body}</p>
                                            <p>{data.details}</p> */}
                                        </div>
                                   
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className='facilties-section '>
                    <div className="container">

                        <div className='row hotel-facilties '>
                            <div className='col-12 col-sm-8 hotel facilties-text' >
                                <h2>
                                    Hotel Facilities
                                </h2>
                                <p >
                                    Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling
                                </p>
                            </div>
                        </div>

                        <div className='row facilties-row' >
                            {faclities.map((dataarray, indexarray) =>
                                <div className='card-facilties-about  col-md-3'  >
                                    <div style={{ margin: 10 }}>
                                        <img src={dataarray.Image} />
                                       

                                        <h3 style={{marginTop:10, marginBottom:30}}>
                                            <hr/>
                                            {dataarray.head}

                                        </h3>
                                       
                                        {/* <p>
                                            {dataarray.body}
                                        </p> */}
                                    </div>
                                </div>
                            )}

                        </div>



                    </div>

                </section>
            
        <Footer/>
       </div>
    );
};
