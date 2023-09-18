import linkedLists from "./linked-lists";

const linked = new linkedLists();

linked.prepend("giraffe");
linked.append("rhinoceros");
linked.append("hippopotamus");
console.log(linkedLists.toString());
console.log(linkedLists.size());
console.log(linkedLists.head());
console.log(linkedLists.tail());
console.log(linkedLists.at(2));
console.log(linkedLists.at(4)); 
linkedLists.pop();
console.log(linkedLists.toString());
console.log(linkedLists.contains("giraffe"));
console.log(linkedLists.find("rhinoceros"));
linkedLists.prepend("hippopotamus");
console.log(linkedLists.toString());
linkedLists.insertAt("lion",2);
console.log(linkedLists.toString());
linkedLists.insertAt("tiger",8);
console.log(linkedLists.toString());
linkedLists.removeAt(2);
console.log(linkedLists.toString());