// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const todos = require('./modules/todos')
const users = require('./modules/users')
// const auth = require('./modules/auth')   // 引用模組

// const { authenticator } = require('../middleware/auth')  // 掛載 middleware

const { authenticator } = require('../middleware/auth')

router.use('/todos', authenticator, todos)
router.use('/users', users)
// router.use('/auth', auth)  // 掛載模組
router.use('/', authenticator, home) 

// 匯出路由器
module.exports = router