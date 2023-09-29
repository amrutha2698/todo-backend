const mongoose = require('mongoose')
const validator = require('validator')
const taskSchema = mongoose.Schema({
    task:{
        type: String,
        required: true
    }
})

const tasks = new mongoose.model("tasks", taskSchema)

module.exports = tasks