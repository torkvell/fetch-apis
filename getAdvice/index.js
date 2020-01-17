// fetch example - works in the browser but not in node
// (fetch is not a part of node.js by default)
getAdvice = (query) => {
    if (query === undefined || query === "") {
        fetch("https://api.adviceslip.com/advice") // make the request
            .then(response => response.json()) // convert response to json
            .then(myJson => { // display data in the browser
                const advice = myJson.slip.advice;
                document.getElementById("adviceSection").innerHTML =
                    "<pre>" + JSON.stringify(advice, null, " ") + "</pre>"
            })
    } else {
        fetch(`https://api.adviceslip.com/advice/search/${query}`) // make the request
            .then(response => response.json()) // convert response to json
            .then(myJson => { // display data in the browser
                let message = "undefined"
                if (myJson.message) {
                    message = myJson.message.text;
                    console.log("No advice found for the provided search string");
                } else if (myJson.slips) {
                    const randomIndex = Math.floor(Math.random() * myJson.slips.length)
                    message = myJson.slips[randomIndex].advice;
                }
                document.getElementById("adviceSection").innerHTML =
                    "<pre>" + JSON.stringify(message, null, " ") + "</pre>"
            })
    }
}

document.getElementById("myBtn").addEventListener("click", function() {
    const searchQuery = document.getElementById("searchQueryInput").value;
    getAdvice(searchQuery);
});