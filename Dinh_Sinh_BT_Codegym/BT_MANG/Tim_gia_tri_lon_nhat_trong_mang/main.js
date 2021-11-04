let numbers = [-3, 5, 1, 3, 2, 10];
let show = "";
for(let number of numbers) {
    show += number + " ";
}
document.getElementById("show").innerHTML = "Mảng ban đầu là : " + show;

function start() {
    let max = numbers[0];
    let index = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
            index = i;
        }
    }

    alert("max: " + max + " at position " + index);
}