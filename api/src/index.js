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

console.log('hi out route');
app.get('/test', (req, res) => {
  console.log('hi in route');
  return res.sendStatus(200);
})

app.listen(process.env.PORT);
console.log(`SERVER STARTED ON PORT ${process.env.PORT}`);
