const server = require('./api/server.js')

server.listen(9000, () => {
    console.log('server running on localhost 9000')
})