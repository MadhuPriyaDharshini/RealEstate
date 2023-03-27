const x = document.getElementById("location");

https://api.opencagedata.com/geocode/v1/json?q=URI-ENCODED-PLACENAME&key=98ac3a1b6e4c4424a23d28671c0c0ddb

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess,onError);
  } else { 
   console.log("Geolocation is not supported by this browser.");
  }
}

const price = document.getElementById("price");


function onSuccess(position){
  console.log("Detecting your location...");
  let {latitude,longitude} = position.coords;
  console.log(latitude,longitude);
  /*ch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_API_KEY`)
    .then(response => response.json()).then(response =>{*/

  fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=98ac3a1b6e4c4424a23d28671c0c0ddb`).then(response=> response.json()).then(response=>{
    let allDeatils = response.results[0].components;
    console.table(allDeatils);
    var {county,state, postcode,country} = allDeatils;
    console.log(`Area: ${county},State: ${state} - ${postcode} Country: ${country}`);
  }).catch(()=>
   console.log("Something went wrong")
  )
}

function onError(error){
  if(error.code ==1)
  {
    console.log("You denied the req")
  }
  else if(error.code==2)
  {
    console.log("LOcation is unavailable");
  }
  else{
    console.log("Something went wrong")
  }

}

const search= document.getElementById("search");

function showPosition(position) {
  document.getElementById("search").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

  console.log("Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude)
}