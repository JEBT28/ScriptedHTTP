const loadXMLDoc = (doc)=>{

    form["firstName"].value = doc.getElementsByTagName("firstName")[0].childNodes[0].nodeValue;
    form["lastName"].value = doc.getElementsByTagName("lastName")[0].childNodes[0].nodeValue;
    form["email"].value = doc.getElementsByTagName("email")[0].childNodes[0].nodeValue;
    form["phone"].value = doc.getElementsByTagName("phone")[0].childNodes[0].nodeValue;
    form["address"].value = doc.getElementsByTagName("address")[0].childNodes[0].nodeValue;

}

const loadJSONDoc = (data)=>{

   

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
window.onload = function () {
    const buttonGetXML = document.getElementById("getXML");
    const buttonGetJSON = document.getElementById("getJSON");

    buttonGetXML.addEventListener("click", function () {
        try {
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



const Get = (callback,url) => {
    var request = new XMLHttpRequest();

    request.open("GET", url);

    console.log(request);

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status === 200) {
                console.log(request);
                console.log(request.getAllResponseHeaders());
                var type = request.getResponseHeader("Content-Type");
                // Check type so we don't get HTML documents in the future
                if (type.indexOf("xml") !== -1 && request.responseXML)
                callback(request.responseXML); // Document response
                else if (type === "application/json")
                callback(JSON.parse(request.responseText)); // JSON response
                else
                callback(request.responseText); 
            } else {
                console.log(request);
                throw new Error(request.statusText);
            }
        }
    }
    request.send(null);
};