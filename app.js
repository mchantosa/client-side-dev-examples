const express = require('express');
const app = express();
const PORT = 3000;
const {parse} = require('marked');
const fs = require('fs');

// make public directory serve static files (images, css)
app.use(express.static('public'));

app.get('/', function(req, res) {
  var path = __dirname + '/README.md'
  var file = fs.readFileSync(path, 'utf8')
  res.send(parse(file))
})
  
app.listen(PORT, (error) =>{
    if(!error){
      console.log(`Server is Successfully Running, App is listening on port "+ ${PORT}`)
    } else{
      console.log("Error occurred, server can't start", error);
    }     
});