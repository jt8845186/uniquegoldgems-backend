import express, { Router } from 'express';
import serverless from 'serverless-http';
import cors from "cors";
import data from '../data'

const app = express();

app.use(cors());

const router = Router();

router.get('/', (req, res) => {
    res.send(data.products);
});

router.get('/product/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id);
    if (product) {
        res.send(product);
    }else {
        res.status(404).send({ message: 'Product Not Found!' });
    }
});

app.use('/.netlify/functions/api', router);


export const handler = serverless(app);  