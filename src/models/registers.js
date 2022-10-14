const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  SignupUsername: {
    type: String,
    required: true,
  },

  SignupEmail: {
    type: String,
    required: true,
    unique: true,
  },

  SignupPassword: {
    type: String,
    required: true,
    // unique: true,
  },
  SignupConfirmPassword: {
    type: String,
    required: true,
    // unique: true,
  },
});

//now we have to create a collection

const Register = new mongoose.model("Register", employeeSchema);

module.exports = Register;
