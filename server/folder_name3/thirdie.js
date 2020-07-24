const path = require("path");
const fs = require("fs");
const jsonPath = path.join(__dirname, "../data.json");
const source = JSON.parse(fs.readFileSync(jsonPath));

//add radnomn numbers to each name
const realData = source.listing.reverse();
source.listing = realData;
fs.writeFileSync(jsonPath, JSON.stringify({ listing: source.listing }));

 console.log("THIRD -- reversed record!");
