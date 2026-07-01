import { mongoose, model, models, Schema } from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minLength: 2,
  },
  phone: {
    type: String,
    trim: true,
    minLength: 2,
  },
  address: {
    type: String,
    trim: true,
  },
  postalCode: Number,
  date: Date,
  products: {
    type: Array,
    default: [],
  },
  createdAT: {
    type: Date,
    default: () => {
      Date.now();
    },
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: () => {
      Date.now();
    },
  },
});

const Customer = models.Customer || model("Customer", CustomerSchema);

export default Customer;
