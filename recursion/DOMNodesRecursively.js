const ignore_list = ["SCRIPT"];

export function countElementChildren(element) {
  let accumulator = 0;

  function counter(element) {
    const childrenArray = [...element.children];

    if (!childrenArray.length) {
      return 0;
    }

    accumulator += childrenArray.length;

    childrenArray.forEach((child) => counter(child));
  }

  counter(element);

  return accumulator;
}

export function findFirstChildWithId(element, id) {
  let foundNode = null;

  function traverseChildren(element) {
    const children = [...element.children];

    if (element.id === id) {
      foundNode = element;
    }

    if (!foundNode) {
      children.forEach((child) => traverseChildren(child));
    }
  }

  traverseChildren(element);

  return foundNode
}

export function highlightAllNodesWithId(element, id) {
  if(element.id.includes(id)) {
    element.style.backgroundColor = "magenta"
  }

  [...element.children].forEach(child => highlightAllNodesWithId(child, id))
}



console.log(`body has ${countElementChildren(document.body)} children`);
console.log(`body has ${findFirstChildWithId(document.body, "searched-paragraph")} children`);
highlightAllNodesWithId(document.body, "para");



