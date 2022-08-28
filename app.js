const express = require('express')
const app = express()

app.get('/',(_req, res) => res.send('Helllo World!'))
app.listen(3000, () => console.log('Server ready'))

 
