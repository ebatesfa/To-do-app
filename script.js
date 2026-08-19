/*console.log("JS is working");

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
    li.addEventListener("click",function(){

        li.classList.toggle("completed");;
    })
     const editBtn=document.createElement("button");
      editBtn.textContent="EDIT";
      li.appendChild(editBtn);

      editBtn.addEventListener("click", function(){
        const newtask= window.prompt("enter new task");
        const Tasktext= document.createElement("span");
        li.appendChild(Tasktext);
        Tasktext.textContent= newtask;



      })
});
*/


console.log("JS is working");

let input = document.getElementById("textinput");
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function addTask() {

    const task = input.value;

    if (task.trim() === "") {
        return;
    }

    const li = document.createElement("li");

    // Task text
    const taskText = document.createElement("span");
    taskText.textContent = task;
    li.appendChild(taskText);

    const list = document.querySelector("ul");
    list.appendChild(li);

    input.value = "";

    // DELETE button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    li.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    // EDIT button
    const editBtn = document.createElement("button");
    editBtn.textContent = "EDIT";
    li.appendChild(editBtn);

    editBtn.addEventListener("click", function () {
        const newTask = window.prompt("Enter new task:");

        if (newTask !== null && newTask.trim() !== "") {
            taskText.textContent = newTask;
        }
    });

    // COMPLETE task
    li.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

});