// To-Do List Application
let tasks = [];

// Function to display tasks
function displayTasks() {
    console.clear();
    console.log("Your To-Do List:");
    if (tasks.length === 0) {
        console.log("No tasks added yet!");
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task.completed ? "[✔]" : "[ ]"} ${task.name}`);
        });
    }
    console.log("\nOptions: add('task'), remove(index), toggle(index), clearAll()");
}

// Function to add a task
function add(taskName) {
    if (!taskName) {
        console.log("Task name cannot be empty!");
        return;
    }
    tasks.push({ name: taskName, completed: false });
    console.log(`Task '${taskName}' added.`);
    displayTasks();
}

// Function to remove a task
function remove(index) {
    if (index < 1 || index > tasks.length) {
        console.log("Invalid task index!");
        return;
    }
    const removedTask = tasks.splice(index - 1, 1);
    console.log(`Task '${removedTask[0].name}' removed.`);
    displayTasks();
}

// Function to toggle task completion
function toggle(index) {
    if (index < 1 || index > tasks.length) {
        console.log("Invalid task index!");
        return;
    }
    tasks[index - 1].completed = !tasks[index - 1].completed;
    console.log(`Task '${tasks[index - 1].name}' marked as ${tasks[index - 1].completed ? "completed" : "incomplete"}.`);
    displayTasks();
}

// Function to clear all tasks
function clearAll() {
    if (tasks.length === 0) {
        console.log("No tasks to clear!");
        return;
    }
    tasks = [];
    console.log("All tasks cleared.");
    displayTasks();
}

// Example usage
console.log("Welcome to the To-Do List App!");
console.log("Use add('task'), remove(index), toggle(index), clearAll() to manage your tasks.");
displayTasks();
