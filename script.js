console.log("JS is working");

let input = document.getElementById("textinput");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function addTask() {
    const task = input.value;
    if (task.trim() === "") {
    return;
}

    const li = document.createElement("li");
    li.textContent = task;

    const list = document.querySelector("ul");
    list.appendChild(li);

    input.value = "";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";

    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function() {
        li.remove();
    });
});