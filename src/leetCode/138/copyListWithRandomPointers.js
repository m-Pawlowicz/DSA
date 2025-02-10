
 // Definition for a _Node.
 function _Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
 };

 // Step 1: Create the nodes
let node1 = new _Node(7);
let node2 = new _Node(13);
let node3 = new _Node(11);
let node4 = new _Node(10);
let node5 = new _Node(1);

// Step 2: Link the `next` pointers
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Step 3: Set the `random` pointers based on the diagram
node1.random = null;         // 7 -> null
node2.random = node1;        // 13 -> 7
node3.random = node5;        // 11 -> 1
node4.random = node3;        // 10 -> 11
node5.random = node1;        // 1 -> 7

copyRandomList(node1);

function copyRandomList (head) {
    let newHead = recurse(head);
    
    deDuplicate(newHead)

    console.log(iterate(newHead))
    console.log("----")
    console.log(iterate(head));

    return newHead

    function deDuplicate(head){
        let sentinel = new _Node("xd", null, null);
        let prev = sentinel;

        while(head) {
            let copy = head.next;
            prev.next = copy;
            head.next = head.next.next;
            prev = prev.next;
            head = head.next;
        }

        
        return sentinel.next
    }

    function iterate(head) {
        if(!head) return "null";
        return `${head.val}` + "-" + iterate(head.next);
    }

    function recurse(head) {
        if (!head) {
            return null;
        }

        const newNode = new _Node(head.val);
        newNode.next = head.next;
        head.next = newNode;
        
        recurse(head.next.next);
        
        if (head.random) {
            newNode.random = head.random.next;
        }
        
        return head;
    }
    
};
