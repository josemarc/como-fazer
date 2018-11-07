const api = require('../api')

const novaForm = (req, res) => {
    res.render('categorias/nova')

  /*  (req, res) => {
        res.render('categorias/nova')*/
       /* const content = await axios.get('https://como-fazer-devpleno2.firebaseio.com/teste.json' )
        console.log(content.data)
        response.render('index' , { i: content.data })*/
}

const nova = async(req, res) => {
    // console.log(req.body)
    // res.send(req.body)
   // await axios.post('https://como-fazer-devpleno2.firebaseio.com/categorias.json',  {
   //    categoria: req.body.categorias
   //  } )
     await api.create('categorias', {
         categoria: req.body.categoria
     } )
     res.redirect('/categorias')
 }

 const list = async(req, res) => {
    const categorias = await api.list('categorias')
    res.render('categorias/index', { categorias})
}

const excluir = async(req, res) => {
    await api.apagar('categorias', req.params.id)
    await api.apagar('publicacoes', req.params.id)
    res.redirect('/categorias')
}


const editarForm = async(req, res) => {
    const categoria = await api.get('categorias', req.params.id)
    //console.log(categoria)
    res.render('categorias/editar', { 
          categoria
    })
}

const editar = async(req, res) => {
    await api.update('categorias', req.params.id, {
        categoria: req.body.categoria
    })
    res.redirect('/categorias')
 }

module.exports = {
    novaForm, nova, list, excluir, editarForm, editar
}
