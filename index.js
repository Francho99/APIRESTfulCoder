//Requires
const express = require('express')
const fs = require('fs')

//express config
const router = express.Router()
const app = express()
const PORT = 8080
app.use(express.json())
app.use('/api/productos', router)

const server = app.listen(PORT, () => {
    console.log(`El server esta escuchando en el puerto ${server.address().port}`)
})

//Array productos

let productos = [   
{ "nombre": "Perro", "precio": 70, "id": 1,}, { "nombre": "Gato", "precio": 10, "id": 2,}
]

//GET POST & PUT
router.get('/', (req, res) => {
    res.json(productos);
})

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let producto = producto.find(producto => producto.id == id);
    res.json(productos); 
})

router.post('/', (req, res) => {
    let producto = req.body;
    producto.id = productos.length + 1
    productos.push(producto)
    res.json(producto)


})