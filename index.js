import express from "express"; 
import bodyParser from "body-parser";

const app = express(); 
const port = 3000; 

app.use(bodyParser.urlencoded({ extended: true })); 

var tasks = [];

app.get("/", (req, res) =>{
  res.render("../views/index.ejs", {tasks: tasks});
});

app.post("/add", (req, res) => {
  var newTask = req.body.task; 
  tasks.push(newTask);
  res.redirect("/");
})

app.post('/edit', (req, res) => {
  const index = req.body.index;
  const editedTask = req.body.editedTask;
  tasks[index] = editedTask;
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const index = req.body.index;
  tasks.splice(index, 1);
  res.redirect('/');
});

app.listen(port, () =>{
  console.log(`Server running on port ${port}`);
});