//import do Express
const express = require("express");

const app = express()
const port = 3000

app.use(express.json());

//import do Mongoose
const mongoose = require("mongoose");
const calcado = require("./models/calcado");

//import do Model
const Calcado = require('./models/calcado')

//conexão com o Mongoose
mongoose.connect("mongodb://localhost:27017/calcados",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// [GET] / - Home
app.get("/", (req, res) => {
    res.send("Hello, Bluemer!");
});

// [GET] /calcados - Retorna a lista de calçados
app.get("/calcados", async (req, res) => {
    const calcados = await Calcado.find();
    res.send(calcados);
});

// [GET] /calcados/{id} - Retorna apenas um único filme pelo ID 
app.get("/calcados/:id", async (req, res) => {
try {
    const calcado = await Calcado.findById(req.params.id);
    if (calcado == null) {
    return res
        .status(404)
        .send({ message: "Não é possível encontrar o calçado." });
    }
    res.send(calcado);
} catch (err) {
    return res.status(500).send({ message: err.message });
}
});

// [POST] - /calcados - Cria um novo calçado (OK)

app.post("/calcados", async (req, res) => {
    const calcado = new Calcado({
        nome: req.body.nome,
        imagemUrl: req.body.imagemUrl,
    });

    // Validação

    if (!calcado || !calcado.nome || !calcado.imagemUrl) {
        res.status(400).send({
        message:
            'Calçado inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".',
        });

        return;
    }

    const calcadoSalvo = await calcado.save();

    res.send(calcadoSalvo);
});

// [PUT] - /calcados/{id} - Atualiza um calcado pelo ID

app.put("/calcados/:id", async (req, res) => {
    try {
        const calcado = await Calcado.findOneAndUpdate(req.params.id);

        if (calcado == null) {
            return res.status(404).send({ message: "Calçado não encontrado" });
        }
        if (req.body.nome != null) {
            calcado.nome = req.body.nome;
        }
        if (req.body.imagemUrl != null) {
            calcado.imagemUrl = req.body.imagemUrl;
        }
        const updatedCalcado = await calcado.save();
        res.send(updatedCalcado);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});

// [Delete] - /filmes{id} - Remover um filme pelo ID
app.delete("/calcados/:id", async (req, res) => {
    try {
        const calcado = await Calcado.findById(req.params.id);
        if (calcado == null) {
        return res.status(404).send({ message: "Calçado não encontrado" });
        }
        await calcado.remove();
        res.send({ message: "Calçado deletado com sucesso!" });
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
});


app.listen(port,()=>{
    console.info(`App rodando em: http://localhost:${port}`)
})