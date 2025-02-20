function isBestFriend(input1,input2){

    if( typeof(input1) === 'object' && typeof(input2) === 'object'){
        if(((input1['bestFriend']) === (input2['roll'])) && ((input1['roll']) === (input2['bestFriend']))){
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


    
    
    let result = isBestFriend({ name: "hashem", roll: 1 , bestFriend: 1},
        { name: "kashem" , roll: 1, bestFriend: 1 } );
    console.log(result)


    

    

