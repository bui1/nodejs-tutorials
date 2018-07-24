var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === "number" && typeof b === "number"){
                resolve(a + b);
            }
            else{
                reject("Arguments must be numbers");
            }
        }, 1500);
    });
};

// var somePromise = new Promise((resolve,reject) => {
//     resolve("Hey it worked!");
//     //reject("ASdASD");
// });

asyncAdd(5,7).then((message) => {
    console.log(message);
}, (errorMessage) => {
    console.log("ERROR");
});