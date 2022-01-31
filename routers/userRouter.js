import express from 'express';
import theUser from '../models/userModel';

const userRouter = express.Router();

userRouter.get("/createadmin", async (req, res) =>{
    try {
        const user = new theUser({
            name: "admin",
            email: "admin@example.com",
            password: "shoppa",
            isAdmin: true,
        })
        const createdUser = await user.save();
        res.send(createdUser);
    }catch(err){
        throw error;
    }
});

export default userRouter;