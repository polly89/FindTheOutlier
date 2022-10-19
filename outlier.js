function outlier(integers){
    let oddArr = [];
    let evenArr = [];

    for(let i = 0; i < integers.length; i++){
        if (integers[i] % 2 === 0){
            evenArr.push(integers[i]);
        } else{
            oddArr.push(integers[i])
        }
    }
    if(evenArr.length > oddArr.length){
        return oddArr[0];
    }else{
        return evenArr[0];
    }
}
let sampleArr = [2, 4, 0, 100, 4, 11, 2602, 36]
let sampleArr2 = [160, 3, 1719, 19, 11, 13, -21]

console.log(outlier(sampleArr))
console.log(outlier(sampleArr2))

// First create two empty variables to store your odd and even numbers. 
// Next, loop through the array of integers you want to test. 
// If the intergers are divisible by 2 they will be added to the evenArr. 
//If not, they will be added to the odd array. 
// Finally, check to see which array is smaller. The smaller array will contain
//your outlier. Another way to check it would be to see if the array is === 0. 