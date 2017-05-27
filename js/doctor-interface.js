var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {
  $('#issue-form').submit(function() {
    event.preventDefault();
    var newDoc = new Doctor();
    var medicalIssue = $('#issue').val();
    newDoc.getDoctors(medicalIssue);
  });
});
