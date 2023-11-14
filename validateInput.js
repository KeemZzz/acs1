function charAtDemo() {
    var myText = "Comm,Separated,Values";
    var indexOfFirstComma = myText.indexOf(",");
    console.log(indexOfFirstComma);
    //document.getElementById("charAt").innerHTML = sum;
}



function validateInput(event){
    event.preventDefault();
    let firstName = document.getElementById("fname").value;
    console.log(firstName);
    let lastName = document.getElementById("lname").value;
    console.log(lastName);
    let zip = document.getElementById("zip").value;
    console.log(zip);
    //concentrate first and last name variables
    let firstLast = firstName + " " + lastName;
    console.log(firstLast);
    if(firstLast.length < 20){
        alert("Not enough characters. Your first and last name must have at least 20 characters.");
        return false;
    }
    // check if zip has 5 characters and is a number.
    if(zip.length != 5 || (!Number.isInteger(parseInt(zip)) && parseInt(zip) > 9999)){
        alert.apply("Invalid zip code. Zip must be a number of 5 digits.");
        console.log(typeof zip)
        return false;
    }
    console.log("Validated!");
}
window.addEventListener("DOMContentLoaded", (event) => {
    const form = document.getElementById("myForm");
    if (form){
        form.addEventListener("Submit", validateInput);
    }
});
