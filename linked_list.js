// export class Node{
//     constructor(data){
//         this.data = data;
//         this.nextNodeNode = null
//     }
// }

// export class LinkedList{
//     constructor(){
//         this.head= null
//     }
//     append(data){
//         if (this.head === null){
//             this.head = new Node(data)
//         }
//         else{
//             let current = this.head
//             while(current.nextNodeNode !== null){
//                 current = current.nextNodeNode
//             }
//             current.nextNodeNode = new Node(data)
//         }
//     }

// }



export class Node {
    constructor(data) {
        this.data = data;
        this.nextNode = null; // Pointer to the nextNode node
    }
}

export class LinkedList {
    constructor() {
        this.head = null; // Start of the list
        this.size = 0; // Size of the list
    }

    // Add a new node at the end of the list
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode; // If list is empty, set head to new node
        } else {
            let current = this.head;
            while (current.nextNode) {
                current = current.nextNode; // Traverse to the last node
            }
            current.nextNode = newNode; // Set the nextNode of last node to new node
        }
        this.size++; // Increase the size of the list
    }

    Get(index){
        let current = this.head
        let counter = 0

        while(counter < index){
            current = current.nextNode
            counter++
        }

        return current
    }





    // Remove a node by data
    remove(data) {
        if (!this.head) return; // If list is empty, do nothing

        if (this.head.data === data) {
            this.head = this.head.nextNode; // Move head to the nextNode node
            this.size--;
            return;
        }

        let current = this.head;
        while (current.nextNode && current.nextNode.data !== data) {
            current = current.nextNode; // Traverse the list
        }

        if (current.nextNode) {
            current.nextNode = current.nextNode.nextNode; // Remove the node
            this.size--;
        }
    }

    // Display the list
    display() {
        const datas = [];
        let current = this.head;
        while (current) {
            datas.push(current.data);
            current = current.nextNode; // Move to the nextNode node
        }
        console.log(datas.join(' -> '));
    }
}

// // Example usage
// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.display(); // Output: 10 -> 20 -> 30

// list.remove(20);
// list.display(); // Output: 10 -> 30

