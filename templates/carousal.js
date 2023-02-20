const x = document.getElementById("location");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

const search= document.getElementById("search");

function showPosition(position) {
  document.getElementById("search").innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

  console.log("Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude)
}