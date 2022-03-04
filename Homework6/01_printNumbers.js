function printNumbersFrom1to20(){
    var i = 1;
    var output = document.getElementById('output1');
    while (i <= 20){
        output.innerHTML = output.innerHTML + i + ' ';
        i = i + 1;
    }
}
