function willSuccess(marks) {
    let pass = [];
    let fail = [];
    if( typeof(marks)=== 'object'){
        for (let arr of marks) {
            if (arr >= 50) {
                pass.push(arr);
            } 
            else {
                fail.push(arr)
            }
    
        }
    
        if (pass.length > fail.length) {
            return true;
        } 
        else {
            return false;
        }
    }

    else{
        return 'Invalid'
    }
}
let marks = 90;
let result = willSuccess(marks)
console.log(result);