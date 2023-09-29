const express = require('express')
const taskController = require('../Controllers/taskController')


const router = new express.Router()

router.post('/add_task', taskController.addtask)
router.get('/get_all_task', taskController.getAllTasks)
router.delete('/delete_task/:id', taskController.deleteTask)




module.exports = router