function showtime() {
    var time = new Date();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    if (hour > 0 && hour < 12) {
        document.querySelector("#timer").innerHTML = "Bom dia, visitante."
    } else if (hour > 12 && hour < 18) {
        document.querySelector("#timer").innerHTML = "Boa tarde, visitante."
    } else {
        document.querySelector("#timer").innerHTML = "Boa noite, visitante."
    }
}

function initTime() {
    setInterval(showtime, 1000);
}