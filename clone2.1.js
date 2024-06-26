document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskInput = document.getElementById('task-input');
    const dateInput = document.getElementById('date-input');
    const timeInput = document.getElementById('time-input');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const task = taskInput.value;
        const date = dateInput.value;
        const time = timeInput.value;

        if (task && date && time) {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `<strong>${task}</strong> <span>${date} at ${time}</span>`;
            taskList.appendChild(taskItem);

            taskInput.value = '';
            dateInput.value = '';
            timeInput.value = '';
        }
    });
});