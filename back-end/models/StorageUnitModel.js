const mongoose = require('mongoose');

const StorageUnitSchema = new mongoose.Schema(
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

const StorageUnit = mongoose.model('StorageUnit', StorageUnitSchema);

module.exports = StorageUnit;