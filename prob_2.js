function validContact(string) {

    if(string.length === 11 ){
        if(string[0]==='0' && string[1]==='1' && typeof(string) ==='string'){
            return true;
        }
        else{
            return false
        }
    }
    else if(typeof(string) !=='string'){
        return 'Invalid';
    }
    else{
        return false;
    }


}
let number = validContact(true)
console.log(number)
