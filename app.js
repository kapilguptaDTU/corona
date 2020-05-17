var express = require('express');
var app = express();
const path=require('path');

const bodyparser=require('body-parser');
app.use(bodyparser.urlencoded({
    extended:true
}));
const fetch = require("node-fetch");

app.set('views',path.join(__dirname,'/views'));
app.use(express.static(__dirname + "/public"));
app.set('view engine','ejs');


app.get('/', function (req, res) {
    console.log("getting home")
    res.render('index');
  });
  app.get('/news/', function (req, res) {
    console.log("getting news")
    res.render('news');
  });

  app.get('/statewise', function (req, res) {
    console.log("getting statewise")
    var series_data=[];
    var len_data=0;
    const url = 'https://api.covid19india.org/data.json';
    async function getInfo(){
        const response = await fetch(url);
        const data = await response.json();
        series_data = data.statewise;
        len_data = series_data.length
        // for(var i=len_data-31;i<len_data;i++){
        //     const date = series_data[i].date;
        //     const confirm = series_data[i].dailyconfirmed;
        //     const recover = series_data[i].dailyrecovered;
        //     const death = series_data[i].dailydeceased;
        //     // dates.push(date);
        //     // confirmed.push(parseInt(confirm));
        //     // recovered.push(parseInt(recover));
        //     // deceased.push(parseInt(death));
        // }
      var l=len_data-1;     

    }
    getInfo();
    
   setTimeout(function(){
    console.log(series_data.length);
    console.log(len_data);
    res.render('statewise',{states:series_data});
   },300); 
    
    
   
  });

  app.get('/country', function (req, res) {
    console.log("getting country")
    var series_data=[];
    var len_data=0;
    const url = 'https://api.covid19india.org/data.json';
    async function getInfo(){
        const response = await fetch(url);
        const data = await response.json();
        series_data = data.statewise;
        len_data = series_data.length
        // for(var i=len_data-31;i<len_data;i++){
        //     const date = series_data[i].date;
        //     const confirm = series_data[i].dailyconfirmed;
        //     const recover = series_data[i].dailyrecovered;
        //     const death = series_data[i].dailydeceased;
        //     // dates.push(date);
        //     // confirmed.push(parseInt(confirm));
        //     // recovered.push(parseInt(recover));
        //     // deceased.push(parseInt(death));
        // }
      var l=len_data-1;     

    }
    getInfo();
    
   setTimeout(function(){
    console.log(series_data.length);
    console.log(len_data);
    res.render('country',{states:series_data});
   },300); 
    
    
   
  });
    

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!');
// });
app.listen(process.env.PORT,process.env.IP);
console.log("IMDb V2 started"+process.env);