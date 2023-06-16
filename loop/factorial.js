function 	computFactorial(num) {
    let results = 1;
    for (let i =2; i<=num; i++)
    {
        results = results * i ;
    }
    return results;
}

console.log(computFactorial(120));



function computeFactorial(nums) {
    if (nums ==1) {
        return 1;
    } else {
        return nums * computeFactorial(nums-1);
        
    }
    
}
console.log(computeFactorial(5));
