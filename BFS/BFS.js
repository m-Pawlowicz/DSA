import { Queue } from "../data-structures/Queue";

const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

function BFS(graph, key) {
  // a queue to store continuous nodes
  const queue = new Queue();
  const checkedPeople = {};

  // populate the queue with first key given in param
  addPersonsNeighbors(queue, graph[key]);

  while (queue.size) {
    const currentPerson = queue.pop();
    if (isMangoSeller(currentPerson)) {
      return currentPerson;
    }

    // do not add people who were already checked to prevent infinite loop
    if (!hasBeenChecked(currentPerson)) {
      addPersonsNeighbors(queue, graph[currentPerson]);
    }

    markChecked(currentPerson);
  }

  return null;

  function markChecked(currentPerson) {
    checkedPeople[currentPerson] = currentPerson;
  }

  function hasBeenChecked(currentPerson) {
    return Object.hasOwn(checkedPeople, currentPerson);
  }
}

console.log(BFS(graph, "you"));

function addPersonsNeighbors(queue, people) {
  for (const person of people) {
    queue.push(person);
  }
}

function isMangoSeller(personsName) {
  return personsName.at(-1) === "m";
}
