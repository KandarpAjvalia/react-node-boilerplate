import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

const app = express()
app.use(bodyParser.json())

app.use(cookieParser(process.env.COOKIE_PARSER_SECRET))

const port = process.env.AUTH_SERVER_PORT || 4000

app.get('/', (req, res) => {
	return res.send('Hi')
})

app.listen(port, () => {
	return console.log(`server is listening on ${port}`)
})
