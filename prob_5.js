function calculateSleepTime(Array){
    sum = 0;
    for( let arr of Array){
        if(typeof(arr) === 'number'){
            sum = sum + arr;
        }
        else{
            return 'Invalid'
        }
    }
    
    let hour = parseInt(sum/3600);
    let second = sum%3600;
    let min = parseInt(second / 60);
    second = parseInt(min%60);

    
    let result = `hour: ${hour}  minute: ${min}  second: ${second}` 
    return result;
    }
    

let second = [100, 3800, "90" ];
let output = calculateSleepTime(second);
console.log( output )