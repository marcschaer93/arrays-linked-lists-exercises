/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

    /** _get(idx): retrieve node at idx. */

  _get(idx) {
    let current = this.head;
    let count = 0;

    while (current !== null && count != idx) {
      count += 1;
      current = current.next;
    }

    return current;
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if (!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
     
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head
      this.head = newNode
    }

    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length -1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid Index")
    }
    return this._get(idx).val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Invalid Index")
    }

    let nodeToSetValue = this._get(idx)
    nodeToSetValue.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0){
      throw new Error("Invalid Index")
    }

    // Insert at the beginning
    if(idx === 0) {
      return this.unshift(val)}

    // Insert at the end
    if(idx === this.length) {
        return this.push(val)
      }
      
    let newNode = new Node(val);
 
    // Insert in the middle
    let prev = this._get(idx - 1)
    newNode.next = prev.next
    prev.next = newNode

    this.length += 1;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0){
      throw new Error("Invalid Index")
    }
    
    let prev = this._get(idx-1)
    
    // remove first Item (head)
    if (idx === 0){
      let val = this.head.val
      this.head = this.head.next
      this.length -= 1;
      if(this.length === 0){
        this.tail = null
      }
      return val
    }
    
    // remove last Item (tail)
    if(idx === this.length -1) {
      let val = this.tail.val
      prev.next = null
      this.tail = prev
      this.length -= 1;
      return val
    }
    
    // remove middle item
    let val = prev.next.val 
    prev.next = prev.next.next
    this.length -= 1;
    return val
  }


  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let sumOfList = 0

    if(this.length === 0){
      return 0
    }

    while (current) { // while not null
      sumOfList += current.val
      current = current.next; 
    }
    let average = (sumOfList / this.length)
    return average
  }
}

module.exports = LinkedList;
