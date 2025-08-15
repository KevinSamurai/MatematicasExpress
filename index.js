const express = require('express')
const app = express()
const PORT = 3000

const num1 = 58
const num2 = 12


app.get('/', (req, res) => {
  res.send('¡Hola, mundo! Bienvenido a la API de operaciones matemáticas.')
})

app.get('/suma', (req, res) => {
  const suma = num1 + num2

  res.send({
    "suma": suma,
    })
})

app.get('/resta', (req, res) => {
  const resta = num1 - num2

  res.send({
    "resta": resta,
    })
})

app.get('/multiplicacion', (req, res) => {
  const multi = num1 * num2

  res.send({
    "multiplicación": multi,
    })
})

app.get('/division', (req, res) => {
  const divi = num1 / num2

  res.send({
    "division": divi,
    })
})



app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
