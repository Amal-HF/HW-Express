"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)('dev'));
let todos = [];
app.use(express_1.default.json());
app.get('/todo', (req, res) => {
    return res.json(todos);
});
app.post('/todo', (req, res) => {
    const newTodo = req.body;
    newTodo.id = (0, uuid_1.v4)();
    todos.push(newTodo);
    return res.json({
        message: 'Todo added !',
    });
});
app.put('/todo/:id', (req, res) => {
    const updatedTodo = req.body;
    const { id } = req.params;
    const updatedTodoList = todos.filter((todo) => {
        return todo.id !== id;
    });
    updatedTodoList.push(updatedTodo);
    todos = updatedTodoList;
    return res.json({
        message: 'Todo updated !',
    });
});
app.delete('/todo/:id', (req, res) => {
    const { id } = req.params;
    const newTodoList = todos.filter((todo) => {
        return todo.id !== id;
    });
    todos = newTodoList;
    return res.json({
        message: 'Todo deleted !',
    });
});
app.listen(5000, () => {
    console.log('Server is running in port ' + 5000);
});
