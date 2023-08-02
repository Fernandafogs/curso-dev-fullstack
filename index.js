const express = require ('express')
const path = require ('path')
const fs = require ('fs')

const app = express()

//definindo o template engine
app.set ('view engine', 'ejs')//o set é utilizado para configurar. Nesse caso o projeto está sendo configurado para utilizar o ejs.


/* 
Com a utilização do template engine, não é necessário definir os arquivos estáticos.
//DEFININDO OS ARQUIVOS ESTÁTICOS
app.use (express.static(path.join(__dirname, 'views')))
*/


//DEFININDO OS ARQUIVOS PÚBLICOS (imagens, css, js)
app.use(express.static(path.join(__dirname, 'public')))

//habilita server para receber dados via post (formulário)
app.use (express.urlencoded ({extended: true}))



//ROTAS
app.get ('/', (req, res) =>{
    res.render ('index', {
        title: 'Digital Tech - Home'
    }) 
})

app.get ('/quemsomos', (req, res) =>{
    res.render ('quemsomos', {
        title: 'Digital Tech - Quem somos'
    }) 
})

app.get ('/produtos', (req, res) =>{
    res.render ('produtos', {
        title: 'Digital Tech - Produtos'
    }) 
})

app.get ('/servicos', (req, res) =>{
    res.render ('servicos', {
        title: 'Digital Tech - Serviços'
    }) 
})

app.get ('/posts', (req, res) =>{
    res.render ('posts', {
        title: 'Digital Tech - Posts',
        posts: [
            {
                title: 'Novidade  no mundo da tecnologia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et sequi veritatis provident excepturi id dignissimos consequuntur odit rem. Voluptatibus libero ratione inventore autem expedita sapiente unde id necessitatibus ullam eos?',
                stars: 3,
            },
            {
                title:'Criando um servidor com node.js',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et sequi veritatis provident excepturi id dignissimos consequuntur odit rem. Voluptatibus libero ratione inventore autem expedita sapiente unde id necessitatibus ullam eos?',
            },
            {
                title: 'Javascript é a linguagem mais usada do mundo!',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et sequi veritatis provident excepturi id dignissimos consequuntur odit rem. Voluptatibus libero ratione inventore autem expedita sapiente unde id necessitatibus ullam eos?',
                stars: 5,
            },

        ]
    })
})

//criar uma rota para cadastrar os posts
app.get ('/cadastro-post', (req, res) =>{
    const {c} = req.query

    res.render ('cadastro-post', {
        title: 'Digital Tech - Cadastrar Post',
        cadastrado: c,
    }) 
})

//criar uma rota para receber os posts
app.post ('/salvar-post', (req, res) =>{
    const {titulo, texto} = req.body

    const data = fs.readFileSync ('./store/posts.json')
    const posts = JSON.parse (data)

    posts.push ({
        titulo,
        texto,
    })

    const postsString = JSON.stringify (posts)
    fs.writeFileSync ('./store/posts.json', postsString)

    res.redirect ('/cadastro-post?c=1')
}) 

app.get ('/contato', (req, res) =>{
    res.render ('contato', {
        title: 'Digital Tech - Contato'
    })
})

//404 error (not found)
app.use ((req, res)=>{ //middleware - é algo que é executado antes de uma requisição
    res.send ('Página não encontrada!')
})


//EXECUTANDO O SERVIDOR
const port = process.env.PORT || 8080 
app.listen (port,()=> console.log(`Server is listening on pont ${port}`))