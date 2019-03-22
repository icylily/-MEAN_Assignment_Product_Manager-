const taskControllers = require('./controllers');
const path = require('path');
module.exports = app => {

    app
        .get('/api/tasks', taskControllers.getAllTasks)
        .get('/api/tasks/:id', taskControllers.getOneTask)
        .post('/api/tasks', taskControllers.createTask)
        .put('/api/tasks/:id', taskControllers.updateTask)
        .delete('/api/tasks/:id', taskControllers.deleteTask)
        .all("*", (req, res, next) => {
            res.sendFile(path.resolve("./public/dist/public/index.html"))
        });

}