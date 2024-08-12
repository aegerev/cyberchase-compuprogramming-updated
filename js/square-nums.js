function squareNumbers(arrNums){
    const squareArray = [];
    for(let squareNum of arrNums){
      squareNum = squareNum * squareNum;
      squareArray.push(squareNum);
  
    }
    return squareArray;
  }
  
//Do not change the code below
if (typeof module !== 'undefined') {
    module.exports = { squareNumbers };
  }