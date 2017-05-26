var apiKey = require('./../.env').apiKey;

Doctor = function(){
};


//#############API CALL################//
Doctor.prototype.getDoctors = function(medicalIssue, displayMedicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     var doctors = result.doctors;
     doctors.forEach(function(doctor) {
       response = displayMedicalIssue(doctor.first_name);
       console.log(result);
     });
     return response;
    })
   .fail(function(error){
      console.log("fail");
    });
};
//#############API CALL################//

exports.doctorModule = Doctor;
