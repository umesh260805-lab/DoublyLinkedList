    class Node {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtBeginning(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    insertAtEnd(data) {
        const newNode = new Node(data);

        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    deleteFromBeginning() {
        if (this.head === null) return false;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
        }

        return true;
    }

    deleteFromEnd() {
        if (this.tail === null) return false;

        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }

        return true;
    }

    search(data) {
        let current = this.head;

        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }

        return false;
    }

    getValues() {
        let values = [];
        let current = this.head;

        while (current !== null) {
            values[values.length] = current.data;
            current = current.next;
        }

        return values;
    }
}

const list = new DoublyLinkedList();

const valueInput = document.getElementById("valueInput");
const listDisplay = document.getElementById("listDisplay");

function updateDisplay() {
    const values = list.getValues();

    if (values.length === 0) {
        listDisplay.textContent = "List is empty";
    } else {
        listDisplay.textContent = values.join(" ⇄ ");
    }
}

document.getElementById("insertBeginBtn").addEventListener("click", function () {
    const value = Number(valueInput.value);

    if (valueInput.value === "") {
        alert("Please enter a value");
        return;
    }

    list.insertAtBeginning(value);
    updateDisplay();
    valueInput.value = "";
});

document.getElementById("insertEndBtn").addEventListener("click", function () {
    const value = Number(valueInput.value);

    if (valueInput.value === "") {
        alert("Please enter a value");
        return;
    }

    list.insertAtEnd(value);
    updateDisplay();
    valueInput.value = "";
});

document.getElementById("deleteFromBeginningBtn").addEventListener("click", function () {
    if (!list.deleteFromBeginning()) {
        alert("List is empty");
    }

    updateDisplay();
});

document.getElementById("deleteFromEndBtn").addEventListener("click", function () {
    if (!list.deleteFromEnd()) {
        alert("List is empty");
    }

    updateDisplay();
});

document.getElementById("searchBtn").addEventListener("click", function () {
    const value = Number(valueInput.value);

    if (valueInput.value === "") {
        alert("Please enter a value");
        return;
    }

    if (list.search(value)) {
        alert("Value found");
    } else {
        alert("Value not found");
    }
});

updateDisplay();
