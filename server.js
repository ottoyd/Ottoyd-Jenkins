const app = require('./app')
const port = 4000

const server = app.listen(console.log('Tis on port', port))

module.exports = server 