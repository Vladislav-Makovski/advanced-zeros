module.exports = function getZerosCount(number, base) {
  let copyBase = base;
  let result = 0;
  let divisionResult = 0;
  let minimum = [];
  let simpleDividers = [];
  let divisorDegrees = [];
  for (let i = 2; i <= base; i++) {
  if(copyBase === 1){break;}
  if(copyBase % i === 0){
   if(simpleDividers.length === 0){
     simpleDividers.push(i);
     divisorDegrees[0] = 1;
     copyBase /= i;
     i--;
   }else if(simpleDividers[simpleDividers.length - 1] === i){
     divisorDegrees[simpleDividers.length-1]++;
     copyBase /= i;
     i--;
   }else{
     simpleDividers.push(i);
     divisorDegrees[simpleDividers.length - 1] = 1;
     copyBase /= i;
     i--;
   }
  }
}
for(let j = simpleDividers.length - 1; j >= 0; j--){
  let temp = simpleDividers[j];
while(temp <= number){
divisionResult += Math.floor(number / temp);
temp *= simpleDividers[j]; 
}
minimum[j] = Math.floor(divisionResult/ divisorDegrees[j]);
divisionResult = 0;
}
result = minimum[0];
for (let i = 1; i < minimum.length; i++) {
  if(result > minimum[i]){
    result = minimum[i];
  }
}
return result;
}