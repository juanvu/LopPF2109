var nums = [];
for(var i=0;i<100;++i){
   nums[i] = Math.floor(Math.random() * 101);
}
let str = "";
function dispArr(arr) {
    for (var i = 0; i < arr.length; ++i) {
        str += arr[i] + " ";
        if(i%10==9){
            str += "\<br\>";
        }
    }
    if(i%10!=0){
        str += "\<br\>";
    }
    document.write(`${str}`);
}
dispArr(nums);
function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
       if (arr[i] < min) {
          min = arr[i];
       }
    }
    return min;
 }

function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
       if (arr[i] > max) {
          max = arr[i];
       }
    }
    return max;
 }

var minValue = findMin(nums);
document.write("<br/>");
document.write("The minimum value is: " + minValue);
var maxValue = findMax(nums);
document.write("<br/>");
document.write("The maximum value is: " + maxValue);