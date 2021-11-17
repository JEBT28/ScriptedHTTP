
window.onload = function () {
    const buttonGetXML = document.getElementById("getXML");
    const buttonGetJSON = document.getElementById("getJSON");

    //set event listeners

    //Event listener for XML load data button
    buttonGetXML.addEventListener("click", function () {
        try {
            //Using get function to load XML data, passing the callback function and the url
            Get(loadXMLDoc,'xml.php');
        } catch (e) {
            const p = document.createElement("p");
            console.log(e.message);
            p.innerHTML = e.message;
            p.style.color = "red";
            document.body.appendChild(p);
        }
    });


    buttonGetJSON.addEventListener("click", function () {
        try {
            //Using get function to load json data, passing the callback function and the url
            Get(loadJSONDoc,'json.php');
        } catch (e) {
            const p = document.createElement("p");
            console.log(e.message);
            p.innerHTML = e.message;
            p.style.color = "red";
            document.body.appendChild(p);
        }
    });
}
//Continue with Get function of past asyncs examples adding new functionality
const Get = (callback,url) => {
    //Create a new XMLHttpRequest object
    var request = new XMLHttpRequest();

    //Open the request and pass the url and the type of request
    request.open("GET", url);

    console.log(request);
    //Set the onreadystatechange event handler
        request.onreadystatechange = function () {
            //when the readyState is 4 and the status is 200 (successfull)
        if (request.readyState === 4) {
            if (request.status === 200) {

                console.log(request);
                console.log(request.getAllResponseHeaders());
                var type = request.getResponseHeader("Content-Type");
                // Check type so we don't get HTML documents in the future
                if (type.indexOf("xml") !== -1 && request.responseXML)
                callback(request.responseXML); // Use the callback function to process the XML data show in the formulary
                else if (type === "application/json")
                callback(JSON.parse(request.responseText)); // Use the callback function to process the JSON data show in the formulary
                else
                callback(request.responseText);  //In case of plain text, use the callback function to process the plain text data show in the formulary
            } else {
                console.log(request);
                throw new Error(request.statusText); //Throw an error if the request is not successfull
            }
        }
    }

    //Send the request without body
    request.send(null);
};


// Function used to load XML data to the formulary
const loadXMLDoc = (doc)=>{
// Receives the XML data and process it

    form["firstName"].value = doc.getElementsByTagName("firstName")[0].childNodes[0].nodeValue;
    form["lastName"].value = doc.getElementsByTagName("lastName")[0].childNodes[0].nodeValue;
    form["email"].value = doc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
    form["phone"].value = doc.getElementsByTagName("phone")[0].childNodes[0].nodeValue;
    form["address"].value = doc.getElementsByTagName("address")[0].childNodes[0].nodeValue;

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

if (window.XMLHttpRequest === undefined) {
    window.XMLHttpRequest = function () {
        try {
            // Use the latest version of the ActiveX object if available
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        }
        catch (e1) {
            try {
                // Otherwise fall back on an older version
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            }
            catch (e2) {
                // Otherwise, throw an error
                throw new Error("XMLHttpRequest is not supported");
            }
        }
    };
}




