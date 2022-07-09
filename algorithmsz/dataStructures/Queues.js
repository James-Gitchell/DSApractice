/* Queues */

function Queue () {
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element) {
        collection.push(element);
    };
    this.dequeue = function() {
        return collection.shift();
    };
    this.front = function() {
        return collection[0];
    }
    this.size = function(){
        return collection.length;
    };
    this.isEmpty = function() {
    return (collection.length === 0);
    }
};

let q = new Queue();
q.enqueue('a');
q.enqueue('b')
q.enqueue('c')
q.print();
q.dequeue();
console.log(q.front());
q.print();
q.enqueue('a')



function priorityQueue() {
    let collection = [];
    this.printCollection = function() {
        (console.log(collection));
    };
    this.enqueue = function(element) {
        if (this.isEmpty()){
            collection.push(element);
        } else {
            let added = false;
            for (let i = 0; i < collection.length; i++){
                if (element[1] < collection[i][1]){ //checking priorities
                collection.splice(i,0,element);
            added = true;
        break;
    }
}
if (!added){
    collection.push(element);

            }
        };
    };
    this.deque = function(){
        let value = collection.shift();
        return value[0];
    };
    this.front = function(){
        return collection[0];
    };
    this.size = function() {
        return collection.length;
    };
    this.isEmpty = function() {
        return ( collection.length === 0 );
    };
}

// using priority queues


//pq will enque in order of the added index

let pq = new priorityQueue()
pq.enqueue(['ana sykes', 4]);
pq.enqueue(['ayesha ahmad', 1])
pq.enqueue(["random lady two", 2])
pq.enqueue(["random third girl", 3])


//pq will enque in order of the added index
