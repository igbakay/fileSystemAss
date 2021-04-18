const https = require('https');
const fs = require('fs');

https.get("https://jsonplaceholder.typicode.com/posts", res => {
    let posts = '';

    res.on("data", data => {
        posts += data
    })
    res.on("end", () =>{
        fs.writeFile('./result/posts.json',posts, (err) => {
            if (err){console.log(err)}
        })
    })
})