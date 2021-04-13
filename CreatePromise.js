const lotteryPromise = new Promise(function(resolve, reject){
    if(Math.random >= 0.5){
        resolve("you won");
    }
    else{
        reject("you lost");
    }
})

lotteryPromise.then(function(response){
    console.log(response);
}).catch(err => console.log(err))