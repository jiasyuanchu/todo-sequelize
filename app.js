const express = require('express')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const session = require('express-session')
const usePassport = require('./config/passport') //載入一包 Passport 設定檔
const passport = require('passport') //把 Passport 套件本身載入

const routes = require('./routes')// 引用路由器

const app = express()
const PORT = 3000

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

usePassport(app) //把 app 傳給 Passport

app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(routes)// 將 request 導入路由器

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})