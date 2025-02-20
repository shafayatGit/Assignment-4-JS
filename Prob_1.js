function calculateVAT(amount) {
    let vat = amount * 0.075;

    if(typeof(amount) !== 'number' || amount < 0){
        return 'Invalid';
    }
    
    
    return vat;
}
let result = calculateVAT("foo");
console.log(result)
