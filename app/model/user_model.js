import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
  	type: String
  }
});

export default mongoose.model('User', userSchema);
