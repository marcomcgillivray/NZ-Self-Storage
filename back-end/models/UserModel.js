const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
    {
    fullName: {
        type: String,
    },
    emailAddress: {
        type: String,
    },
    phone: {
        type: Number,
    },
    address: {
        type: String
    },
    password: {
        type: String
    },
    unit: {
        type: [String]
    }

}
)

UserSchema.pre('save', async function(next) {
    const user = this;
  
    if (!user.isModified('password')) return next();
  
    try {
      // Generate a salt to hash the password
      const salt = await bcrypt.genSalt(10);
  
      // Hash the password using the generated salt
      const hashedPassword = await bcrypt.hash(user.password, salt);
  
      // Replace the plaintext password with the hashed one
      user.password = hashedPassword;
      next();
    } catch (error) {
      next(error);
      console.log(error);
    }
  });

const User = mongoose.model('User', UserSchema);

module.exports = User;