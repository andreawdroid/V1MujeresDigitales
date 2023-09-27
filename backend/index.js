import express from 'express';
import cors from 'cors'
import db from './config/db.js'
import usuarioRoutes from './routes/usuariosRoutes.js';
import serviciosRoutes from './routes/serviciosRoutes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import municipioRouter from './routes/municipiosRoutes.js';
import manzanasRoutes from './routes/manzanasRoutes.js'

const app = express();

app.use(cors())
app.use(express.json())

app.use('/usuario', usuarioRoutes)
app.use('/servicios', serviciosRoutes)
app.use('/categoria', categoriaRoutes)
app.use('/municipio', municipioRouter)
app.use('/manzanas', manzanasRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa a la DB')
} catch (error) {
    console.log(`El error de conexión es: ${error}`)
}

app.listen(4000, ()=>{
    console.log('Server UP running in http://localhost:4000/')
})
