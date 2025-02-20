function validProposal(input1, input2){
    
    if( typeof(input1) === 'object' && typeof(input2) === 'object'){
        if((input1['gender'] !== input2['gender']) && (Math.abs(input1['age']-input2['age'])<=7)){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'Invalid'
    }
    
}

let willMarry = validProposal({ name: "mitu", gender: "male", age: 32 }, "Mizan" )

console.log(willMarry);