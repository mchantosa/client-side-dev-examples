const express = require('express');
const app = express();
const PORT = 3000;

// make public directory serve static files (images, css)
app.use(express.static('public'));

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


app.get(
  '/',
  (req, res) => {
    res.render('index.html');
  },
);
  
app.listen(PORT, (error) =>{
    if(!error){
      console.log(`Server is Successfully Running, App is listening on port "+ ${PORT}`)
    } else{
      console.log("Error occurred, server can't start", error);
    }     
});