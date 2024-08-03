function TodoItem(description) {
    this.description = description;
    this.completed = false; 
}

function TodoList() {
    this.items = []; 
}

TodoList.prototype.addItem = function(description) {
    const newItem = new TodoItem(description);
    this.items.push(newItem);
};

TodoList.prototype.render = function() {
    const listContainer = document.getElementById('todoList');
    listContainer.innerHTML = ''; 
    this.items.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.description;

        if (item.completed) {
            listItem.classList.add('completed');
        }

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button'); 
        deleteButton.onclick = () => {
            this.items.splice(index, 1); 
            this.render(); 
        };

        listItem.appendChild(deleteButton);

        listContainer.appendChild(listItem);
    });
};


function addTodo() {
    const inputField = document.getElementById('newTodo');
    const description = inputField.value.trim();

    if (description) {
        myTodoList.addItem(description);
        myTodoList.render();
        inputField.value = ''; 
    }
}

const myTodoList = new TodoList();
myTodoList.addItem('Finish coding project');
myTodoList.addItem('Read a book');
myTodoList.render();
