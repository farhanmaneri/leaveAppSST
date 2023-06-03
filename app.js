
const print = () => {

  window.print();
};



document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault()

  var gender = document.getElementById('gender').value;

  var name = document.getElementById('name').value.toUpperCase();
  document.getElementById('nameSpan').textContent = gender + " " + name;
  document.getElementById("nameCell").textContent = gender + " " + name;

  var cnic = document.getElementById('cnic').value
  document.getElementById("cnicCell").textContent = cnic;

  var designation = document.getElementById('designation').value;
  document.getElementById("scaleCell").textContent = designation;

  var current_station = document.getElementById('current_station').value;
  var school = document.getElementById('school').value;
  document.getElementById("schoolSpan").textContent = current_station + " " + school;
  document.getElementById("copyToSchool").textContent =   current_station + " " + school;

  var leave_from = document.getElementById('leave_from').value;
  var leave_upto = document.getElementById('leave_upto').value;


  partsLeaveFrom = leave_from.split('-');
  var year = partsLeaveFrom[0];
  var month = partsLeaveFrom[1];
  var day = partsLeaveFrom[2];
  var formatLeaveFrom = day + "/" + month + "/" + year
  partsLeaveUpto = leave_upto.split('-');
  var years = partsLeaveUpto[0];
  var months = partsLeaveUpto[1];
  var days = partsLeaveUpto[2];
  var formatLeaveUpto = days + "/" + months + "/" + years
  document.getElementById("leaveCell").textContent = formatLeaveFrom + " " + "to" + " " + formatLeaveUpto;
  document.getElementById("datesSpan").textContent = formatLeaveFrom + " " + "to" + " " + formatLeaveUpto;
  const date1 = new Date(leave_from);
  const date2 = new Date(leave_upto);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));  
  document.getElementById("totalDaysSpan").textContent = diffDays
 

  var leaveTpye = document.getElementById('leaveTpye').value;
  document.getElementById("leaveTpyeSpan").textContent = leaveTpye;
  document.getElementById("leaveTpyeCell").textContent = leaveTpye;

  var leaveTpye = document.getElementById('leaveTpye').value;
  document.getElementById("leaveTpyeCell").textContent = leaveTpye;

  var country_abroad = document.getElementById('country_abroad').value;
  document.getElementById("countryCell").textContent = country_abroad;

  var leave_date = document.getElementById('leave_date').value;
  partsLeaveDate = leave_date.split('-');
  var years = partsLeaveDate[0];
  var months = partsLeaveDate[1];
  var days = partsLeaveDate[2];
  var formatLeaveUpto = days + "/" + months + "/" + years

  document.getElementById("exactDateCell").textContent = formatLeaveUpto;

  var reason = document.getElementById('reason').value;
  document.getElementById("reasonCell").textContent = reason;

  var personal_number = document.getElementById('personal_number').value;
  document.getElementById("personalNoCell").textContent = personal_number;

  var previous_leave = document.getElementById('previous_leave').value;
  document.getElementById("previouLeaveCell").textContent = previous_leave;

  var service_length = document.getElementById('service_length').value;
  document.getElementById("serviceLengthCell").textContent = service_length;




  document.getElementById('myForm').reset();

});
