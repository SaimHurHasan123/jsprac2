
function changeHours() {

    let hours = parseInt(document.getElementById("inputHours").value);
    let h1 = hours;
    let multiply = 1;
    let g = 0;
    if (document.getElementById("hoursToMin").checked) {
        multiply= 60;
        g = 1;
    }
    if (document.getElementById("hoursToSec").checked){
        multiply = 60*60;
        g = 2;
    }
    hours *= multiply;
    if (g == 1) {
        document.getElementById('result').innerText = h1 + " " + 'hours' + " " + "=" + " "+  hours + " " + 'mins';
    }

    if (g == 2) {
        document.getElementById('result').innerText = h1 + " " + 'hours' + " " + "="+ + hours + " " + 'secs';
    }
}