const tasks = [
  { id: 1, title: "Learn Git", completed: true },
  { id: 2, title: "Learn JavaScript", completed: false },
  { id: 3, title: "Learn React", completed: false },
  { id: 4, title: "Build an API", completed: true },
  { id: 5, title: "Learn PostgreSQL", completed: false },
];

function countCompletedTasks(tasks) {
  return tasks.reduce(
    (acc, task) => acc + (task.completed === true ? 1 : 0),
    0,
  );
}

function getTaskById(tasks, taskId) {
  return tasks.find((task) => task.id === taskId) ?? null;
}

function addTask(tasks, newTask) {
  return [...tasks, newTask];
}

function updateTask(tasks, taskId, updates) {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, ...updates } : task,
  );
}

function deleteTask(tasks, taskId) {
  return tasks.filter((task) => task.id !== taskId);
}

console.log(countCompletedTasks(tasks));

console.log(getTaskById(tasks, 3));

console.assert(countCompletedTasks(tasks) === 2, "Test 1 failed");

console.assert(countCompletedTasks([]) === 0, "Test 2 failed");

console.assert(
  countCompletedTasks([{ completed: false }, { completed: false }]) === 0,
  "Test 3 failed",
);

console.assert(
  countCompletedTasks([{ completed: "false" }]) === 0,
  "Test 4 failed",
);

console.log("Tests finished");

console.log("-------------------------------------------");

console.assert(getTaskById(tasks, 3)?.title === "Learn React", "Test 5 failed");

console.assert(getTaskById(tasks, 999) === null, "Test 6 failed");

console.assert(getTaskById([], 1) === null, "Test 7 failed");

console.assert(getTaskById(tasks, "3") === null, "Test 8 failed");

console.log("-------------------------------------------");

const original = [{ id: 1, title: "Learn Git" }];
const newTask = { id: 2, title: "Learn React" };

const updated = addTask(original, newTask);

console.assert(updated.length === 2, "Test 9 failed");
console.assert(original.length === 1, "Test 10 failed");
console.assert(updated !== original, "Test 11 failed");
console.assert(updated[1] === newTask, "Test 12 failed");

console.log("-------------------------------------------");

const beforeUpdate = [
  { id: 1, title: "Learn Git", completed: false },
  { id: 2, title: "Learn React", completed: false },
];

const afterUpdate = updateTask(beforeUpdate, 1, {
  completed: true,
});

console.assert(afterUpdate[0].completed === true, "Test 13 failed");
console.assert(beforeUpdate[0].completed === false, "Test 14 failed");
console.assert(afterUpdate !== beforeUpdate, "Test 15 failed");
console.assert(afterUpdate[0] !== beforeUpdate[0], "Test 16 failed");
console.assert(afterUpdate[1] === beforeUpdate[1], "Test 17 failed");
console.assert(
  updateTask(beforeUpdate, 999, { completed: true }).length === 2,
  "Test 18 failed",
);

console.log("Update tests finished");

console.log("-------------------------------------------");

const beforeDelete = [
  { id: 1, title: "Learn Git" },
  { id: 2, title: "Learn JavaScript" },
  { id: 3, title: "Learn React" },
];

const afterDelete = deleteTask(beforeDelete, 2);

// The task was removed
console.assert(afterDelete.length === 2, "Test 19 failed");
console.assert(
  afterDelete.every((task) => task.id !== 2),
  "Test 20 failed",
);

// Original array remains unchanged
console.assert(beforeDelete.length === 3, "Test 21 failed");

// A new array was created
console.assert(afterDelete !== beforeDelete, "Test 22 failed");

// ID does not exist
const notFound = deleteTask(beforeDelete, 999);
console.assert(notFound.length === 3, "Test 23 failed");
console.assert(notFound !== beforeDelete, "Test 24 failed");

// Empty array
console.assert(deleteTask([], 1).length === 0, "Test 25 failed");

console.log("Delete tests finished");
