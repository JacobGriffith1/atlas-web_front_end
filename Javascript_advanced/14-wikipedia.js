function createElement (data) {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = data;
    document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
    let request = new XMLHttpRequest();
    request.open("get", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    request.onreadystatechange = function (event) {
        if(request.readyState === 4) {
            if(request.status === 200) {
                callback(JSON.parse(request.responseText).query.pages[21721040].extract)
            } else {
                let error = new Error('Error');
                return callback(error, null);
            }
        }
    }
    request.send();
}

queryWikipedia(createElement);
