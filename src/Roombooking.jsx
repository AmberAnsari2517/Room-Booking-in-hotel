import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material'; // Importing Material-UI components
import { Room2, imgroom1, imgroom2, imgroom3, imgroom4, imgroom5, imgroom6, imgroom7, imgroom8, imgroom9, imgroom10, imgroom11, imgroom12 } from './Asset';
import { TextField } from '@mui/material';
export const Roombooking = () => {
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [bookingDetails, setBookingDetails] = useState({
        checkInDate: '',
        checkOutDate: '',
        guests: 1,
        // Add more booking details as needed
    });
    const [openDialog, setOpenDialog] = useState(false); // State for controlling dialog open/close

    const handleRoomSelect = (room) => {
        setSelectedRoom(room);
        setOpenDialog(true); // Open the dialog when a room is selected
    };

    const handleDialogClose = () => {
        setOpenDialog(false); // Close the dialog
    };

    const handleBookingDetailsChange = (e) => {
        const { name, value } = e.target;
        setBookingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handleBookingSubmit = () => {
        // Implement booking submission logic here
        console.log('Booking Details:', bookingDetails);
        setOpenDialog(false); // Close the dialog after submission
    };

    const landingpage = [
        {
            Image: imgroom1,
            heading: 'Luxury Room 1',
            body: 'Spacious room with a king-size bed and a beautiful view.',
            details: 'Book this room now for a relaxing stay!',
        },
        {
            Image: Room2,
            heading: 'Luxury Room 2',
            body: 'Comfortable room with twin beds and modern amenities.',
            details: 'Reserve this room online for a convenient stay!',
        },
        {
            Image: imgroom3,
            heading: 'Luxury Room 3',
            body: 'Luxurious suite with a separate living area and premium amenities.',
            details: 'Book this suite online for a luxurious experience!',
        },
        {
            Image: imgroom4,
            heading: 'Luxury Room 4',
            body: 'Elegant room with a queen-size bed and a cozy ambiance.',
            details: 'Make your reservation now for a memorable stay!',
        },
        {
            Image: imgroom5,
            heading: 'Luxury Room 5',
            body: 'Spacious room suitable for families with comfortable bedding.',
            details: 'Plan your family getaway and book this room today!',
        },
        {
            Image: imgroom6,
            heading: 'Luxury Room 6',
            body: 'The epitome of luxury with a grand bedroom and opulent amenities.',
            details: 'Indulge in luxury by booking this suite online!',
        },
        {
            Image: imgroom7,
            heading: 'Luxury Room 7',
            body: 'Beautifully designed room with a luxurious ambiance.',
            details: 'Experience luxury at its finest. Book now!',
        },
        {
            Image: imgroom8,
            heading: 'Luxury Room 8',
            body: 'Exquisite room with premium amenities for a lavish stay.',
            details: 'Treat yourself to luxury. Reserve now!',
        },
        {
            Image: imgroom9,
            heading: 'Luxury Room 9',
            body: 'Opulent room with elegant decor and top-notch facilities.',
            details: 'Experience unmatched comfort and luxury. Book now!',
        },
        {
            Image: imgroom10,
            heading: 'Luxury Room 10',
            body: 'Sumptuous room with luxurious furnishings and breathtaking views.',
            details: 'Indulge in a luxurious retreat. Reserve now!',
        },
        {
            Image: imgroom11,
            heading: 'Luxury Room 11',
            body: 'Stunning room with modern amenities and personalized services.',
            details: 'Escape to luxury and comfort. Book now!',
        },
        {
            Image: imgroom12,
            heading: 'Luxury Room 12',
            body: 'Magnificent room offering unparalleled luxury and relaxation.',
            details: 'Experience luxury like never before. Reserve now!',
        },
    ];


    return (
        <div>
            <div className="container">
                <div className="row">
                    {landingpage.map((data, index) => (
                        <div key={index} className="col-md-3  mb-4">
                            <div className="card glass-effect">
                                <img src={data.Image} style={{ width: '100%', height: 'auto' }} alt="Room" />
                                <h3>{data.heading}</h3>
                                <p>{data.body}</p>
                                <p>{data.details}</p>
                                <Button onClick={() => handleRoomSelect(data)}>Book Room</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dialog for booking */}
            <Dialog open={openDialog} onClose={handleDialogClose} >
                {selectedRoom && (
                    <>
                        <DialogTitle style={{ backgroundColor: 'black', color: '#F2D17A' }}>{selectedRoom.heading}</DialogTitle>
                        <DialogContent >
                            <img src={selectedRoom.Image} style={{ width: '100%', height: 'auto' }} alt="Room" />
                            <p>{selectedRoom.body}</p>
                            <p>{selectedRoom.details}</p>
                            <form onSubmit={handleBookingSubmit}>
                                {/* Booking details inputs */}
                                <TextField
                                    label="Check-in Date"
                                    type="date"
                                    name="checkInDate"
                                    value={bookingDetails.checkInDate}
                                    onChange={handleBookingDetailsChange}
                                    required
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    margin="normal"
                                />
                                <br />
                                <TextField
                                    label="Check-out Date"

                                    type="date"
                                    name="checkOutDate"
                                    value={bookingDetails.checkOutDate}
                                    onChange={handleBookingDetailsChange}
                                    required
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    margin="normal" />
                                <br />
                                <TextField
                                    label="Number of Guests"
                                    type="number"
                                    name="guests"
                                    value={bookingDetails.guests}
                                    onChange={handleBookingDetailsChange}
                                    required
                                    fullWidth
                                    margin="normal"

                                />


                                {/* Add more booking details inputs as needed */}
                            </form>

                        </DialogContent>
                        <DialogActions style={{ backgroundColor: 'black', color: '#F2D17A' }}>
                            <Button onClick={handleDialogClose} style={{ color: 'white' }}>Cancel</Button>
                            <Button type="submit" variant="contained" style={{ backgroundColor: "#F2D17A" }} onClick={handleBookingSubmit}>
                                Book Now
                            </Button>
                        </DialogActions>
                    </>
                )}
            </Dialog>
        </div>
    );
};