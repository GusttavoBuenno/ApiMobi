import express from "express";

const app = express();

app.use(express.json())

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "Harry Potter"}
]

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node');           // GET = busca/pesquisa

})

app.get('/livros', (req, res)=> {                          // GET = busca/pesquisa
    res.status(200).json(livros)
})


app.post('/livros', (req, res) => {                 //Adicionando Livros
    livros.push(req.body);
    res.status(201).send('Livro foi cadastrado com sucesso')
})


app.put('/livros/:id', (req, res)=> {

})


function buscaLivro(id){
    return
}

export default app