let tasks = [];
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
            renderTasks();
        });
        taskItem.appendChild(checkbox);
        taskItem.appendChild(document.createTextNode(task.description));
        taskList.appendChild(taskItem);
    });
}