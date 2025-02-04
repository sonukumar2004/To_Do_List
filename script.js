function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="removeTask(this)">Delete</button>`;
    li.addEventListener("click", () => li.classList.toggle("completed"));

    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(button) {
    button.parentElement.remove();
}
