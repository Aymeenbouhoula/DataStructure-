export class Stack {
    constructor(){
        this.data = []
    }

    add(item){
        this.data.push(item)
    }

    pop(){
        return this.data.pop()
    }

    peek(){
        let lastIndex = this.data.length -1
        return this.data[lastIndex]
    }

    isEmpty(){
        return this.data.length === 0
    }
}