const express = require('express')
const router = express.Router()

const Todo = require('../../models/todo')


router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('detail', { todo: todo.toJSON() }))
    //toJSON()將資料轉換成 plain object
    .catch(error => console.log(error))
})




module.exports = router