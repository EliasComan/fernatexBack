import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from "body-parser";


dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send('HELLO WORDL')
})

app.post('/', (req, res) => {
    console.log(req.body) 
    res.send('Done')
})





const server = app.listen( process.env.PORT || 8080, () =>{

console.log('Server Up')
})

server.on('error', (error)=>console.log('Error', error))