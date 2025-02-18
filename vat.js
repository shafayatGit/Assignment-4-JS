function calculateVAT(amount) {
    let moneyWithVat = amount * 0.075;

    if(amount !== typeof(number) && amount < 0){
        return 'Invalid'
    }
    return moneyWithVat;
}
let result = calculateVAT(500);
console.log(result)