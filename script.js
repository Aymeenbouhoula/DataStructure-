// import { Stack } from "./stack.js";

// // add new object from class 
// let stack = new Stack()

// //add new 
// stack.add(1)
// stack.add(2)
// stack.add(3)

// //log last element
// console.log(stack.peek());

// //pop() ==> delete last index from array
// stack.pop()
// stack.pop()
// stack.pop()

// //console.log(stack.pop());


// //verification if is empty
// console.log(stack.isEmpty())


// import { Queue } from "./queue.js";
// //new object
// let q1 = new Queue()

// //function add
// q1.add(1)
// q1.add(2)
// q1.add(3)

// console.log(q1);

// //function remove
// console.log(q1.remove())
// //affichage du size du array
// console.log(q1.size())







import { Node } from "./linked_list.js";
import { LinkedList } from "./linked_list.js";



const list = new LinkedList()

list.append(100)
list.append(200)
list.append(300)
list.append(400)
list.append(500)

console.log(list);
console.log(list.display());




console.log(list.Get(4))




// // Example usage CHATGPT
// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.display(); // Output: 10 -> 20 -> 30

// list.remove(20);
// list.display(); // Output: 10 -> 30

