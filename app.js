const {urlencoded} = require('express')
const express = require('express')
const router = require('./routers')
const app = express()
const port = 9999

app.use(urlencoded({extended: true}))
app.set('view engine', 'ejs')

app.use(router)

app.listen(port, () => {
    console.log(`Bismillah ${port}`);
})
