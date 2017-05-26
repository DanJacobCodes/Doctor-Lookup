var apiKey = require('./../.env').apiKey

function Doctor(){
}


Doctor.prototype.getDoctors = function(medicalIssue, user_key) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     displayDoctor(medicalIssue, result.name);
      console.log(result);
    })
   .fail(function(error){
      $('.findDoctor').text(error.responseJSON);
    });
};


exports.doctorModule = Doctor;
