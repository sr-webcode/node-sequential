const path = require('path');
const fs = require('fs');
const jsonPath = path.join(__dirname, "../data.json");
const source = JSON.parse(fs.readFileSync(jsonPath));

//add hoppins to each name
const realData = source.listing.map((data)=> data + " yer")
source.listing = realData;
console.log('FIRST -- Added YER to each record!');
fs.writeFileSync(jsonPath, JSON.stringify({listing: source.listing}))
