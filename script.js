
/*---------------------------------------------------------------------------------*/
/* Implementing QUEUE Data Structure */
/*---------------------------------------------------------------------------------*/

//Queue() as a function constructor
function Queue() {
    var items = [];
    
    //Adding elements to QUEUE
    this.enqueue = function(element) {
        items.push(element);
    }
    
    //Removing elemenst from QUEUE
    this.dequeue = function() {
        return items.shift();
    }
    
    //Checking first element / next element to be removed from QUEUE
    this.front = function() {
        return (items[0]);
    }
    
    //checking length of QUEUE
    this.size = function() {
        return items.length;
    }
    
    //checking whether the QUEUE is empty or not
    this.isEmpty = function() {
        return (items.length == 0);
    }
    
    //clearing all elements from QUEUE
    this.clearAll = function() {
        items = [];
    }
    
    //print the QUEUE elements to console 
    this.print = function() {
        console.log(items.toString());
    }
}

/*---------------------------------------------------------------------------------*/
/* Test Code for QUEUE Data Structure */
/*---------------------------------------------------------------------------------*/
var myQueue = new Queue();
console.log("Queue is empty ? : " + myQueue.isEmpty());

console.log("Queue length ? : " + myQueue.size());

myQueue.enqueue("first");
myQueue.enqueue("second");

console.log("Queue is empty ? : " + myQueue.isEmpty());

console.log("Queue length ? : " + myQueue.size());

myQueue.print();

console.log("Next in Queue? : " + myQueue.front());

console.log("Next in Queue? : " + myQueue.dequeue());

myQueue.print();




/*---------------------------------------------------------------------------------*/
/*    */
/*---------------------------------------------------------------------------------*/


