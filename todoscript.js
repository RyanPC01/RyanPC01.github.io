function addTask() {
    var task = document.getElementById("task").value;
    var taskList = document.getElementById("task-list");
    var taskWithDeleteOption = document.createElement("li");
    taskWithDeleteOption.innerHTML = task + "<button class='remove-btn'>X</button>";
    taskList.appendChild(taskWithDeleteOption);
    document.getElementById("task").value = "";
  
    var removeBtns = document.getElementsByClassName("remove-btn");
    for (var i = 0; i < removeBtns.length; i++) {
      removeBtns[i].addEventListener("click", function(event) {
        this.parentElement.remove();
      });
    }
  }
  
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    addTask();
  });
  
