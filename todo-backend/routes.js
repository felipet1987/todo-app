

const User = require('./src/User.model');
const Task = require('./src/Task.model');
const { default: TaskList } = require('../todo-frontend/src/Component/taskList');
const { findByIdAndUpdate } = require('./src/Task.model');



const helloAction = async (req,res) => {
    res.send("Hello World")
}

// const createUserAction = async (req,res) => {
//     const user = new User({ username: 'userTest' });
//     await user.save().then(() => console.log('User created'));
//     res.send('User created \n');
// }

// const allUserAction = async (req,res) => {
//     const users = await User.find();
//     res.json(users);
// }

const createTaskAction = async (req,res) => {
    const task = new Task({ 
        name: req.body.name,
        description:req.body.description,
        resolved : 'no'
    });
    await task.save().then(() => console.log('Task created'));

    res.send('Task created \n');
}


const resolveTaskAction = async (req,res) => {
    Task,findByIdAndUpdate(req.body.id,{ resolved: "si" }).then(() => console.log('Task resolved'))
    res.send('Task resolved \n');
}


const allTaskAction = async (req,res) => {
    const tasks = await Task.find();
    res.json(tasks);
}

const AppRoutes = [
    {
        path: "/",
        method: "get",
        action: helloAction
    },
    // {
    //     path: "/user/all",
    //     method: "get",
    //     action: allUserAction
    // },
    // {
    //     path: "/user/save",
    //     method: "post",
    //     action: createUserAction
    // },
    {
        path: "/task/save",
        method: "post",
        action: createTaskAction
    },
    {
        path: "/task/all",
        method: "get",
        action: allTaskAction
    }, 
    {
        path: "/task/resolve",
        method: "post",
        action: resolveTaskAction
    },           

];

module.exports = AppRoutes;