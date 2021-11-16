let txtValue = prompt('Enter a number: ');
let numbers = [-3,5,6,12,2,5,10];
for (i= 0; i < numbers.length;i++) {
    if (txtValue == numbers[i]) {
        alert("Value " + numbers[i] + " found at " + i);
    }
}