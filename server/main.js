const express = require('express');
const app = express();
const port = 2020 || process.env.port;
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const jsonPath = path.join(__dirname + "/data.json");

//available for viewing in node command line

//initial data write
fs.writeFileSync(jsonPath, JSON.stringify({ listing: ["tim", "saw", "yer"] }));

const currentDirectory = fs.readdirSync(path.join(__dirname + "/"));
currentDirectory.forEach((entity)=>{
    if (/folder_name\d+/ig.test(entity)) {  
        const subPath = (path.join(__dirname + `/${entity}`)) 
        const jsFiles = fs.readdirSync(subPath).filter((file) => /\.js/ig.test(file))   
        if(jsFiles.length > 0 ){
            //run the script            
            jsFiles.forEach((file)=>{
             const fullPath = `${subPath}\\${file}`; 
                child = execSync(`node ${fullPath}`).toString();     
                console.log(child);   
                const data = JSON.parse(fs.readFileSync(jsonPath));
                console.log(data);
            })                 
        }     
    }
})

app.listen(port, ()=>{
    console.log(`instance running at ${port}`)
})