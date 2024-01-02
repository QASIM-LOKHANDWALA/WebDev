// const people = ["d","c","b","a"];
// const ages = [17,18,19,20];

// for(let i=0 ; i<people.length ; i++){
//     if(ages[i]>=18){
//         console.log(`${people[i]} is ${ages[i]} years old hence is an adult.`);
//     }else{
//         console.log(`${people[i]} is ${ages[i]} years old hence is a minor.`);
//     }
    
// }
const arr = [23,47,56,89,100];
let max = arr[0];
let min = arr[0];
for(let i=0 ; i<arr.length ; i++){
    if(arr[i]>max){
        max = arr[i];
    }
    if(arr[i]<min){
        min = arr[i];
    }
}
console.log(`The max element in this array is ${max} and min element is ${min}`);
for(let i=0 ; i<arr.length ; i++){
    for(let j=1 ; j<arr.length-i ; j++){
        if(arr[j-1]>arr[j]){
            let temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
        }
    }
}
console.log(`the sorted array is ${arr}`);