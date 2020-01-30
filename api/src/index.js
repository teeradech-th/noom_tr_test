import 'dotenv/config';
import express from 'express';
import router from './routes';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();
app.use(cors);
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router);

app.listen(process.env.PORT);
