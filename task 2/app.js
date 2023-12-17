
    const taskList = document.getElementById('taskList');

    // Add task function
    window.addTask = function() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button id="editBtn" onclick="editTask(this)">Edit</button>
                <button id="deleteBtn" onclick="deleteTask(this)">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    };

    // Edit task function
    window.editTask = function(button) {
        const li = button.parentNode;
        const span = li.querySelector('span');
        const newText = prompt('Edit task:', span.textContent);

        if (newText !== null) {
            span.textContent = newText;
        }
    };

    // Delete task function
    window.deleteTask = function(button) {
        const li = button.parentNode;
        taskList.removeChild(li);

    };
