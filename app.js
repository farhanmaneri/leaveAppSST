
const print = () => {

  window.print();
};



  document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault()
  
    var gender = document.getElementById('gender').value;

    var name = document.getElementById('name').value.toUpperCase();
    document.getElementsByClassName("nameCell").textContent = gender+" " +name;
    document.getElementById('nameSpan').textContent = gender+" "+ name;
    
    var cnic = document.getElementById('cnic').value
    document.getElementById("cnicCell").textContent = cnic;
    
    var designation = document.getElementById('designation').value;
    document.getElementById("scaleCell").textContent = designation;
    
    var school = document.getElementById('school').value;
    document.getElementById("schoolCell").textContent = school;
   
    var leave_from = document.getElementById('leave_from').value;
    var leave_upto = document.getElementById('leave_upto').value;
    document.getElementById("leaveCell").textContent = leave_from+" " +"to"+" "+ leave_upto;
   
    var leaveTpye = document.getElementById('leaveTpye').value;
    document.getElementById("leaveTpyeCell").textContent = leaveTpye;    
    
    var leaveTpye = document.getElementById('leaveTpye').value;
    document.getElementById("leaveTpyeCell").textContent = leaveTpye;    
    
    var country_abroad = document.getElementById('country_abroad').value;
    document.getElementById("countryCell").textContent = country_abroad;    
    
    var leave_date = document.getElementById('leave_date').value;
    document.getElementById("exactDateCell").textContent = leave_date;    
    
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
