import express from 'express';
import { IGrade, IPeople, ITask } from './Types/General';
import morgan from 'morgan';
// import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(morgan('dev'));
app.use(express.json());

let people: IPeople[] = [];
let grades: IGrade[] = [];
let tasks: ITask[] = [];

// Names -------------------------
app.get('/name', (req, res) => {
  return res.json(people);
});

app.post('/name', (req, res) => {
  let newName = req.body as IPeople;
  people.push(newName);
  return res.json({
    message: 'Name added :)'
  });
});

app.put('/name/:id', (req, res) => {
  let updated = req.body as IPeople;
  let pID = req.params.id;
  let newArr = people.filter((item) => {
    return item.id !== pID; 
  });
  people = newArr;
  people.push(updated);
  return res.json({
    message: 'Name updated :)',
  });
});

app.delete('/name/:id', (req, res) => {
  const pID = req.params.id;
  let newArr = people.filter((item)=>{
    return item.id !== pID;
  });
  people = newArr;
  return res.json({
    message: 'Name deleted :)'
  })
});

// Grades -------------------------
app.get('/grade', (req, res) => {
  return res.json(grades);
});

app.post('/grade', (req, res) => {
  let newGrade = req.body as IGrade;
  grades.push(newGrade);
  return res.json({
    message: 'Grade added :)'
  });
});

app.put('/grade/:id', (req, res) => {
  let updated = req.body as IGrade;
  let gID = req.params.id;
  let newArr = grades.filter((item) => {
    return item.id !== gID; 
  });
  grades = newArr;
  grades.push(updated);
  return res.json({
    message: 'Grade updated :)',
  });
});

app.delete('/grade/:id', (req, res) => {
  const gID = req.params.id;
  let newArr = grades.filter((item)=>{
    return item.id !== gID;
  });
  grades = newArr;
  return res.json({
    message: 'Grade deleted :)'
  })
});

// Task Tracker -------------------------
app.get('/task', (req, res) => {
  return res.json(tasks);
});

app.post('/task', (req, res) => {
  let newTask = req.body as ITask;
  tasks.push(newTask);
  return res.json({
    message: 'Task added :)'
  });
});

app.put('/task/:id', (req, res) => {
  let updated = req.body as ITask;
  let tID = req.params.id;
  let newArr = tasks.filter((item) => {
    return item.id !== tID; 
  });
  tasks = newArr;
  tasks.push(updated);
  return res.json({
    message: 'Task updated :)',
  });
});

app.delete('/task/:id', (req, res) => {
  const tID = req.params.id;
  let newArr = tasks.filter((item)=>{
    return item.id !== tID;
  });
  tasks = newArr;
  return res.json({
    message: 'Task deleted :)'
  })
});

// Change the task status as done or not done
app.put('/task/:id', (req, res) => {
  let updated = req.body as ITask;
  let tID = req.params.id;
  let newArr = tasks.filter((item) => {
    return item.id !== tID; 
  });
  tasks = newArr;
  tasks.push(updated);
  return res.json({
    message: 'Task updated :)',
  });
});

// Search for a task by given title
app.get('/task/:title', (req, res) => {
  let str = req.params.title;
  let title = str.replace("-"," ");
  let searchArr = tasks.filter((item)=>{
    return item.title.toLowerCase() === title;
  })
  return res.json(searchArr);
});



app.listen(5000, () => {
  console.log('Server is running in port ' + 5000);
});