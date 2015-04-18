var express=require('express');
var app=express();

//routes
app.get("/",function(req,res){
	console.log("in root directory");
	res.send("hello world");
});
app.listen(3000,function(){
	console.log("Connecting to server on port 3000");
});