const StorageUnit = require('../models/StorageUnitModel');

exports.getStorageUnits = async (req, res, next) => {
    try {
        const storageUnits = await StorageUnit.find();

        res.status(200).json({
            status: 'Success',
            results: storageUnits.length,
            data: {
                storageUnits
            }
        });
        console.log('Did it');
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            message: error.message
        });
    }
};

exports.getUnit = async (req, res, next) => {
    try {
        const storageUnit = await StorageUnit.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: storageUnit
        });
    } catch (error) {
        console.log(error);
    }
}

exports.createStorageUnit = async (req, res, next) => {
    try {
        const storageUnit = await StorageUnit.create(req.body);
    
        res.status(201).json({
            status: 'success',
            storageUnit
        });
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            message: error.message
        });
    }
};

// exports.updateLead = async (req, res, next) => {
//     try {
//         const updatedLead = await Lead.findByIdAndUpdate(
//           req.params.id,
//           req.body, // Assuming req.body contains the updated lead data
//           { new: true, runValidators: true } // To return the updated lead and run validators
//         );
    
//         if (!updatedLead) {
//           return res.status(404).json({ status: 'error', message: 'No Lead Found' });
//         }
    
//         res.status(200).json({
//           status: 'success',
//           lead: updatedLead
//         });
//       } catch (error) {
//         // Handle any potential errors
//         return res.status(500).json({ status: 'error', message: error.message });
//       }
//     };


exports.deleteStorageUnit = async(req, res, next) => {
    const storageUnit = await StorageUnit.findByIdAndDelete(req.params.id);

    if(!storageUnit) {
        return next('No Storage Unit found', 404);
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
};

