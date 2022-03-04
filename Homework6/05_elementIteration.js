var array = [ 1, 2, 2, 2, 2, 4, 7, 8 ];
var x = 2;

function iterationOfArrElems(array, x){
    var count = 0;
    for (var i=0; i <= array.length - 1; i++){
        if (array[i] == x){
         count++;
        }
    }
    return count;
}   
console.log(x + " occurs " + iterationOfArrElems(array, x) + " times");
