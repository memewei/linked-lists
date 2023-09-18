import Node from "./node";

class linkedLists{
    constructor(){
        this.listHead = null;
    }

    prepend(value){
        let temp = null;
        if(this.listHead != null) temp = this.listHead;
        this.listHead = new Node(value);
        this.listHead.nextNode = temp;
    }

    append(value){
        if(this.listHead === null) this.prepend(value);
        else{
            let temp = this.listHead;
            while(temp.nextNode !== null) temp = temp.nextNode;
            temp.nextNode = new Node(value);
        }
    }

    size(){
        let temp = this.listHead;
        let counter = 0;
        while(temp !== null){
            counter ++;
            temp = temp.nextNode;
        }
        return counter;
    }

    head(){
        return this.listHead;
    }

    tail(){
        let temp = this.listHead;
        while(temp.nextNode !== null) temp = temp.nextNode;
        return temp;
    }

    at(index){
        let temp = this.listHead;
        for(let i = 0; i < index; i++){
            temp = temp.nextNode;
            if(temp === null) return "There are no items available at this index";
        }
        return temp;
    }

    pop(){
        let current = this.listHead;
        let previous = null;
        while(current.nextNode !== null){
            previous = current;
            current = current.nextNode;
        }
        previous.nextNode = null;
    }

    contains(value){
        let temp = this.listHead;
        while(temp !== null){
            if(temp.value === value) return true;
            temp = temp.nextNode;
        }
        return false;
    }

    find(value){
        let temp = this.listHead;
        let index = 0;
        while(temp !== null){
            if(temp.value === value) return index;
            temp = temp.nextNode;
            index ++;
        }
        return null;
    }

    toString(){
        let temp = this.listHead;
        let stringList = "";
        while(temp !== null){
            stringList += `(${temp.value}) -> `;
            temp = temp.nextNode;
        }
        return (stringList += "null");
    }

    insertAt(value, index){
        if(this.listHead === null) this.prepend(value);
        else{
            let current = this.listHead;
            let previous = null;
            for(let i = 0; i < index; i++){
                previous = current;
                current = current.nextNode;
                if(current === null) break;
            }
            const temp = new Node(value);
            previous.nextNode = temp;
            temp.nextNode = current;
        }
    }

    removeAt(index){
        if(this.listHead === null) return "There's nothing in this list!";

        let current = this.listHead;
        let previous = null;
        for(let i = o; i < index; i++){
            previous = current;
            current = current.nextNode;
            if(current === null) return "There are no items available at this index";
        }
        previous.nextNode = current.nextNode;
    }
}
