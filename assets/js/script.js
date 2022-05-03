//variables needed for weather
var locationChosen = document.querySelector('input[name="locationSelector"]');

//variables needed for fourqsuare
var drinkEl = document.getElementById("drinks");
var entertainmentEl = document.getElementById("entertainment");
var activeEl = document.getElementById("active");
var foodEl = document.getElementById("food");
var atmosphereEl = document.getElementById("atmosphere");
var parkingEl = document.getElementById("parking");

// zone objects 
const downtownAustin = {
  lat: "30.267672625429736",
  lon: "-97.74555522257333"
}

const southEastAustin = {
  lat: "30.211144002203703",
  lon: "-97.70288903062384"
}

const southWestAustin = {
  lat: "30.219860121093262",
  lon: "-97.83423339078256"
}

const northAustin = {
  lat: "30.346023074489636",
  lon: "-97.71761880559511"
}

const beeCaves = {
  lat: "30.336543064363642",
  lon: "-97.96179871839252"
}

// FOURSQUARE API
// foursquare authourization key: 'fsq3Dd7JeFQQHyDysLsuKKzrNfbaWgHDH09HMsub7/9FfFA='

const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    Authorization: 'fsq3Dd7JeFQQHyDysLsuKKzrNfbaWgHDH09HMsub7/9FfFA='
  }
};

fetch('https://api.foursquare.com/v3/places/search?near=\'Austin, TX\'&categories=10000&sort=rating', options).then(response => {
  if (response.ok) {
      response.json().then(data => {
        
          console.log(data['results']);
      });
  } else {
      alert("ERROR: NOT WORKING");
  }
}).catch(err => console.error(err));

// get most popular places based off of a zone and category

var weatherEl = document.getElementById("weather-results");
var locationEl = document.getElementById("location-results");
var popularEl = document.getElementById("popular-events");

//variables needed for functions and functionalty
var wrapEl = document.getElementById("wrap");
var sectionEl = document.getElementById("section");
var errorEl = document.getElementById("error");
var submitButton = document.getElementById("submit-button");
var goBackButton = document.getElementById("go-back-button");

//when clicking the different categories, show more specific results
drinkEl.addEventListener('click', function () {
  var drinkResults = document.getElementById("drink-results");
  if (drinkResults.classList.contains("hide")) {
  drinkResults.classList.remove("hide");
  } else {
    drinkResults.classList.add("hide");
  }
  console.log("clicked drinks");
});
entertainmentEl.addEventListener('click', function () {
  var entertainmentResults = document.getElementById("entertainment-results");
  if (entertainmentResults.classList.contains("hide")) {
  entertainmentResults.classList.remove("hide");
  } else {
    entertainmentResults.classList.add("hide");
  }
  console.log("clicked entertainment");
});
activeEl.addEventListener('click', function () {
  var activeResults = document.getElementById("active-results");
  if (activeResults.classList.contains("hide")) {
  activeResults.classList.remove("hide");
  } else {
    activeResults.classList.add("hide");
  }
  console.log("clicked active");
});
foodEl.addEventListener('click', function () {
  var foodResults = document.getElementById("food-results");
  if (foodResults.classList.contains("hide")) {
  foodResults.classList.remove("hide");
  } else {
    foodResults.classList.add("hide");
  }
  console.log("clicked food");
});
atmosphereEl.addEventListener('click', function () {
  var atmosphereResults = document.getElementById("atmosphere-results");
  if (atmosphereResults.classList.contains("hide")) {
  atmosphereResults.classList.remove("hide");
  } else {
    atmosphereResults.classList.add("hide");
  }
  console.log("clicked atmosphere");
});
parkingEl.addEventListener('click', function () {
  var parkingResults = document.getElementById("parking-results");
  if (parkingResults.classList.contains("hide")) {
  parkingResults.classList.remove("hide");
  } else {
    parkingResults.classList.add("hide");
  }
  console.log("clicked parking");
});

//if a location isn't selected, then the user is told to select one
//when the submit button is clicked, change the page to the results page
//testing to store miles and range
function submitResults () {
  if (locationChosen) {
    errorEl.classList.remove("hide");
    return;
  }
  wrapEl.classList.add("hide");
  sectionEl.classList.add("hide");
  errorEl.classList.add("hide");
  submitButton.classList.add("hide");
  weatherEl.classList.remove("hide");
  locationEl.classList.remove("hide");
  popularEl.classList.remove("hide");
  goBackButton.classList.remove("hide");
}

function goBack () {
  location.reload();
}
 
//event listeners on buttons
submitButton.addEventListener('click', submitResults);
goBackButton.addEventListener('click', goBack)
