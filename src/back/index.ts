import express from 'express'
import cors from 'cors'
import { resolve } from 'path'
import { startWSServer } from './api/v1/v1'

const app = express()
const port = 8080

app.use(cors())
app.use(express.static('public'))

app.get('*', (req, res) => {
	res.send(resolve('public', 'index.html'))
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
startWSServer()
