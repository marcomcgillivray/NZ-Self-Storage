const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema(
    {
    unitNumber: {
        type: Number,
    },
    width: {
        type: Number
    },
    length: {
        type: Number,
    },
    height: {
        type: Number,
    },
    location: {
        type: String
    },
    price: {
        type: Number
    },
    unitBooked: {
        type: Boolean
    }

}
)

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;