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
  for (let i=0; i<people.length; i++){
    if(people[i].id == pID){
      people[i]=updated
    }
  }
  return res.json({
    message: 'Name updated :)',
  });
});

app.delete('/name/:id', (req, res) => {
  const pID = req.params.id;
  for (let i=0; i<people.length; i++){
    if(people[i].id==pID){
      people.splice(i, 1);
    }
  }
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
  for (let i=0; i<grades.length; i++){
    if(grades[i].id == gID){
      grades[i]=updated
    }
  }
  return res.json({
    message: 'Grade updated :)',
  });
});

app.delete('/grade/:id', (req, res) => {
  const gID = req.params.id;
  for (let i=0; i<grades.length; i++){
    if(grades[i].id==gID){
      grades.splice(i, 1);
    }
  }
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
  for (let i=0; i<tasks.length; i++){
    if(tasks[i].id == tID){
      tasks[i]=updated
    }
  }
  return res.json({
    message: 'Task updated :)',
  });
});

app.delete('/task/:id', (req, res) => {
  const tID = req.params.id;
  for (let i=0; i<tasks.length; i++){
    if(tasks[i].id==tID){
      tasks.splice(i, 1);
    }
  }
  return res.json({
    message: 'Task deleted :)'
  })
});

// Change the task status as done or not done
app.put('/task/:id/:status', (req, res) => {
  const tID = req.params.id;
  const status = req.params.status.replace('-',' ');
  for (let i=0; i<tasks.length; i++){
    if(tasks[i].id == tID){
      tasks[i].status = status;
    }
  }
  return res.json({
    message: 'Task updated :)', tasks
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