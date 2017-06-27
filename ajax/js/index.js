console.log("Hello from the JavaScript console!");

// Your AJAX request here

$.ajax({
  type: 'GET',
  url:'http://api.openweathermap.org/data/2.5/weather?q=NY,NY&appid=bcb83c4b54aee8418983c2aff3073b3b',
  success(data) {
    console.log("We have your info");
    handleRequest(data);
  },
  error() {
    console.log("an error occured");
  }
})
// Add another console log here, outside your AJAX request

function handleRequest(data) {
  console.log(data);

  $("#main").append(`<div class="location">Location: ${data.name}</div>`);
  $("#main").append(`<div class="weather">Forecast: ${data.weather[0].description}</div>`);

}

// document ready
$(()=>{

});
