import LinkedLists from "./linked-lists.js";

const linked = new LinkedLists();

linked.prepend("giraffe");
linked.append("rhinoceros");
linked.append("hippopotamus");
console.log(linked.toString());
console.log(linked.size());
console.log(linked.head());
console.log(linked.tail());
console.log(linked.at(2));
console.log(linked.at(4)); 
linked.pop();
console.log(linked.toString());
console.log(linked.contains("giraffe"));
console.log(linked.find("rhinoceros"));
linked.prepend("hippopotamus");
console.log(linked.toString());
linked.insertAt("lion",2);
console.log(linked.toString());
linked.insertAt("tiger",8);
console.log(linked.toString());
linked.removeAt(2);
console.log(linked.toString());
