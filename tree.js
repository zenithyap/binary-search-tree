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

    delete(value, root=this.root) {
        if (root === null) {
            return root;
        }
        
        const rootData = root.data;
        if (value < rootData) {
            root.left = this.delete(value, root.left);
        } else if (value > rootData) {
            root.right = this.delete(value, root.right);
        } else {
            if (root.left === null) {
                return root.right;
            }

            if (root.right === null) {
                return root.left;
            }

            const successor = this.#getSuccessor(root);
            root.data = successor.data;
            root.right = this.delete(successor.data, root.right);
        }

        return root;
    }

    #getSuccessor(root) {
        root = root.right;
        while (root !== null && root.left !== null) {
            root = root.left;
        }

        return root;
    }

    find(value, root=this.root) {
        if (root === null) {
            return null;
        }

        const rootData = root.data;
        if (value < rootData) {
            return this.find(value, root.left);
        } else if (value > rootData) {
            return this.find(value, root.right);
        } else {
            return root;
        }
    }

    levelOrder(callback) {
        const queue = [];
        queue.push(this.root);

        while (queue.length !== 0) {
            const node = queue.shift();
            callback(node);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }

    inorder(callback, root=this.root) {
        if (root === null) {
            return;
        }

        this.inorder(callback, root.left);
        callback(root)
        this.inorder(callback, root.right);

        return root;
    }

    preOrder(callback, root=this.root) {
        if (root === null) {
            return;
        }

        callback(root);
        this.preOrder(callback, root.left);
        this.preOrder(callback, root.right);

        return root;
    }

    postOrder(callback, root=this.root) {
        if (root === null) {
            return;
        }

        this.postOrder(callback, root.left);
        this.postOrder(callback, root.right);
        callback(root);

        return root;
    }

    height(value) {
        const root = this.find(value);
        if (root === null) return null;

        return this.#heightRec(root);
    }

    #heightRec(root) {
        if (root === null) {
            return -1;
        }
        
        return 1 + Math.max(this.#heightRec(root.left), this.#heightRec(root.right));
    }

    depth(value, root=this.root, curDepth=0) {
        if (root === null) {
            return root;
        }

        const rootData = root.data;
        if (value < rootData) {
            return this.depth(value, root.left, curDepth+1);
        } else if (value > rootData) {
            return this.depth(value, root.right, curDepth+1);
        } else {
            return curDepth;
        }
    }

    isBalanced() {
        return this.isBalancedRec() !== -1;
    }

    isBalancedRec(root=this.root) {
        if (root === null) {
            return 0;
        }

        const left = this.isBalancedRec(root.left);
        const right = this.isBalancedRec(root.right);

        if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
            return -1;
        }
        
        return 1 + Math.max(left, right);
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