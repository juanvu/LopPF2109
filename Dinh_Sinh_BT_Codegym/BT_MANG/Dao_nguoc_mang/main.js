let x = [-3, 5, 1, 3, 2, 10]; 
let show = "";
for(let number of x) {
    show += number + " ";
}
document.getElementById("show").innerHTML = "Mảng ban đầu là : " + show;

let lastX = x.length-1;
let startX = 0;

let showReverse = '';
function reverseX() {
    while(startX < lastX) {
        let varX = x[startX];
        x[startX] = x[lastX];
        x[lastX] = varX;
        startX++;
        lastX--;
    }
    for(let i = 0 ; i < x.length ; i++) {
        showReverse += x[i] + " ";
    }
}

function start() {
    reverseX();
    alert("Mảng sau khi đảo ngược là : " + showReverse)
}