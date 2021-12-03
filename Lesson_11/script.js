// let age = parseInt(prompt());


// if (age > 18) {
//     alert("Your age older enough ");
    
// } else {
//     alert("Your age older not enough");

// }




// var text = " ";
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// for (let x in cars ) {
//  text += cars[x] + " ";
//     }

 

// document.getElementById("demo").innerHTML = text;

const numbers = [45, 4, 9, 16, 25];

let text = " ";

numbers.forEach(myFunction);


function myFunction(itself) {
    text += itself + " ";
}

document.getElementById("demo").innerHTML = text;



