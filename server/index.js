const express = require("express")

const app = express()

app.set('secret','sadasd3425')

app.use(require('cors')())
app.use(express.json())  // 中间件

app.use('/admin', express.static(__dirname + '/admin'))
app.use('/',express.static(__dirname + '/web'))
app.use('/uploads',express.static(__dirname+'/uploads'))  //静态文件托管

require('./routes/admin')(app)
require('./plugins/db')(app)
require('./routes/web')(app)

app.listen(3000, () => {
    console.log("http://localhost:3000")
})