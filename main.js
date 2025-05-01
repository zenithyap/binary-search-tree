import Tree from "./tree.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);


// tree.inOrder((node) => console.log(node.data)) 
tree.insert(10000);
tree.insert(20000);
tree.prettyPrint();
console.log(tree.isBalanced());
tree.rebalance();
tree.prettyPrint();
console.log(tree.isBalanced());