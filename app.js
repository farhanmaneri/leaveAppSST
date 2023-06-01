
const print = () => {

  window.print();
};



  document.getElementById('myForm').addEventListener('submit', function(event) {
event.preventDefault()
  
    var gender = document.getElementById('gender').value;

    var name = document.getElementById('name').value.toUpperCase();
    document.getElementById("nameCell").textContent = gender+" " +name;
    
    var cnic = document.getElementById('cnic').value
    document.getElementById("cnicCell").textContent = cnic;
    
    var designation = document.getElementById('designation').value;
    document.getElementById("scaleCell").textContent = designation;
    
    var leave_from = document.getElementById('leave_from').value;
    var leave_upto = document.getElementById('leave_upto').value;
    document.getElementById("leaveCell").textContent = leave_from+" " +"to"+""+ leave_upto;
   
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
    
    
    
    // var table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    // var rowIndex = table.rows.length + 1; // Get the new rowIndex
    // var newRow = table.insertRow();
    

  

    // var serialCell = newRow.insertCell(0)
    // var nameCell = newRow.insertCell(1);
    // var current_stationCell = newRow.insertCell(2);
    // // var to_stationCell = newRow.insertCell(3);
    // // var remarksCell = newRow.insertCell(4);

    // // serialCell.innerHTML = rowIndex
    // // nameCell.innerHTML = gender +" "+ name  +","+" "+ designation
    // // nameCell.innerHTML = "Name"
    // current_stationCell.innerHTML = old_station +" "+current_station;
    // to_stationCell.innerHTML = new_station +" "+to_station;
    // remarksCell.innerHTML = remarks;

    document.getElementById('myForm').reset();
  
  });
