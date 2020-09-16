// Bài 2:
var countryArray = new Array();
var persents = new Array();
countryArray[0] = "Anh";
countryArray[1] = "Phap";
countryArray[2] = "Duc";
countryArray[3] = "Nga";
countryArray[4] = "Nhat";
countryArray[5] = "Viet Nam";
countryArray[6] = "HoaKy";
function renderForm() {
    var data = "";
    for (var i = 0; i < countryArray.length; i++) {
        data =data + countryArray[i] +"<input type='text' width='30px' id='" +countryArray[i] +"'/> <br/>";
    }
    return data;
}
document.getElementById("country").innerHTML = renderForm();

function _style_Line_Chart(countryArray, persents) {
    for (var i = 0; i < countryArray.length; i++) {
        var idStyle = document.getElementById("barLine" + countryArray[i]);
        if (persents[i] != "") {
            idStyle.style.height = "25px";
            idStyle.style.width = persents[i] * 2 + "px";
            idStyle.style.background = "red";
        } else {
            idStyle.style.width = "0px";
        }
    }
    return;
}

function drawLineBar() {
    var data = "";
    for (i = 0; i < countryArray.length; i++) {
        persents[i] = document.getElementById(countryArray[i]).value;
        data +=
            "<tr><td>" +
            countryArray[i] +
            "</td><td class='result'> <div id='" +
            "barLine" + countryArray[i] + "'></div>" + persents[i] + "%</td>";
    }
    document.getElementById("barLine").innerHTML = data;
    console.log(persents);
    _style_Line_Chart(countryArray, persents);
    return;
}
