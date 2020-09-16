function draw(rows) {
    var string = '';
    var count = 0, count1 = 0, k = 0;
    for(var i = 1; i <= rows; ++i)
    {
        for(var space = 1; space <= rows-i; ++space)
        {
            string = string + "  ";
            ++count;
        }

        while(k != 2*i-1)
        {
            if (count <= rows-1)
            {
                string = string + LayDu(parseInt(i)+parseInt(k))+" ";
                ++count;
            }
            else
            {
                ++count1;
                string = string +LayDu(parseInt(i)+parseInt(k)-2*count1)+ " " ;
            }
            ++k;
        }
        count1 = count = k = 0;

        string = string +"</br>";
    }
    console.log(string);
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
