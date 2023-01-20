function jsonValueKey(str, key) {

    string = JSON.parse(str);
    console.log(string.key);
    
}

fetch('tableau.json')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            let json = result;
            return json;
        })
        .catch((error) => {
            console.log(error);
        });

jsonValueKey(json, 'mail');