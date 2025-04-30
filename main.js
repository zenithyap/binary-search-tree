import Tree from "./tree.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

// tree.prettyPrint();
tree.insert(22);
tree.insert(23);
tree.delete(8)
tree.delete(23)
tree.delete(22)
tree.prettyPrint();

// console.log(tree.find(1))

const addOne = (node) => {
    node.data += 1;
}

// tree.levelOrder(addOne);
tree.inorder(addOne)
tree.prettyPrint();

tree.preOrder(addOne);
tree.prettyPrint();
tree.postOrder(addOne);
tree.prettyPrint();

console.log(tree.height(6348));
console.log(tree.height(12));
console.log(tree.height(7));
console.log(tree.height("200"))

console.log(tree.depth(6348));
console.log(tree.depth(12));
console.log(tree.depth(7));
console.log(tree.depth("200"))
