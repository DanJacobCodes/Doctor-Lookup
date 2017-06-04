var Doctor = require('./../js/doctor.js').doctorModule;



var displayDoctor = function(response){
  response.data.forEach(function(doctor){
    var first_name = doctor.profile.first_name;
    var last_name = doctor.profile.last_name;
    var img = doctor.profile.image_url;
    $("#findDoctor").append("<li>" + "First Name: " +  first_name + "</li>" + "<li>" + "Last Name: "+ last_name + "</li>" + "<br>" + "<li>" + '</li>  <li> <img src="' + img + '" alt="No image available."</li>');
    });

};


$(document).ready(function() {
  $('#issue-form').submit(function(event) {
    event.preventDefault();
    var newDoc = new Doctor();
    var medicalIssue = $('#issue').val();
    newDoc.getDoctors(medicalIssue, displayDoctor);
  });
});
