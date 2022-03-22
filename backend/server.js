import express from 'express'
//import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import { getAllEvent, getEventById } from './controller/eventController.js'
const app = express()
const port = process.env.PORT || 5000

//middlewares
//app.use(express.json())
//app.use(cors)


app.get('/', (req, res) => {
    res.send('Perfecting my APIs Skills')
})

app.get('/api/events', getAllEvent)
app.get('/api/events/:id', getEventById)


app.listen(port, () => console.log(`Server is listening on port ${port}`))