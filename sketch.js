//target number.
var targetNumber;
//The two arrays to work with
var set1 = [];
var set2 = [];
//The answer array
var answer = [];
//To find out which number is closer.
let difference;
let bestDifference=10;

//function that properly removes duplicate numbers.
function uniq(numeroo) {
    return numeroo.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}

function setup(){
//Adds a random targetNumber.
    targetNumber=round(random(1,10));
//Adds a random amount of random numbers to set 1 and 2.
    for (let randomSet1 = 0; randomSet1 < random(1,10); randomSet1++) {
set1.push(round(random(0,9)));    
}

for (let randomSet2 = 0; randomSet2 < random(1,10); randomSet2++) {
    set2.push(round(random(0,9)));    
    }
//Sorting the arrays to ascending numbers.
set1.sort();
set2.sort();
//consolelogs the arrays and targetnumber.
set1 = uniq(set1);
set2 = uniq(set2);
console.log(targetNumber+ '\n' + set1 + '\n' + set2);


//Running through set1.
for (let a = 0; a < set1.length; a++) {    
//Running through set2.
    for (let b = 0; b < set2.length; b++) {
//Gets the sum of the two numbers.
    let sumOfArray = set1[a]+set2[b];
//get the difference from our targetNumber.
    difference = sumOfArray-targetNumber;
if (difference<0){difference*=-1;}

if (difference==bestDifference){
    if (difference==0){
        answer.push([set1[a],set2[b]]);
    } else {answer.push([difference,set1[a],set2[b]]);}
    
}
//resets answer if we got a better one.    
if (bestDifference>difference){
    bestDifference = difference;
    answer=[];
if (bestDifference!=0){
answer.push([difference,set1[a],set2[b]]);} else {
answer.push([set1[a],set2[b]]);
}
}



}

}

console.log(answer);
}
