const movements = [400, 833, -433, 922, 789, 322, 4322, 432, 4343, -42323, -232];
const euroTOUsd = 1.1;

const etou = movements.map(function(movement){
    return movement * euroTOUsd;
});

etou.forEach(function(move){
    console.log(move);
})

const deposits = movements.filter(function(movement){
    return movement > 0;

});

deposits.forEach(function(deposit){
    console.log("deposits",deposit)
});

const withdraw = movements.filter((movement) => movement < 0 )

withdraw.forEach((withdraw) => console.log("withdraw", withdraw))