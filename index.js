const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')
//tipo de engine de view que será usado para interface, no caso será o ejs
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())
//process.env.PORT busca porta de servidor ou serviço
const port = process.env.PORT || 3000

/* pode ser assim...
const resolver = (request, response) => {
    response.send('Olá FullStack Lab')
}
app.get('/', resolver)

ou assim ...
*/
/*
let i = 10
app.get('/', (request, response) => {
    i++
  /*  response.send(`<h1>Olá FullStack Lab ${i}</h1>`)*/
  /*  response.render('index' , { i: i })
})*/


app.get('/', async (request, response) => {
    response.render('index' )
})

app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)

app.listen(port, (err) => {
    if(err){    
        console.log('error')
    }else{
        console.log ('Como-Fazer Server is running on port:', port)
    }
})