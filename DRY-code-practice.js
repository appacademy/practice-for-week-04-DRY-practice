
function multiplyBigNumByTwo(num1, num2) {
  // Your code here
let bigNum;
if (num1 > num2) {
  bigNum = num1;
  return bigNum * 2;
} else {
  bigNum = num2;
  return bigNum * 2;
}
}

function divideBigNumByThree(num1, num2) {
  // Your code here
  let bigNum;
  if (num1 > num2) {
    bigNum = num1;
    return bigNum / 3;
  } else {
    bigNum = num2;
    return bigNum / 3;
  }
}

function eatMostTacos(sum1, sum2) {
  // Your code here
  let bigNum;
  if (sum1 > sum2) {
    bigNum = sum1;
    return `I ate ${bigNum} tacos.`;
  } else {
    bigNum = sum2;
    return `I ate ${bigNum} tacos.`;
  }
}

function adoptSmallerDog(weight1, weight2) {
  // Your code here
  let smallDog;
  if (weight1 < weight2) {
    smallDog = weight1;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  } else {
    smallDog = weight2;
    return `I adopted a dog that weighs ${smallDog} pounds.`;
  }
}