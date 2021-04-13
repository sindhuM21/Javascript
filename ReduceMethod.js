const movements = [1,2,4,5,6,7,8];

const globalReduce = movements.reduce(function(acc, movement, index, arr){
    console.log(`${acc}:: ${movement}`);
    console.log( movement + acc );
    return movement + acc;
}, 1);

console.log(globalReduce);