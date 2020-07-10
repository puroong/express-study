// express.static(root, [options])

const express = require('express')
const app = express()
const port = 3000

// set static as root directory for static assets
app.use(express.static('static'))

// use multiple static asset directories
// express looks up the files in order the static directores with express.static middleware was set
app.use(express.static('public'))
app.use(express.static('files'))

// create virtual prefix
// app.use('/public', express.static('static'))

// can set absolute directories
app.use('/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log(`running on http://localhost:${port}`))
