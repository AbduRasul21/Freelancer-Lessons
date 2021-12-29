// Syntax
// function myFunction() {
//     return "Please enter something...";

// }

// with JS
// window.onbeforeunload = function myFunction(event) {
//   event.returnValue = "Please enter something...";
// };

// with addEventListener JS

// window.addEventListener("beforeunload", function myFunction(event) {
//   event.returnValue = "Please enter something...";
// });

document.getElementById("myDetails").ontoggle = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("myDetails").style.color = "red";
}
