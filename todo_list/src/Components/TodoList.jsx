import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [headingInput, setHeadingInput] = useState("");
  const [listInputs, setListInputs] = useState({});

  // Obtém o cabeçalho da caixa de entrada, acionada ao clicar no botão
  const handleAddTodo = () => {
    // Verifica se a caixa de entrada não está vazia
    if (headingInput.trim() !== "") {
      // Cria um novo array espalhando os todos anteriores e adiciona um objeto no final
      setTodos([...todos, { heading: headingInput, list: [] }]);
      // Após adicionar a nova tarefa, redefine o campo e o deixa vazio
      setHeadingInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleAddList = (index) => {
    if (listInputs[index] && listInputs[index].trim() != "") {
      const newTodos = [...todos];
      newTodos[index].list.push(listInputs[index]);
      setTodos(newTodos);
      setListInputs({ ...listInputs, [index]: "" });
    }
  };

  const handleListInputChange = (index, value) => {
    setListInputs({ ...listInputs, [index]: value });
  };

  return (
    <>
      <div className="todo-container">
        <h1 className="title">Minha Lista de Tarefas</h1>
        <div className="input-container">
          <input
            type="text"
            className="heading-input"
            placeholder="Enter heading"
            value={headingInput} // Vincula o valor digitado à variável de estado headinInput
            // No instante que o valor de entrada muda usa o valor dela para atualizar a variavel de estado
            onChange={(e) => {
              setHeadingInput(e.target.value);
            }}
          />

          <button className="add-list-button" onClick={handleAddTodo}>
            Add Heading
          </button>
        </div>
      </div>
      <div className="todo_main">
        {/*Mapeia cada item de tarefa e executa a função de exibir e deletar */}
        {todos.map((todo, index) => (
          <div key={ index } className="todo-card">
            <div className="heading_todo">
              {/*Cada Item de tarefa é redenrizado no seu card*/}
              <h3>{todo.heading}</h3>
              {/*Acompanhado de toda tarefa vem um botão de deletar*/}
              <button
                className="delete-button-heading"
                onClick={() => {
                  handleDeleteTodo(index);
                }}
              >
                Delete Heading
              </button>
              <ul>
                {todo.list.map((list, listIndex) => (
                  <li key={listIndex} className="todo_inside_list">
                    <p>{list}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="add_list">
              <input
                type="text"
                className="list-input"
                placeholder="Adicionar Lista"
                value={listInputs[index] || ""}
                onChange={(e) => {
                  handleListInputChange(index, e.target.value);
                }}
              />
              <button
                className="add-list-button"
                onClick={() => handleAddList(index)}
              >
                Adicionar Lista
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
