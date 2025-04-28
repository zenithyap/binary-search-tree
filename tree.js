import Node from "./node.js"; 
class Tree {
    root;

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
}

export default Tree;