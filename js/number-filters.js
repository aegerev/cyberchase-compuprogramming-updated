function filterEvenNumbers(filterNums){
    let evenNum = [];

    for(let number of filterNums){
        if(number % 2 === 0) {
            evenNum.push(number);
        }
    }
    return evenNum;
}