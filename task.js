// TASK MANAGER

// Using a Template Literal because it recognizes line breaks
const menu = `TASK MANAGER;

What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`;

// Arrays for storing tasks
const tasks = [
  `Charge MacBook`,
  `Master JavaScript`
];

// For displaying tasks to the user
let showTasks = '';


// For storing the value of a new task
let newTask;

// For storing the number of the task to be removed
let num;

// For storing the value of the removed task
let removed;

// Displays the menu for the user to select an option. Also, sets the user's response to the userInput variable
let userInput = prompt(menu);

// Loops and continues to display the menu until the user ends/closes the Task Manager (Until until the user enters CLOSE)
while (userInput !== "CLOSE"){
  // ====================================================
  if (userInput == "TASKS") {
    showTasks = ''
    for(let i = 0; i < tasks.length; i++){
        showTasks += (tasks[i]+'\n');
    }
    alert(showTasks)
  }
  
  if (userInput == "NEW") {
    newTask = prompt("Enter the new task:")
    tasks.push(newTask)
    alert('"' + newTask + '"' + 'has now been added.')
    alert('has been added!')
  }

  if (userInput == "REMOVE") {
    showTasks = ''
    for(var i = 0; i < tasks.length; i++){
        showTasks += (i+1 + ':' + tasks[i]+'\n') ;
    }
    userInput = prompt('Please enter a number to remove: \n' + showTasks)
    tasks.splice(userInput-1, 1);
  }
  //====================================================

  // Displays the menu again
  userInput = prompt(menu);

  // This break can be commented out after the CLOSE feature is complete
  // break;
}

// Alerts the user that they have closed the program
alert(`Thank you for using Task Manager!`);