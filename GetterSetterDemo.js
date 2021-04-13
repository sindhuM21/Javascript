const account = {
    owner: "Jonas",
    movements: [200, 600, -599, 300],

    get latest(){
        return this.movements.slice(-1).pop();
    },
    set latest(mov){
        this.movements.push(mov);
    }
}

console.log(account.latest);

account.latest = 90;

console.log(account.movements);