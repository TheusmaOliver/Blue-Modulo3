const express = require("express");
const app = express();
const port = 3000

const loja = [
    "Nike Air",
    "Nike Air Max",
    "Nike Anti-Clog",
    "Nike Flyease",
    "Nike Flyknit",
    "Nike Flywire",
    "Nike Free",
    "Nike Joyride"
];

//[GET] - Home

app.get('/', (req,res) =>{
    res.send('Hello, Bluemer');
});


// [GET] - /Todos - Retorna a lista de tenis

app.get('/todos', (req,res)=>{
    res.send(loja)
});

app.listen(port,()=>{
    console.info(`App rodando em: http://localhost:${port}`)
});