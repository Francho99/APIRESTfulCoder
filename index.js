//Requires
const express = require('express')
const fs = require('fs')
const { runInNewContext } = require('vm')

//express config
const router = express.Router()
const app = express()
const PORT = 8080
app.use(express.json())
app.use('/api/productos', router)
app.use(express.static('public'))
router.use(express.urlencoded({extended: true}))


const server = app.listen(PORT, () => {
    console.log(`El server esta escuchando en el puerto ${server.address().port}`)
})

//Array productos

let productos = [   
{ "nombre": "Perro", "precio": 70, "id": 1}, { "nombre": "Gato", "precio": 10, "id": 2}
]

//GET POST & PUT
router.get('/', (req, res) => {
    res.json(productos);
})

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let producto = productos.find(producto => producto.id == id);
    res.json(producto); 
})

router.post('/', (req, res) => {
    let producto = req.body;
    producto.id = productos.length + 1
    productos.push(producto)
    res.json(producto)  
})

router.put('/:id', (req, res) => {
    let id = req.params.id;
    let productoid = productos.find(producto => producto.id == id)
    let index = productos.indexOf(productoid)
    let producto = req.body
    producto.id = id
    productos[index] = producto
    res.json(producto)
    
})

router.delete('/:id', (req, res) => {
    let id = req.params.id
    let producto = productos.find(producto => producto.id == id)
    let index = productos.indexOf(producto)
    productos.splice(index, index + 1)
    res.json(producto)
})

