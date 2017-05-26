var Doctor = require('./../js/doctor.js').doctorModule;

var medicalIssue = function(medicalIssue){
};



$(document).ready(function(){
  var currentDoctorObject = new Doctor();
  $('#issue-form').submit(function(){
    event.preventDefault();
    var medicalIssue = $('#issue').val();
    currentDoctorObject.getDoctors(medicalIssue);
  });
});
