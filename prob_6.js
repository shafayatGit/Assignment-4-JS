function validEmail(email){
    if(typeof(email)==='string'){
        for ( let mail of email ){
            if((mail[0] !=='.' || mail[0] !=='-' || mail[0] !=='_' || mail[0] !=='+' || mail[0]!=='@') && (mail.includes('@')) && (mail.includes !==' ') && (mail.endsWith('.com')) ){
                return true
            }
            return false;
        }
    }
    return 'Invalid'
    
}
let result = validEmail(['-ferdous@gmail.com']);
console.log(result)