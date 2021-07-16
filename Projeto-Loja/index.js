const express = require("express");
const app = express();
const port = 3000

app.use(express.json());

const loja = [
    {
        id:1,
        nome:"Nike Air",
        imagemUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxayHrBWfs69wIuHoqqLE6_9yV16csaqecx5EnLAXWoT7NmYXK6Z2XBI6NeANEjGb-dbiWIn31&usqp=CAc"
    },
    {
        id:2,
        nome:"Nike Air Max",
        imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg4yMt1h_qRatbFR270lQ7VDszkRY9lVxHMQ&usqp=CAU"
    },
    {
        id:3,
        nome:"Nike Anti-Clog",
        imagemUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXAerwmcWqEAUPNP7Gja0UioRQDPVHlqIFQ&usqp=CAU"
    },
    {
        id:4,
        nome:"Nike Flyease",
        imagemUrl:"https://images.lojanike.com.br/500x500/produto/tenis-nike-air-zoom-tempo-next-flyease-masculino-CV1889-102-1.jpg"
    },
    {
        id:5,
        nome:"Nike Flyknit",
        imagemUrl:"https://images.lojanike.com.br/500x500/produto/tenis-nike-air-vapormax-2020-flyknit-feminino-CT1933-002-1.jpg"
    }
    
];

const getCalcadosValidos = () => loja.filter(Boolean);
const getCalcadobyId = id => getCalcadosValidos().find(calcado=>calcado.id===id);
const getCalcadoIndexbyId = id => getCalcadosValidos().findIndex(calcado=>calcado.id===id);

//[GET] - Home

app.get('/', (req,res) =>{
    res.send('Hello, Bluemer');
});


// [GET] - /Todos - Retorna a lista de tenis

app.get('/todos', (req,res)=>{
    res.send(getCalcadosValidos());
});

// [GET] - /Todos/{id} - Retorna um único tenis

app.get('/todos/:id', (req,res) =>{
    const id = +req.params.id;
    const calcado = getCalcadobyId(id);
    
    if(!calcado){
        res.send("Calçado não encontrado.");
        
    }
    res.send(calcado);

});



// Parte 2 do projeto

// [POST] - /Todos - Cria um novo calçado

app.post('/todos', (req,res)=>{
    const calcado = req.body;

    if(!calcado || !calcado.nome || !calcado.imagemUrl){
        res.status(400).send({
            message:'Calçado inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".'
            
        });
        return;
    }
    calcado.id = loja.length + 1;
    loja.push(calcado);
    res.send(calcado);

});

// [PUT] - /Todos/{id} - Atualiza um calçado pelo id

app.put("/todos/:id", (req,res)=>{
    const id = +req.params.id;
    const calcadoIndex = getCalcadoIndexbyId(id);

    // Validação
    if (calcadoIndex < 0 ){
        res.status(404).send({
            message:"O calçado que você esta tentando editar não existe!"
        });
        return;
    }
    const novoCalcado = req.body;
    if(!Object.keys(novoCalcado).length){
        res.status(400).send({
            message:"O body da requisição não pode estar vazio."
        });

        return;
    }
    // if(!novoCalcado || !novoCalcado.nome || !novoCalcado.imagemUrl){
    //     res.status(400).send({
    //         message:'Calçado inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".'
            
    //     });
    //     return;
    // }

    const calcado = getCalcadobyId(id);

    loja[calcadoIndex]={
        ...calcado,
        ...novoCalcado,
    };

    res.send(loja[calcadoIndex]);
});


// [DELETE] - /todos/{id} - Remove um tenis pelo ID.

app.delete("/todos/:id", (req,res)=>{
    const id = +req.params.id;
    const calcadoIndex = getCalcadoIndexbyId(id);

    //Validação

    if (calcadoIndex < 0 ){
        res.status(404).send({
            message:"O calçado que você esta tentando excluir não existe!"
        });
        return;
    }

    delete loja[calcadoIndex];

    res.send(`Calçado com id ${id} removido com sucesso!`)
});


app.listen(port,()=>{
    console.info(`App rodando em: http://localhost:${port}`);
});