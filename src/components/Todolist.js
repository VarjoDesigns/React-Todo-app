import React, {useState} from 'react';
import TodoTable from './TodoTable';

function Todolist() {
    const [todo, setTodo] = useState({desc: '', date: '', priority: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    const addTodo = () => {
        setTodos([...todos, todo]) // Spread notaatio. Lisää olemassa olevan taulukon, sekä staten desc arvon viimeiseksi listalle
        setTodo({desc: '', date: ''}) // Tyhjentää tekstikentän jotta seuraavan lisääminen helpottuu
    }

    const deleteTodo = (row) => {
        setTodos(todos.filter((todo, index) => index !== row));
    }

    return (
        <div className="todoapp">
            <h1 className="display-4 text-center">Todolist</h1>
            <div className="row">
                <input className="form-control col-4" name="date" value={todo.date} onChange={inputChanged} placeholder="Date..."/>
                <input className="form-control col-4" name="desc" value={todo.desc} onChange={inputChanged} placeholder="Description..."/>
                <button className="btn btn-outline-light col-4" onClick={addTodo}>Add todo</button>
            </div>
            <TodoTable delete={deleteTodo} todos={todos} />
        </div>
    )
}

export default Todolist;