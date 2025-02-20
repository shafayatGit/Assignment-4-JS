function electionResult(array){
    let mango = [];
    let banana = [];
    
    if( Array.isArray(array)){
        for( let arr of array){
            if( arr === 'mango'){
                mango.push(arr);
            }
            else if ( arr === 'banana'){
                banana.push(arr);
            }
        }
    
        if( mango.length > banana.length){
            return 'Mango';
        }
        else if( mango.length < banana.length){
            return 'Banana';
        }
        return 'Draw';
    }
    return 'Invalid'
}
let array = ["mango", "BananA", "na vote", "na vote"]
let result = electionResult(array);
console.log(result)
