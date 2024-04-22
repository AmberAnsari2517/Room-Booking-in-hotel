import React from 'react';
import { imgroom1, imgroom2, imgroom3, imgroom4, imgroom5, imgroom6, imgroom7, imgroom8, imgroom9, imgroom10, imgroom11, imgroom12 } from './Asset';
import { Room1, Room2, Room3, f1, f2, f3, hotelimg, profile, cardimg, cardimg2 } from './Asset'; // Make sure to import Room1 component
import { useState } from 'react';
export const Landing = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

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
            <section>
                <div className='container papular-section'>
                    <h2 className="text-center mb-4">Our most popular hotel</h2>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div style={{ position: 'relative' }}>
                                <img src={profile} alt="Popular Hotel" style={{ height: 300, width: 400 }} />
                                <div style={{ position: 'absolute', top: 0, left: 0 }}>
                                    <img src={profile} alt="Popular Hotel" style={{ height: 300, width: 400 }} />
                                </div>
                            </div>


                        </div>
                        <div className='col-lg-4 d-flex align-items-center'>
                            <div>
                                <h3>About us</h3>
                                <p>
                                    Welcome to our luxury hotel! Nestled in the heart of the city, we offer unparalleled comfort, style, and hospitality to our guests. Our elegant accommodations, state-of-the-art facilities, and personalized services ensure a memorable stay for every visitor. Whether you're here for business or leisure, our dedicated team is committed to exceeding your expectations and creating unforgettable experiences. Discover the perfect blend of sophistication and relaxation at our hotel.
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
            </section>
            <>
                {/* Our Services and facilties */}
                <section className='photo-animation'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={hotelimg} className='img-fluid' />
                            </div>
                            <div className='col-md-6' photoanimation-right>
                                <div className='about-content'>
                                    <div className='content-title'>
                                        <h5>
                                            Luxury Hotel

                                        </h5>
                                        <h2>
                                            Pearl Of The Adriatic.
                                        </h2>
                                        <p>
                                            Vestibulum non ornare nunc. Maecenas a metus in est iaculis pretium. Aliquam ullamcorper nibh lacus, ac suscipit ipsum consequat porttitor.Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta ex, in imperdiet tortor feugiat at.
                                        </p>
                                        <p>
                                            Cras finibus laoreet felis et hendrerit. Integer ligula lorem, finibus vitae lorem at, egestas consectetur urna. Integer id ultricies elit. Maecenas sodales nibh, quis posuere felis. In commodo mi lectus venenatis metus eget fringilla. Suspendisse varius ante eget.
                                        </p>
                                    </div>
                                </div>
                            </div>
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
                                <div className=' card-facilties  col-md-3'  >
                                    <div style={{ margin: 10 }}>
                                        <img src={dataarray.Image} />
                                        <hr/>

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
