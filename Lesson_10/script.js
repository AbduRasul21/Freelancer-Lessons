const fruits = ["Banana", "Apple", "Orange", "Mango","PineApple", "Cocos"];

let fLen = fruits.length;

let text = "<ul>";

for (let i = 0; i < fLen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}

text += "</ul>";
console.log(text);

document.getElementById("demo").innerHTML = text;
document.getElementById("demo-2").innerHTML = fruits.join("  ");
document.getElementById("demo-3").innerHTML = fruits.toString();

