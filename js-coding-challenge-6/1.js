// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const numbers = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];

const answer = numbers => {
  let newArr = [];
  let arrGroup = [];
    
  numbers.sort((a, b) => a - b);
  
  console.log(numbers);
  
  let indeces = [];
  
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] === numbers[j + 1]) {
      let index = numbers.indexOf(numbers[j]);
      indeces.push(index);
    }
  }
  
  const uniqueIndeces = [...new Set(indeces)];
  
  console.log(uniqueIndeces)
    
  for (let k = 0; k < uniqueIndeces.length; k++) {
    arrGroup.push(numbers[uniqueIndeces[k]]);
    
    console.log(arrGroup);
      
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] === numbers[i + 1]) {
        if (arrGroup[0] === numbers[i]) {
          arrGroup.push(numbers[i]);
        }
      }
    }

    let spliced = numbers.splice(0, arrGroup.length);
    
    numbers.unshift(arrGroup);
    
    newArr.push(spliced);

    arrGroup = [];
        
    break;
  }
  
  return newArr;
};

console.log(answer(numbers));