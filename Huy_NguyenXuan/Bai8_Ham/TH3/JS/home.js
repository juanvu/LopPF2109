let numbers = [-3,55,62,123,1,2,1,1254,0];
let max = numbers[0];
let index = 0;
for (let i=0; i< numbers.length;i++) {
    if (numbers[i] > max ) {
        max = numbers[i];
        index = i;
    }   
}
alert("Number max is " + max + " at position " + index);