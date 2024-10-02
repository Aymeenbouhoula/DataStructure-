export class Queue {
    constructor(){
        this.data = []
    }

    add(item){
        this.data.unshift(item)
    }

    remove(){
       return this.data.pop()
    }

    size(){
        return this.data.length
    }

}


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
