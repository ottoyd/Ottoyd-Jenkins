const app = require('./app')
const port = 4000

const server = app.listen(port, ()=> {
  console.log('Tis on port',port);
})

module.exports = server 