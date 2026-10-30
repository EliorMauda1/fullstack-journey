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

console.log(countCompletedTasks(tasks));

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
