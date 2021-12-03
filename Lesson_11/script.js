// let age = parseInt(prompt());


// if (age > 18) {
//     alert("Your age older enough ");
    
// } else {
//     alert("Your age older not enough");

// }




// var text = "<ul id='ddd'>";
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// for (var x of cars ) {
//  text += "<li>" + x + "</li>";
//     }

//  var text = text + "</ul>";

// document.getElementById("demo").innerHTML = text;
// document.getElementById("ddd").style.listStyleType = "disc";


const numbers = [45, 4, 9, 16, 25];

let text = " ";

numbers.forEach(myFunction);


function myFunction(itself) {
    text += itself + " ";
}

document.getElementById("demo").innerHTML = text;



