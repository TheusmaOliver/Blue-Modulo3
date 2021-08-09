const express = require("express");
const mongoose = require("mongoose");
const shoesRouter = require("./routes/shoesRoutes");
const port = 3000;

const app = express();

app.use(express.json());

mongoose.connect(
    "mongodb+srv://Major:asfads007@cluster0.d4561.mongodb.net/test",
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
)

app.use(shoesRouter);

app.listen(port, ()=>{
    console.info(`Servidor rodando na porta: ${port}`)
})