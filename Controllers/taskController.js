const tasks = require('../Models/taskSchema')

// Register
exports.addtask = async (req, res) => {
    console.log("Register request received");

    // const file = req.file.filename
    const { toDo } = req.body
console.log(toDo);

const newTask = new tasks({task:toDo})
await newTask.save()
res.status(200).json(newTask)
   
}


// Get all Employees
exports.getAllTasks = async (req, res) => {

    try {
        const allTasks = await tasks.find()
        // console.log(allTasks);
        res.status(200).json(allTasks)
    } catch (error) {
        res.status(401).json(error)
    }
}

// Delete user
exports.deleteTask = async (req, res) => {
    // get id from params
    const { id } = req.params
    console.log(id)

    try {
        const removedItem = await tasks.findByIdAndDelete({ _id: id })
        console.log(removedItem);
        res.status(200).json(removedItem)
    } catch (error) {
        res.status(401).json(error)
    }
}







// View user
exports.viewuser = async (req, res) => {
    const { id } = req.params
    try {
        const employee = await users.findOne({ _id: id })
        if (employee) {
            res.status(200).json(employee)
        } else {
            res.status(404).json("Employee not found")
        }

    } catch (error) {
        res.status(401).json(error)
    }
}

// Update User
exports.edit = async (req, res) => {
    console.log("Inside Edit function");
    const { id } = req.params
    const { fname, lname, email, mobile, gender, status, location, user_profile } = req.body
    console.log(req.file);
    const file = req.file ? req.file.filename : user_profile

    // if (!fname || !lname || !email || !mobile || !gender || !status || !location || !file) {
    //     res.status(403).json("All inputs are required")
    // }

    try {
        const updateUser = await users.findByIdAndUpdate({ _id: id },
            {
                fname, lname, email, mobile, gender, status, profile: file, location
            }, {
            new: true
        }
        )
        await updateUser.save()
        res.status(200).json(updateUser)

    } catch (error) {
        res.status(401).json(error)
    }
}