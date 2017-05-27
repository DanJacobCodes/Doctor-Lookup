var apiKey = require('./../.env').apiKey;

function Doctor(){
}
Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
  console.log(response);
  response.data.forEach(function(doctor){
    var first_name = doctor.profile.first_name;
    var last_name = doctor.profile.last_name;
    var img = doctor.profile.image_url;
    $("#findDoctor").append("<li>" + "First Name: " +  first_name + "</li>" + "<li>" + "Last Name " + last_name + "</li>" + "<br>"+ "<li>" + '</li><li> <img src="' + img + '" alt="No image available."</li><br><br>');
    });
  })


   .fail(function(error){
      $("#findDoctor").text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
