function willSuccess(array) {
    let pass = [];
    let fail = [];
    if( typeof(array)=== 'object'){
        for (let arr of array) {
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
let marks = [55, 75, 41, 33, 0, 87, 91, 30];
let result = willSuccess(marks)
console.log(result);