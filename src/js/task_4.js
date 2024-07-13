const applyCallbackToEachElement = (arr, callback) => {
    return arr.map(callback);
}

const arr = [1, 2, 3, 4, 5];
const squareCallback = (num) => num * num;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result); 