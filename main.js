import Tree from "./tree.js";

const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);

// tree.prettyPrint();
tree.insert(22);
tree.insert(23);
tree.delete(8)
tree.delete(23)
tree.delete(22)
tree.prettyPrint();

console.log(tree.find(1))

const addOne = (node) => {
    node.data *= 2;
}

tree.levelOrder(addOne);
tree.prettyPrint();