var arr = [1, 4, 5, 10];
var i = 0;

function sumOfArrElems(arr) {
	var sum = 0;
	var output = document.getElementById('output3');
	for (var i = 0; i <= arr.length - 1; i++) {
		sum = sum + arr[i];
	}
    output.innerHTML = output.innerHTML + sum + ' ';
}
