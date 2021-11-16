function minArray(arr) {
    if(arr.length == 0)
        return "Mảng Rỗng";
    let min = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}
let arr1 = [3, 5, 1, 8, -3, 7, 8];
let min1 = minArray(arr1);
alert(min1);

let arr2 = [7, 12, 6, 9, 20, 56, 89];
let min2 = minArray(arr2);
alert(min2);

let arr3 = [];
let min3 = minArray(arr3);
alert(min3);

let arr4 = [0, 0, 0, 0, 0, 0];
let min4 = minArray(arr4);
alert(min4);
