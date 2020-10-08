import React, {useState} from 'react';

function TodoTable(props) {
    return(
        <div>
            <table class="table ">
                <thead>
                    <tr>    
                        <th>Date</th>
                        <th>Description</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            props.todos.map((todo, index) => 
                            <tr key={index}>
                                <td>{todo.date}</td>
                                <td>{todo.desc}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-light"
                                        onClick={() => props.delete(index)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>)
                        }
                </tbody>
            </table>
        </div>
    )
}

export default TodoTable;