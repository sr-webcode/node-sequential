const path = require("path");
const fs = require("fs");
const jsonPath = path.join(__dirname, "../data.json");
const source = JSON.parse(fs.readFileSync(jsonPath));

//add radnomn numbers to each name
const realData = source.listing.map(
  (data) => `${data} ${Math.floor(Math.random() * 100)}`);
source.listing = realData;

//add timeout 
setTimeout(()=>{
        console.log("SECOND -- Added number to each record!");
    fs.writeFileSync(jsonPath, JSON.stringify({ listing: source.listing }));
}, 2500)
