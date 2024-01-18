const User = require('../models/UserModel');

exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        res.status(200).json({
            status: 'Success',
            results: users.length,
            data: {
                users
            }
        });
    } catch (error) {
        res.status(500).json({
            status: 'Error',
            message: error.message
        });
    }
};

exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: user
        });
    } catch (error) {
        console.log(error);
    }
}

exports.createUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body);
    
        res.status(201).json({
            status: 'success',
            user
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


exports.deleteUser = async(req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id);

    if(!user) {
        return next('No Storage Unit found', 404);
    }

    res.status(204).json({
        status: 'success',
        data: null
    });
};

