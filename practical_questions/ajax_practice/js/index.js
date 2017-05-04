console.log("Hello from the JavaScript console!");

var tweets;

$.ajax({
  type: 'GET',
  url: 'http://localhost:3000/feed',
  success(data) {
    weather = data;
    console.log("We have your tweets!")
    console.log(data);
  },
  error() {
    console.error("An error occurred.");
  },
});


// Your AJAX request here

// Add another console log here, outside your AJAX request
