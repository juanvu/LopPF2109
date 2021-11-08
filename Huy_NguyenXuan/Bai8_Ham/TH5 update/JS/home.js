let nums = [];
for (var i=0; i<20; i++) {
    nums[i] = Math.floor(Math.random() * 100);
}

let show = '';
for (let num of nums) {
    show += num + ' ';
}
document.getElementById('randomNum').innerHTML = show;

function findReserve(arr) {
    let first = 0;
    let last = arr.length - 1;
    while (first < last) {
        var b = arr[first];
        arr[first] = arr[last];
        arr[last] = b;
        first++;
        last--;
    }
    return arr;
}
function result() {
    let result = findReserve(nums).join(' - ');
    document.getElementById('showResult').innerHTML = result;
}