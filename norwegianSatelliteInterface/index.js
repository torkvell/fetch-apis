getSatelliteImage = () => {
    fetch(`https://api.met.no/weatherapi/polarsatellite/1.1/?satellite=noaa`) // make the request
        .then(response => displayData(response))
}

displayData = (response) => {
    console.log(response.url);
    const urlImg = response.url;
    const imgDiv = document.getElementById("satelliteImage");
    imgDiv.setAttribute("src", urlImg);
}

// document.getElementById("submit").addEventListener("click", function(event) {
//     event.preventDefault();
//     const postalcode = document.getElementById("postalcode").value;
//     const housenumber = document.getElementById("housenumber").value;
//     getAddressInfo(postalcode, housenumber)
// });

getSatelliteImage();