function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');

    if (taskInput.value.trim() !== '') {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span class="task-icon"><i class="fas fa-check-circle"></i></span>
            ${taskInput.value}
            <button onclick="removeTask(this)">
                <i class="fas fa-trash-alt"></i> Remove
            </button>
        `;
        taskList.appendChild(newTask);
        taskInput.value = '';

        taskCount.textContent = taskList.children.length;
    }
}

function removeTask(button) {
    const taskToRemove = button.parentNode;
    taskToRemove.parentNode.removeChild(taskToRemove);

    const taskCount = document.getElementById('taskCount');
    taskCount.textContent = taskList.children.length;
}
