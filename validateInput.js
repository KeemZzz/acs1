function charAtDemo() {
    var myText = "Comm,Separated,Values";
    var indexOfFirstComma = myText.indexOf(",");
    console.log(indexOfFirstComma);
    
}

function validateInput(event) {
    event.preventDefault();

    let firstName = document.getElementById("fname").value;
    console.log(firstName);

    let lastName = document.getElementById("lname").value;
    console.log(lastName);

    let zip = document.getElementById("zip").value;
    console.log(zip);

   
    let firstLast = firstName + " " + lastName;
    console.log(firstLast);

    
    if (firstLast.length < 20) {
        alert("Not enough characters. Your first and last name must have at least 20 characters.");
        return false;
    }

    
    if (zip.length !== 5 || isNaN(zip)) {
        alert("Invalid zip code. Zip must be a number of 5 digits.");
        return false;
    }

    console.log("Validated!");
}


window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm");
    if (form) {
        form.addEventListener("submit", validateInput); 
    }
})
