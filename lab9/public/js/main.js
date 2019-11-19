$(document).ready(() => {
  listAuthors();
  listGenders();
  listCategories();
});

function listAuthors() {
  $.ajax({
    url: "/authors",
    method: "get",
    contentType: "application/json",
    dataType: "json",
    success: function(result) {
      console.log(result);
      result.forEach(author => {
        $("#authorSelect").append(
          `<option value=${author.firstName} ${author.lastName}>${author.firstName} ${author.lastName}</option>`
        );
      });
    },
    error: function(xhr, status) {
      console.log("error calling to POST router", status);
    },
    complete: function() {}
  });
}

function listGenders() {
  $.ajax({
    url: "/genders",
    method: "get",
    contentType: "application/json",
    dataType: "json",
    success: function(result) {
      console.log(result);
      // result.forEach(gender => {
      //   $("#genderSelect").append(
      //     `<option value=${author.lastName}>${author.firstName} ${author.lastName}</option>`
      //   );
      // });
    },
    error: function(xhr, status) {
      console.log("error calling to POST router", status);
    },
    complete: function() {}
  });
}

function listCategories() {
  $.ajax({
    url: "/categories",
    method: "get",
    contentType: "application/json",
    dataType: "json",
    success: function(result) {
      console.log(result);
      // result.forEach(author => {
      //   $("#authorSelect").append(
      //     `<option value=${author.firstName} ${author.lastName}>${author.firstName} ${author.lastName}</option>`
      //   );
      // });
    },
    error: function(xhr, status) {
      console.log("error calling to POST router", status);
    },
    complete: function() {}
  });
}
