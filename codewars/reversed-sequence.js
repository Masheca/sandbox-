// Build a function that returns an array of integers from n to 1 where n>0.
// Example : n=5 --> [5,4,3,2,1]

const n = n
let arr =[n]
for (let i = n; i > 0; i--) {
    arr[i] = i;
console.log(arr[i]);
}



arr = Array.from({length: 20}, (e, i)=> i)
console.log(arr)