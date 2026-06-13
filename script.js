let input = document.querySelector("input");
let btn = document.querySelector("button");
const todo_container = document.querySelector(".todo-container");



btn.addEventListener("click", ()=> {
    if(input.value.trim() === ""){
        return;
    }

    const task = document.createElement("div");

    const taskText = document.createElement("span");
    // task.textContent = input.value;

    task.appendChild(taskText);

    task.classList.add("task")
    taskText.textContent = input.value;
    todo_container.appendChild(task);
    input.value = "";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn")
    task.appendChild(deleteButton);
    
    deleteButton.addEventListener("click", () => {
        task.remove();
    })

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    task.appendChild(editButton);

    editButton.addEventListener("click", () => {
        let newText = prompt("Enter New Task");
        if(newText !== null && newText.trim() !== "") {
            taskText.textContent = newText;
        }
    });
});



