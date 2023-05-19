import express from 'express'
import * as dotenv from 'dotenv' 
dotenv.config()

const port = process.env.PORT || 3001
const app = express();
const router = express.Router();

app.get('/', function(req,res){
    res.send('Hello World Service 1');
    });

app.listen(port, () => {
    console.log(`WebService listening on port ${port}`)
  })