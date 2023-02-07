import mongoose from "mongoose";
import isEmail from 'validator/lib/isEmail.js';
import bcrypt from "bcrypt";

const patientSchema = new mongoose.Schema({
      firstName: {
        type: String,
        required: [true, 'please enter firstName'],
        min: 2,
        max: 50,
      },
      lastName: {
        type: String,
        required: [true, 'please enter lastName'],
        min: 2,
        max: 50,
      },
      address: {
        type: String,
        default: null
      },
      phone: {
        type: Number,
        minLength: [10, 'enter correct mobile number']
      },
      email: {
        type: String,
        required: [true, 'please enter an email'],
        max: 50,
        unique: true,
        lowercase: true,
        validate: [isEmail, 'please enter a valid email']
      },
      password: {
        type: String,
        required: [true, 'please enter an password'],
        minLength: [6, 'Minimum password length is 6 characters']
      },
      symptoms: {
        type: String,
        default: null
      },
      picturePath: {
        data: Buffer,
        contentType: String,
        default:""
      },
      appointments: {
        type: Array,
        default: []
      },
      drName: {
        type: String,
        default: null
      },
      date:{
        type: Date,
        default: Date.now
      }
});

patientSchema.pre('save',async function(next){ //this method invokes before entering into the the db
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password,salt);
  next();
});

patientSchema.statics.login = async function(email, password){
  const user = await this.findOne({ email : email });
  if(user){
    const auth = await bcrypt.compare(password, user.password);
    if(auth){
      return user;
    }
    throw Error('incorrect password');
  }
  throw Error('incorrect email');
};

export const patientModel = new mongoose.model("patient", patientSchema);