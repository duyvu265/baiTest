// - tim so lon thu 2 trong mang
let arr=[1,2,3,4,5,6,7,9];
let max=arr[0]
for (let i = 0; i < arr.length; i++) {
    if (max<arr[i]){
        max=arr[i];
    }
}
console.log(arr[arr.length-2])





// Ta định nghĩa 1 mảng có tính chất lẻ, khi tổng của 2 phần tử liên tiếp luôn là lẻ. Kiểm tra mảng có tính chất lẻ hay không
let arr1 = [1, 2, 1, 4];
let sum = 0;
let rs="mang le"
for (let i = 0; i <= arr1.length; i++) {
    sum = arr1[i] + arr1[i + 1];
    if (sum%2===0){
        rs="mang chan";
        break;
    }
}
console.log( rs)
