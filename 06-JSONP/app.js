
window.onload = function () {
    const buttonGetJSON = document.getElementById("getJSON");


    //Event listener to get JSON data with JSONP
    buttonGetJSON.addEventListener("click", function () {
            //In place to use an XHR, use a JSONP
            //First, create the script tag 
            let s = document.createElement("script");
            //Then, set the src attribute
            s.src = "json.php";
            //Finally, append the script tag to the document
            document.body.appendChild(s); //In this moment, the script returned by the php server is executed

    });
}

// Function used to load JSON data to the formulary
const loadJSONDoc = (data)=>{
// Receives the JSON data and process it

    form["firstName"].value = data.firstName;
    form["lastName"].value = data.lastName;
    form["email"].value = data.email;
    form["phone"].value = data.phone;
    form["address"].value = data.address;

}

let form = document.getElementById("form");





