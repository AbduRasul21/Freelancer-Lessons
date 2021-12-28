// Syntax
// function myFunction() {
//     return "Please enter something...";

// }

// with JS
// window.onbeforeunload = function myFunction(event) {
//   event.returnValue = "Please enter something...";
// };

// with addEventListener JS

window.addEventListener("beforeunload", function myFunction(event) {
  event.returnValue = "Please enter something...";
});
