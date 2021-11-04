var nums = [];
for(var i = 0; i < 100; i++){
    nums[i] = Math.floor(Math.random() * 101);
}

let show = "";
for(let num of nums) {
    show += num + " ";
}
document.getElementById("show").innerHTML = "<hr> Mảng ban đầu là : <br>" + show;

function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
function showMin() {
    var minValue = findMin(nums);
    alert("The minimum value is: " + minValue);
}

function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max
}

function showMax() {
    var maxValue = findMax(nums);
    alert("The maximum value is: " + maxValue);
}