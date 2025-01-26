const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bloodGroup: { type: String, required: true },
    phoneNo: { 
      type: String, 
      required: true, 
      unique: true, 
      validate: {
        validator: function (v) {
          return /^\d{10}$/.test(v); // Validates 10-digit phone numbers
        },
        message: props => `${props.value} is not a valid phone number!`
      }
    },
    email: { 
      type: String, 
      required: true, 
      unique: true, // Ensure email uniqueness
      match: [/.+@.+\..+/, "Please enter a valid email"] 
    },
    password: { type: String, required: true },
    medicalHistory: { type: String }, // Optional medical history
    appointment: { 
      type: [Date], // Array of appointment dates
      default: [] 
    },
    gender: { 
      type: String, 
      enum: ['Male', 'Female', 'Other'], 
      required: true 
    },
    address: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
  },
  { 
    timestamps: true // Adds createdAt and updatedAt fields
  }
);

module.exports = mongoose.model('User', userSchema);
