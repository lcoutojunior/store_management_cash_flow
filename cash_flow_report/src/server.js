import express from 'express'
import * as dotenv from 'dotenv' 
dotenv.config()

const port = process.env.PORT || 3002
const app = express();
const router = express.Router();

app.get('/', function(req,res){
    res.send('Hello World Service 2');
    });

app.listen(port, () => {
    console.log(`WebService listening on port ${port}`)
  })