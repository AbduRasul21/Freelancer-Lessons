const fruits = ["Banana", "Apple", "Orange", "Mango", "PineApple", "Cocos"];

let fLen = fruits.length;
let text = "<ul>";
const d=new Date();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}

text += "</ul>";
console.log(text);

document.getElementById("demo").innerHTML = text;
document.getElementById("demo-2").innerHTML = fruits.join(" ");
document.getElementById("demo-3").innerHTML = d.getFullYear();

let month = [months[d.getMonth()]];


document.getElementById("demo-3").innerHTML = d.getUTCDate();

let randomNum = Math.round(Math.random()*100)


document.getElementById("demo-3").innerHTML = randomNum;
