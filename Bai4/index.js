function draw(rows) {
    var string = '';
    for (i = 1; i <= rows; i++) {
        for (j = i; j >= 1; j--) {
            string = string + ' &nbsp; ' + LayDu(j);
        }
        string = string + '</br>';
    }
    return string;
}

function LayDu(num) {
    return num % 10;
}

function VeTamGiac() {
    var rows = document.getElementById('rows').value;
    console.log(rows);
    // Draw tam giac
    // console.log(draw(parseInt(rows)));
    document.getElementById('result').innerHTML = draw(parseInt(rows));
};
