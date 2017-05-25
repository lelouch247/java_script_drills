var arr = [5, 6, 7, 2]

var arrAvg = arr.reduce(addDivide, 0);

function addDivide(a, b) {
    return a + b / 4;
}

console.log(arrAvg)
