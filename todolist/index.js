
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');
const reminderSound = document.getElementById('reminder-sound');


addTaskButton.addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const reminderTimeInput = document.getElementById('reminder-time');

    const taskText = taskInput.value.trim();
    const reminderTime = reminderTimeInput.value;


    if (taskText !== "" && reminderTime !== "") {
        const li = document.createElement('li');


        li.textContent = `${taskText} (Due: ${new Date(reminderTime).toLocaleString()})`;


        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');


        li.appendChild(deleteBtn);
        taskList.appendChild(li);


        taskInput.value = "";
        reminderTimeInput.value = "";


        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(li);
        });


        const checkReminder = setInterval(() => {
            const currentTime = new Date().getTime();
            const reminderTimeInMs = new Date(reminderTime).getTime();


            if (currentTime >= reminderTimeInMs) {
                reminderSound.play();
                alert(`Reminder: ${taskText}`);
                clearInterval(checkReminder);
            }
        }, 1000);
    } else {
        alert("Wetin You Wan Do Today, Oya Add am.");
    }
});
