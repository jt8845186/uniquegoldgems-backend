import express from "express";
import cors from "cors";
import data from "./data";
// import mongoose from "mongoose";
import config from "./config";
// import userRouter from "./routers/userRouter";

// mongoose.connect(config.MONGODB_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     console.log('Connected to mongodb');
// })
// .catch((err) => {
//     console.log(err);
// });

const app = express();
app.use(cors());
// app.use('/api/users', userRouter);
app.get('/api/products', (req, res) => {
    res.send(data.products);
});
app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    }else {
        res.status(404).send({ message: 'Product Not Found!' });
    }
});



const PORT = config.PORT;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}!!!!!!!!!`);
});