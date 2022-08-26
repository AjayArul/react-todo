import * as React from 'react';
import './style.css';

function App() {
  const [text, setText] = React.useState('');
  const [todos, setTodos] = React.useState([]);

  const saveTodos = () => {
    const todoObj = {
      id: Math.random(),
      name: text,
      status: 'pending',
    };
    console.log(todoObj);
    setTodos([...todos, todoObj]);
    setText('');
  };

  const doneTodos = (id) => {
    const updatedData = todos.map((data) =>
      data.id === id ? { ...data, status: 'done' } : data
    );

    setTodos(updatedData);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={saveTodos}>apply</button>
      {todos?.map((todo) => {
        const isDone = todo.status === 'done';
        return (
          <div key={todo.key}>
            <p style={isDone ? { color: 'red' } : {}}>{todo.name}</p>
            <button disabled={isDone} onClick={() => doneTodos(todo.id)}>
              done
            </button>
          </div>
        );
      })}
    </>
  );
}

export default App;
