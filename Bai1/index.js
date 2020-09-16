// Bài 1:
function renderBox1to5() {
    for (var i = 1; i <= 5; i++) {
        document.write("<td>");
        for (var j = 1; j <= 10; j++) {
            document.write(i + " x " + j + " = " + (i * j) + '</br>');
        }
        document.write("</td>");
    }
}
function renderBox6to10() {
    for (var i = 6; i <= 10; i++) {
        document.write("<td>");
        for (var j = 1; j <= 10; j++) {
            document.write(i + " x " + j + " = " + (i * j) + '</br>');
        }
        document.write("</td>");
    }
}

function bangcuuchuong() {
    document.write("<table border = '1px'><tr>");
    renderBox1to5();
    document.write("</tr><tr>");
    renderBox6to10();
    document.write("</tr></table>");
    return '';
}
document.getElementById('bang-cuu-chuong').innerHTML = bangcuuchuong();

