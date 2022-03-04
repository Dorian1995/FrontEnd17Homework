function printOddNumbersFrom1to20() {
	var i = 1;
	var output = document.getElementById('output2');
	for (var i = 1; i <= 20; i++) {
		if (i % 2 != 0) {
			output.innerHTML = output.innerHTML + i + ' ';
		}
	}
}

