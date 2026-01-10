import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    match: [/^\S+@\S+\.\S+$/, 'Invalid email format']
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
    match: [/^[0-9]{10}$/, 'Phone must be 10 digits']
  },
  company: {
    type: String,
    trim: true,
    default: ''
  },
  course: {
    type: String,
    required: [true, 'Course is required'],
    enum: ['Shadow Rise', 'Shadow Prime', 'Shadow Forever']
  },
  trainer: {
    type: String,
    default: 'Oves Shaikh'
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    minlength: 10
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'resolved'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);