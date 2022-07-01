var request = new XMLHttpRequest();

request.open('GET','https://restcountries.com/v3.1/all', true);

request.send();

request.onload = function(){

    var data = JSON.parse(request.response);
    console.log("\n Here i show the 2nd one solution \n")
    for ( var i=0; i<data.length; i++){
         console.log("flag:-",data[i].flags);
     }
    
    console.log("\n Here I Show the 3rd Solution \n")
    for ( var i=0; i<data.length; i++){
        console.log("country name:-",data[i].name,"regions:-",data[i].region,
        "sup-regions:-",data[i].subregion,"poplations:-",data[i].population,);
    }
}