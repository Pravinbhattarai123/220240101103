import express from 'express'
import Urlrouter from './routes/url.router.js';
import connectMongoDB from "./connectMongoDb.js"
import cors from 'cors'
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())



app.use('/',Urlrouter)


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  connectMongoDB()
});