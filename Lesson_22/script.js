// JavaScript basic [150 exercises with solution]

// ----------------------------------------------------------------#1
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;

  case 1:
    day = "Monday";
    break;

  case 2:
    day = "Tuesday";
    break;

  case 3:
    day = "Wednesday";
    break;

  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;

  default:
    break;
}

var currentDay = document.getElementById("currentDay");
var currentTime = document.getElementById("currentTime");
const d = new Date();
const time = d.toLocaleTimeString();
currentDay.innerHTML = "Today is: " + day;
currentTime.innerHTML = "Current time is:" + time;

// ----------------------------------------------------------------#2

function print_current_window() {
  window.print();
}

// ----------------------------------------------------------------#3

const dd = d.getDate();
const mm = d.getMonth() + 1;
const yy = d.getFullYear();

if (dd < 10) {
  dd = "0" + dd;
}

if (mm < 10) {
  mm = "0" + mm;
}

console.log(mm + "-" + dd + "-" + yy);
console.log(mm + "/" + dd + "/" + yy);
