var Doctor = require('./../js/doctor.js').doctorModule;


var displayMedicalIssue = function(medicalIssue) {
  $(".findDoctor").text("Test" + medicalIssue);
}


$(document).ready(function() {
  var currentDoctorObject = new Doctor();
  $('#issue-form').click(function() {
    var medicalIssue = $('#issue').val();
    $('#issue').val("");
    currentDoctorObject.getDoctors(medicalIssue, displayMedicalIssue);
  });
});
