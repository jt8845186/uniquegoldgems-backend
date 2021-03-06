import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, index:true, unique: true},
    password: { type: String, required: true },
    isAdmin: {type: Boolean, required: true, default: false },
});
const theUser = mongoose.model('theUser', userSchema);

export default theUser;