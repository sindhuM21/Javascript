const movements = [400, 833, -433, 922, 789, 322, 4322, 432, 4343, -42323, -232];

const findMovement = movements.find(function(movement){
    if(movement < 0){
        return movement
    }
});

console.log("find movement", findMovement);

const account = [{
    owner: "Sidhi",
    movements: [400, 833, -433, 922]
},
{
    owner: "kadhi",
    movements: [400, 833, -433, 922]
},
{
    owner: "kadhi",
    movements: [400, 833, -433, 922]
}]

const sidhi = account.find(acc => acc.owner === "Sidhi");
console.log("Sidhi", sidhi);