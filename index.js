import 'dotenv/config'
import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import Server from './server'

const port = parseInt(process.env.PORT, 10) || 80
export const dev = process.env.NODE_ENV !== 'production'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

export const server = new Server(app)
const init = async () => {
    await server.init()
}
init()

if (!dev) {
    console.log('client path: ', path.resolve('path', path.resolve(__dirname, 'client/build')))
    // Serve any static files
    app.use(express.static(path.resolve(__dirname, 'client/build')))

    // Handle React routing, return all requests to React app
    app.get('*', function (req, res) {
        res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'))
    })
}

app.listen(port, async (err) => {
    if(err) throw err
    console.log(`> Ready on http://localhost:${port}`)
})