document.addEventListener("DOMContentLoaded", function () {
    const taskList = document.getElementById("taskList");
    const addButton = document.getElementById("addButton");
    const inputField = document.getElementById("taskInput");

    addButton.addEventListener("click", function () {
        const taskText = inputField.value.trim();
        if (taskText !== "") {
            const listItem = document.createElement("li");
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.addEventListener("change", function () {
                if (checkBox.checked) {
                    listItem.classList.add("completed");
                } else {
                    listItem.classList.remove("completed");
                }
            });
            const taskSpan = document.createElement("span");
            taskSpan.textContent = taskText;
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Șterge";
            deleteButton.addEventListener("click", function () {
                listItem.remove();
            });
            listItem.appendChild(checkBox);
            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
            inputField.value = "";
        }
    });

    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addButton.click();
        }
    });
});