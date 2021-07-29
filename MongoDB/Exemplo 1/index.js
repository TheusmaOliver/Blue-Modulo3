const express = require('express');

//Import do Mongoose

const mongoose = require('mongoose');

//Import do Model

const calcadoModel = require('./models/calcado')

mongoose.connect("mongodb://localhost:27017/calcados",{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const Calcado = mongoose.model('Calçado',calcadoModel)

// [Adicionando calcados]

const calcado = new Calcado({
    nome: 'Nike Air',
    imagemUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxayHrBWfs69wIuHoqqLE6_9yV16csaqecx5EnLAXWoT7NmYXK6Z2XBI6NeANEjGb-dbiWIn31&usqp=CAc'
})


calcado 
    .save()
    .then(() =>{
        console.log('Calçado adicionado!');
    })
    .catch((err)=>{
        console.log(err);
    })

// Calcado.find({})
//     .then((calcados) => {
//         console.log(calcados)
//     })
//     .catch((err) =>{
//         console.log(err)
//     })

// Calcado.find({ _id: "60ff182e838e3250bec6307b" })
// .then((calcados) => {
//     console.log(calcados);
// })
// .catch((err) => {
//     console.log(err);
// });

// Calcado.findByIdAndUpdate("60ff182e838e3250bec6307b", {
//     nome: "Nike Air Max",
//     imagemUrl: "https://www.claquete.com.br/fotos/filmes/poster/7681_medio.jpg",
//   })
//     .then(() => {
//       console.log("Calçado Atualizado com Sucesso!");
//     })
//     .catch((err) => {
//       console.log(err);
//     });

// Calcado.findByIdAndDelete("60ff182e838e3250bec6307b")
//   .then(() => {
//     console.log("Calçado Removido!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const app = express();
const port = 3000;



//Get [Home]

app.get("/", (req,res) =>{
    res.send('Home')
})

app.listen(port,()=>{
    console.info(`App rodando em: http://localhost:${port}`);
});