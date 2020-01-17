getAddressInfo = (postalcode, housenumber) => {
    fetch(`http://api.postcodedata.nl/v1/postcode/?postcode=${postalcode}&streetnumber=${housenumber}&ref=domeinnaam.nl&type=json`) // make the request
        .then(response => response.json()) // convert response to json
        .then(myJson => { // display data in the browser
            displayData(myJson);
        })
}

displayData = (json) => {
    const message = json.errormessage ? json.errormessage : json.details;
    console.log(message);
    document.getElementById("addressInfo").innerHTML =
        "<pre>" + JSON.stringify(message, null, " ") + "</pre>"
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
    const postalcode = document.getElementById("postalcode").value;
    const housenumber = document.getElementById("housenumber").value;
    getAddressInfo(postalcode, housenumber)
});