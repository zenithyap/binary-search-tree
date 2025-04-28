class Node {
    constructor(data, left=null, right=null) {
        this._data = data;
        this._left = left;
        this._right = right;
    }

    get data() {
        return this._data;
    }

    set data(data) {
        this._data = data;
    }

    get left() {
        return this._left;
    }

    set left(leftNode) {
        this._left = leftNode;
    }

    get right() {
        return this._right;
    }

    set right(rightNode) {
        this._right = rightNode;
    }
}

export default Node;