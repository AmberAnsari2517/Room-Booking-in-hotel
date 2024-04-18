import React from 'react';
import { imgroom1, imgroom2, imgroom3, imgroom4, imgroom5, imgroom6, imgroom7, imgroom8, imgroom9, imgroom10, imgroom11, imgroom12 } from './Asset';
import { Room1, Room2, Room3 } from './Asset'; // Make sure to import Room1 component
import { useState } from 'react';
export const Landing = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const landingpage = [
        {
            Image: imgroom1,
            heading: 'Luxury Ocean View Suite',
            body: 'Spacious room with a king-size bed and a beautiful view.',
            details: 'Book this room now for a relaxing stay!',
        },
        {
            Image: imgroom2,
            heading: 'Deluxe Mountain Retreat',
            body: 'Comfortable room with twin beds and modern amenities.',
            details: 'Reserve this room online for a convenient stay!',
        },
        {
            Image: imgroom3,
            heading: 'Executive Urban Escape',
            body: 'Luxurious suite with a separate living area and premium amenities.',
            details: 'Book this suite online for a luxurious experience!',
        },
        {
            Image: imgroom4,
            heading: 'Elegant Countryside Hideaway',
            body: 'Elegant room with a queen-size bed and a cozy ambiance.',
            details: 'Make your reservation now for a memorable stay!',
        },
        {
            Image: imgroom9,
            heading: 'Family Paradise Retreat',
            body: 'Spacious room suitable for families with comfortable bedding.',
            details: 'Plan your family getaway and book this room today!',
        },
        {
            Image: imgroom10,
            heading: 'Grand Luxury Palace Room',
            body: 'The epitome of luxury with a grand bedroom and opulent amenities.',
            details: 'Indulge in luxury by booking this suite online!',
        },
        {
            Image: imgroom11,
            heading: 'Royal Serenity Haven',
            body: 'Beautifully designed room with a luxurious ambiance.',
            details: 'Experience luxury at its finest. Book now!',
        },
        {
            Image: imgroom12,
            heading: 'Exquisite Deluxe Mansion',
            body: 'Exquisite room with premium amenities for a lavish stay.',
            details: 'Treat yourself to luxury. Reserve now!',
        },
       ]   
       const faclities= [
        {
            head:'Room',
            body:'xyz'
        },
        {
            head:'Room1',
            body:'xyz'
        },
        {
            head:'Room1',
            body:'xyz'
        },
        {
            head:'Room1',
            body:'xyz'
        },
        {
            head:'Room1',
            body:'xyz'
        }


       ]
    

       return (
        <div>
        <div className="container">
            <div className="row">
                {landingpage.map((data, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div
                            className="card glass-effect"
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <img src={data.Image} style={{ width: '100%', height: 'auto' }} alt="Room" />
                            <h3>{data.heading}</h3>
                            {index === hoveredCard && (
                                <div>
                                    <p>{data.body}</p>
                                    <p>{data.details}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        <>
        {/* Our Services and facilties */}
        <section className='facilties-section'>
        <div className="container">

           <div className='hotel-facilties'>
           <h2>
                Hotel Facilities
            </h2>
            <p>
            Proactively morph optimal infomediaries rather than accurate expertise. Intrinsicly progressive resources rather than resource-leveling


            </p>
           </div>
            <div className='row'>
                {faclities.map((dataarray,indexarray) =>
                <div className='col-md-4'>
                    <div>
                    <h3>
                        {dataarray.head}
                    
                    </h3>
                    <p>
                        {dataarray.body}
                    </p>
                    </div>
                 </div>
        )}

            </div>

        </div>
        </section>
        </>
        </div>
    );
};
