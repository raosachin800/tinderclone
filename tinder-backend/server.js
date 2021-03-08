import express from 'express';
import mongoose from 'mongoose';
import cards from './dbcards.js';
import Cors from 'cors';

//App Config
const app = express();
const port = process.env.PORT || 8001;

const connection_url = 'mongodb+srv://admin:Scorpioking22@cluster0.17muh.mongodb.net/tinderdbb?retryWrites=true&w=majority';

//Middlewares
app.use(express.json()); //bracket important
app.use(Cors());

//DB Config
mongoose.connect(connection_url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
    

//API Endpoints
app.get('/',(req,res)=>
    res.status(200)
    .send('Hello CP'));

app.post('/tinder/cards',(req,res)=>{
    const dbCard = req.body;
    console.log(dbCard);
    cards.create(dbCard,(err,data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
});

app.get('/tinder/cards',(req,res)=>{
    cards.find((err,data)=>{
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    });
});

//Listener
app.listen(port,()=>{
    console.log(`Listening on Localhost: ${port}`);
});