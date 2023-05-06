let element = document.getElementById("myClock")
const days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
setInterval(function() {
    let today = new Date(),
    date = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ' ' + days[today.getDay()];

    element.innerHTML = date;
}, 1000);