const Product = require('./models');

module.exports = {

    getAllTasks: (req, res) => {
        Product.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
        // .then(data => console.log(data) || res.json(data))
        // .catch(err => console.log(err) || res.json(err));
    },

    getOneTask: (req, res) => {
        const ID = req.params.id;
        Product.findOne({ _id: ID })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },


    createTask: (req, res) => {
        const DATA = req.body;
        Product.create(DATA)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    updateTask: (req, res) => {
        const DATA = req.body;
        const ID = req.params.id;
        Product.findOneAndUpdate({ _id: ID }, DATA, { runValidators: true, new: true })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },

    deleteTask: (req, res) => {
        const ID = req.params.id;
        Product.findOneAndDelete({ _id: ID })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}