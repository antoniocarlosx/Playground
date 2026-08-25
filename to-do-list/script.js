const taskList = [];

const addTask = () => {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  try {
    if (taskText !== "") {
      const ul = document.getElementById("todoList");

      // Criar novo item da lista
      const li = document.createElement("li");

      // Criar o texto da elemento de tarefa
      const span = document.createElement("span");
      span.textContent = taskText;

      // Criar o botão de edição
      const editButton = document.createElement("button");
      editButton.textContent = "Editar";
      editButton.onclick = () => editTask(span);
      editButton.classList.add("action-btn");

      // Criar o botão de remoção
      const removeButton = document.createElement("button");
      removeButton.textContent = "Excluir";
      removeButton.onclick = () => removeTask(li);
      removeButton.classList.add("action-btn");

      // Cria o container que agrupa os dois botões juntos
      const btnContainer = document.createElement("div");
      btnContainer.classList.add("task-actions");
      btnContainer.appendChild(editButton);
      btnContainer.appendChild(removeButton);

      //Adicionar textos da tarefa ao item da lista (li)
      li.appendChild(span);

      //adiciona o container dos botões ao itens de lista
      li.appendChild(btnContainer)

      // Adicionar o item criado a lista

      ul.appendChild(li);

      //Limpar o campo de entrada
      input.value = "";
    } else {
      alert("Por favor insira uma tarefa válida");
    }
  } catch (error) {
    throw error;
  }
};
