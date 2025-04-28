import Node from "./node.js"; 
class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }

    buildTree(array) {
        const processedArray = this.#sortAndRemoveDuplicate(array);
        let left = 0;
        let right = processedArray.length - 1;

        return this.#buildTreeRec(processedArray, left, right);
    }

    #sortAndRemoveDuplicate(array) {
        const sorted = array.sort((a, b) => a - b);
        const duplicateSet = new Set();
        const duplicatesRemoved = sorted.filter((num) => {
            if (duplicateSet.has(num)) {
                return false;
            } else {
                duplicateSet.add(num);
                return true;
            }
        });

        return duplicatesRemoved;
    }

    #buildTreeRec(array, left, right) {
        if (left > right) {
            return null;
        }

        const mid = Math.floor((left + right) / 2);
        const num = array[mid];

        const node = new Node(num);
        node.left = this.#buildTreeRec(array, left, mid - 1);
        node.right = this.#buildTreeRec(array, mid + 1, right);

        return node;
    }

    insert(value, root=this.root) {
        if (root === null) {
            return new Node(value);
        }

        const rootData = root.data;
        if (value < rootData) {
            root.left = this.insert(value, root.left);
        } else if (value > rootData) {
            root.right = this.insert(value, root.right);
        }

        return root;
    }

    prettyPrint(node=this.root, prefix = "", isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    };
}

export default Tree;