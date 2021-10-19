const fs = require('fs');

let data = fs.readFile('colors.json', (err, data) => {
    if(err){
        throw err;
    }
    console.log("Az fs belsejeben");
    return data; //itt nem adja majd vissza, hiába az elejen az érték adás
});

console.log(`A nyers adatok: ${data}`); //it nem történik kiírás