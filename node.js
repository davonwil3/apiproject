const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));




app.post("/search", function(req, res){

    const query = req.body.search
    const apiKey = "36e647e2676c493b8d1a5b15bf797861"
    const url = "https://newsapi.org/v2/everything?q="+ query + "&apiKey=" + apiKey +"";
    https.get(url, function(response){
      var data;

      response.on("data", function(chunk) {

        if(!data){
          data = chunk;
        }
        else{
          data += chunk
        }
      })

      response.on("end", function(){
        const newsData = JSON.parse(data);

        var filtereddata = newsData.articles.filter( function(arraydata){

          return  arraydata.urlToImage != null
        })
        
        res.json ({
          newsObject: filtereddata,
          
        })

      })

    })
})

app.post("/headlines", function(req, res){

  const query = req.body.headline
  const apiKey = "36e647e2676c493b8d1a5b15bf797861"
  const url = "https://newsapi.org/v2/top-headlines?country=us&category="+ query + "&apiKey=" + apiKey +"";
  https.get(url, function(response){
    var data;

    response.on("data", function(chunk) {

      if(!data){
        data = chunk;
      }
      else{
        data += chunk
      }
    })

  response.on("end", function(){
      const newsData = JSON.parse(data)

     var filtereddata = newsData.articles.filter( function(arraydata){

      return  arraydata.urlToImage != null
    })
     
    console.log(filtereddata);
      res.json ({
        newsObject: filtereddata,
        
      })

  })

  })

 
})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'), function(err) {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      }
    });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}


app.listen(port, function() {
    console.log("Server started success");
})