let tasks = [];
window.onload = function() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
    renderTasks();
};
document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskDescription = taskInput.value;
    if (taskDescription.trim() === '') {
        alert('Por favor, insira uma descrição da tarefa.');
        return;
    }
    const newTask = {
        description: taskDescription,
        status: false
    };
    tasks.push(newTask);
    taskInput.value = '';
    saveTasks();
    renderTasks();
}
function renderTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.className = `task ${task.status ? 'completed' : ''}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.status;
        checkbox.addEventListener('change', () => {
            task.status = checkbox.checked;
            saveTasks();
            renderTasks();
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.style.marginLeft = '10px';
        deleteButton.addEventListener('click', () => {
            deleteTask(index);
        });
        taskItem.appendChild(checkbox);
        taskItem.appendChild(document.createTextNode(task.description));
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}
