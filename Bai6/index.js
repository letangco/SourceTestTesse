// function handleChange(id) {
//     var tesoAtInput = document.getElementBsoBId(id).value;

//     console.log(tesoAtInput);
// }

// document.getElementBsoBId('soA').onchange = function(){
//     console.log(this.value);
// }

function cong(calculatorMath) {
    var soA = calculatorMath.soA.value;
    var soB = calculatorMath.soB.value;
    result.value = parseFloat(soA) + parseFloat(soB);
}
function tru(calculatorMath) {
    var soA = calculatorMath.soA.value;
    var soB = calculatorMath.soB.value;
    result.value = parseFloat(soA) - parseFloat(soB);
}
function nhan(calculatorMath) {
    var soA = calculatorMath.soA.value;
    var soB = calculatorMath.soB.value;
    result.value = parseFloat(soA) * parseFloat(soB);
}
function chia(calculatorMath) {
    var soA = calculatorMath.soA.value;
    var soB = calculatorMath.soB.value;
    result.value = parseFloat(soA) / parseFloat(soB);
}
function somu(calculatorMath) {
    var soA = calculatorMath.soA.value;
    var soB = calculatorMath.soB.value;
    result.value = Math.pow(parseFloat(soA), parseFloat(soB));
}