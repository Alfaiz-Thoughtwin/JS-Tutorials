console.log("Asynchronous Programming | JavaScript");

/*
Few Ways To Write Asynchronous Code In JavaScript :
1. Async/await
2. Callback
3. Promises
*/


setTimeout(() => {
    for (let i = 0; i < 4005; i++) {
        console.log(`This is index number ; ${i}`);
    }
}, 100);
console.log('done printing');