import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.json({ mensagem: 'API de Estacionamento Rodando perfeitamente!' })
})

app.listen(3000, () => {
    console.log('🚀 Server is running on http://localhost:3000')
})