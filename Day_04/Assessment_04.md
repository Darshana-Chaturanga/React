### 1. What are the three states of a Promise?

A `Promise` can be in one of three states:

- **Pending**: The initial state, neither fulfilled nor rejected.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed.

### 2. How does the async keyword affect a function's return value?

- **`async`**: This keyword is used to declare a function as asynchronous. An `async` function always returns a `Promise`. If the function returns a value, the `Promise` is resolved with that value. If the function throws an error, the `Promise` is rejected with that error.

### 3. Explain the purpose of the await keyword.

- **`await`**: This keyword can only be used inside an `async` function. It pauses the execution of the `async` function and waits for the `Promise` to resolve or reject. Once the `Promise` is settled, it resumes the execution of the function and returns the resolved value. If the `Promise` is rejected, it throws the error.

### 4. What is a callback function and how is it used in asynchronous operations?

A `callback` is a function that is passed as an argument to another function and is executed after some operation has been completed. Callbacks are used to handle asynchronous operations in JavaScript, allowing you to continue executing code while waiting for an operation to complete.

### 5. Describe the role of the event loop in JavaScript.

The `Event Loop` is a fundamental concept in JavaScript that allows for non-blocking, asynchronous operations. It is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. The event loop enables JavaScript to perform asynchronous operations without blocking the main thread, making it possible to handle multiple tasks concurrently.


### 6. Write a function called delayedGreeting that takes a name as an argument and logs a greeting message to the console after a 2-second delay using setTimeout. Use a callback function to achieve this.

```javascript
//define delayedGreeting
function delayedGreeting(name) {
     console.log(`hello, ${name}..`);
}

//define callback function
function processData(callback){
     setTimeout(()=>{
          let name = "john" ;
          callback(name);
     }, 2000);
}

// call the function
processData(delayedGreeting);
```



