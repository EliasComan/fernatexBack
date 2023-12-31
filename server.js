import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from "body-parser";
import {createTransport} from 'nodemailer'


dotenv.config()
const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/', (req,res) => {
    res.send('HELLO WORDL')
})

app.post('/', async (req, res) =>  {
    const nodemailer={
        user: 'comanelias5@gmail.com',
        pass: 'puviydbskzmdxebo'
}
const transporter = createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: nodemailer.user,
        pass: nodemailer.pass 
    }
})
    const{ nombre, telefono, email, coment } = req.body
    console.log(nombre, telefono,email,coment) 
    await transporter.sendMail({
        from: "FERNATEX APP <NORESPONDER@FERNATEX.com>",
        to: `fernatexsrl@gmail.com`,
        subject: "ENVIO NUEVA CONSULTA DESDE PAGINA WEB",
        text: `MENSAJE DE PRUEBA
        NOMBRE: ${nombre},
        TELEFONO : ${telefono}
        EMAIL: ${email}
        COMENTARIO: ${coment}
        `,
        html: `
       
        <h1>Buenas, envio una consulta desde la web<h1>
        <p>
        NOMBRE: ${nombre}, <br>
        TELEFONO : ${telefono}<br>
        EMAIL: ${email}<br>
        COMENT: ${coment}<br>
        <br>
        <br>
        <br>
        <br>
        <strong> Enviado desde la web, no responder <strong>
        </p>
        `,
      });
    res.send('Done')
})





const server = app.listen( process.env.PORT || 8080, () =>{

console.log('Server Up')
})

server.on('error', (error)=>console.log('Error', error))