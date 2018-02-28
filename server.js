var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var content = {
    title:'Home',
    heading:'Article_One',
    content:`
    <p>This is  the contentThis is  the contentThis is  the contentThis is  the contentThis is  the contentThis is  the content </p>`
    
    
};
function create(data){

var title=data.title;
var heading=data.heading;
var content=data.content;

var htmltemplate=`
<html>
<head>
<title>Alok</title>
<link rel="stylesheet" href="/ui/style.css">
</head>
<body>
<div class="container">
    <div>
        <a href="/">Home</a>
    </div>
    <div>
        <h1>${heading}</h1>
        
    </div>
    
    <div>
    ${content}
    
    </div>
  
    
    
</div>
</body>
</html>`;


return htmlTemplate;

}











app.get('/alok',function(req,res){
    res.send(create(alok));
    
});








app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


app.get("/alok-one", function(req,res){
   res.send("article alok is loading");
    
});


app.get("/alok",function(req,res){
   
   res.sendFile(path.join(__dirname,'ui','alok.html')) ;
});







// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
