const validate = (event) => {
    let error = 0
    //pick input
    let firstName = document.getElementById("fName");
  
    //pick error
    let firstNameError = document.getElementById("fNameErr");
  
  
  
    //for empty on name
    if(!firstName.value){
        firstName.style.border = "1px solid red"
        firstNameError.textContent = "Please enter first name"
        firstNameError.style = "color: red"
        error++
    }
    else if(firstName.value.length < 4){
         firstName.style.border = "1px solid red"
         firstNameError.innerHTML = "first name should have atleast four letters"
         firstNameError.style = "color: red"
         error++
    }
  }