const TodoModel = require("../models/todo.model");


exports.fetchTodo = async(req,res)=>{
    try {
        let query = req.query;
        const data = await TodoModel.find(query);
        res.send(data);
    } catch (error) {
        res.send("Something went wrong!");
    }
};

exports.addTodo = async (req, res) => {
    const data = req.body;
    try {
        let new_data = new TodoModel(data);
        await new_data.save()
        res.send("Todo has been added!");
    } catch (error) {
        res.send("Something went wrong!");
    }
}

exports.deleteTodo = async (req, res) => {
    const ID = req.params.id;
    try {
      await TodoModel.findByIdAndDelete(ID);
      res.send(`Data has been deleted with id:${ID}`);
    } catch (error) {
      res.send('Something went wrong!')
    }
  };
  
  exports.updateTodo = async (req, res) => {
    const ID = req.params.id;
    const payload = req.body;
    try {
      await TodoModel.findByIdAndUpdate(ID, payload);
      res.send(`Todo data updated with id:${ID}`);
    } catch (error) {
      res.send('Something went wrong!')
    }
  };
