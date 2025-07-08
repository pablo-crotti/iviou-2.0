import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(port, () => {
    console.log(`🚀 App running at http://localhost:${port}`)
})
