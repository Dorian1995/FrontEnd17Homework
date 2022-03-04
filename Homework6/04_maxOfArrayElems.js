var arr = [1, 4, 5, 10];
var max = arr[0];

function maxOfArrElems(arr){
    var output = document.getElementById('output4');
    for (var i = 1; i <= arr.length-1; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    output.innerHTML = output.innerHTML +  max;
}

