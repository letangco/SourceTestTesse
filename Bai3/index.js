var hour = document.getElementById('hour');
var minute = document.getElementById('minute');
var second = document.getElementById('second');

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

function renderTime(time) {
    var temp = '';
    if (time < 10) {
        temp = temp + '0' + time.toString();
    }
    else temp = temp + time.toString();
    return temp;
}

start.onclick = function () {
    var countSecond = 0;
    var countMinute = 0;
    var countHour = 0;
    var _second = setInterval(() => {
        if (countSecond > 9) {
            minute.innerHTML = renderTime(++countMinute);
            countSecond = 1;
            second.innerHTML = renderTime(countSecond);
            if (countMinute > 59) {
                hour.innerHTML = renderTime(++countHour);
                countMinute = 0;
                minute.innerHTML = renderTime(countMinute);
            }
        }
        else {
            second.innerHTML = renderTime(++countSecond);
            minute.innerHTML = renderTime(countMinute);
            hour.innerHTML = renderTime(countHour);
        }
    }, 100);
    stop.onclick = function () {
        clearInterval(_second);
    };
    reset.onclick = function () {
        clearInterval(_second);
        hour.innerHTML = "00";
        minute.innerHTML = "00";
        second.innerHTML = "0";
    }
}

