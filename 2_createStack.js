function createStack() {
       const items = [];
       // items was moved to a variable inside the scope createStack()…

       // out of scope createStack(), 

       // now there is no way to access the array items or change it. Elements are now private and the stack is encapsulated: only methods push() and pop() are public. 
       return {
         push(item) {
           items.push(item);
         },
         pop() {
           return items.pop();
         }
       };
     }
     
     const stack = createStack();
     stack.push(10); // -> [10]
     stack.push(5); // -> [10 , 5]
     stack.pop(); // => 5


    // In this soln encapsulation cannot be broken
    console.log(stack.items) // you cannot access items outside now