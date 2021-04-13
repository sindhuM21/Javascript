const dogsAge = [2, 5, 1, 7, 4, 6, 1, 7];
function calAverageHumanAge (ages) {
    const humanAge = ages.map(function(age){
        return age <= 2 ? age * age : 16 + age * 4
    })
}

calAverageHumanAge(dogsAge);
console.log("human ages", humanAge)


