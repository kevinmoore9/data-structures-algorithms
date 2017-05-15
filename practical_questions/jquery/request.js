
let data =
  $.ajax({
    url: "http://localhost:3000/users/1",
    method: "GET",
    dataType: "json",

    success(data) {
      console.log(data);
    },
    error() {
      console.error("an error");
    }
  });


// debugger
