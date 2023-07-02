let myName = document.querySelector("#myName");
myName.innerHTML = prompt("Isminizi Giriniz");

let timeAndDate = document.querySelector("#myClock");
let date = new Date();
let days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];
let dayName = days[date.getDay()];

function time(){
    var d = new Date();
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    timeAndDate.innerHTML = `${h + ":" + m + ":" + s} ${dayName}`;
}

setInterval(time,1000);