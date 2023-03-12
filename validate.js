const validate = (event) => {
    let error = 0
    //pick input
    let firstName = document.getElementById("fName");
    let secondName = document.getElementById("sName");
    let birthDate = document.getElementById("db");
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let phoneNumber = document.getElementById("pNum");
    let ninNumber = document.getElementById("nin");
    let address = document.getElementById("adr");
    let timePeriod = document.getElementById("tsa");
    let ward = document.getElementById("wd");
    let activities = document.getElementById("act");
    let regDate = document.getElementById("dr");
    let uniqueNumber = document.getElementById("uN");

    //pick error
    let firstNameError = document.getElementById("fNameErr");
    let secondNameError = document.getElementById("sNameErr");
    let birthDateError = document.getElementById("dbErr");
    let genderError = document.getElementById("gndErr");
    let phoneNumberError = document.getElementById("pNumErr");
    let ninNumberError = document.getElementById("ninErr");
    let addressError = document.getElementById("adrErr");
    let timePeriodError = document.getElementById("tsaErr");
    let wardError = document.getElementById("wdErr");
    let activitiesError = document.getElementById("actErr");
    let regDateError = document.getElementById("drErr");
   let uniqueNumberError = document.getElementById("uNErr");

    //for empty on name
    if (!firstName.value) {
        firstName.style.border = "1px solid red"
        firstNameError.textContent = "Please enter first name"
        firstNameError.style = "color: red"
        error++
    }
    else if (firstName.value.length < 5) {
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "first name should have atleast four letters"
        firstNameError.style = "color: red"
        error++
    }
    // //for second name
    // if (!secondName.value) {
    //     secondName.style.border = "1px solid red"
    //     secondNameError.textContent = "Please enter second name"
    //     secondNameError.style = "color: red"
    //     error++
    // }
    // else if (firstName.value.length < 5) {
    //     firstName.style.border = "1px solid red"
    //     firstNameError.innerHTML = "first name should have atleast four letters"
    //     firstNameError.style = "color: red"
    //     error++
    // }
    // DOB
    // if (!birthDate.value) {
    //     birthDate.style.border = "1px solid red"
    //     birthDateError.textContent = "Please fill in this feild"
    //     birthDateError.style = "color: red"
    //     error++
    // }
    // // // gender
    // // if (!(female.checked && male.checked)) {
    // //     gender.innerHTML = "Pick your gender"
    // //     genderError.style = "color: red"
    // //     error++
    // // }
    // // else {
    // //     genderError.textContent = "";
    // // }
    // //phone number
    // const phoneNumberregex = /^\+256\d{9}$/;
    // if (!phoneNumber.value) {
    //     phoneNumber.style.border = "1px solid red"
    //     phoneNumberError.innerHTML = "Please enter your phone number"
    //     phoneNumberError.style = "color: red"
    //     error++
    // }
    // else if (!phoneNumber.value.match(phoneNumberregex)) {
    //     phoneNumber.style.border = "1px solid red"
    //     phoneNumberError.innerHTML = "phone number should be in thi format +256 700000000"
    //     phoneNumberError.style = "color: red"
    //     error++
    // }
    // //nin
    // //   const ninNumberregex = /^     $/
    // if (!ninNumber.value) {
    //     ninNumber.style.border = "1px solid red"
    //     ninNumberError.textContent = "Please enter your NIN number"
    //     ninNumberError.style = "color: red"
    //     error++
    // }
    // // else if(!ninNumber.value.match(ninNumberregex)){
    // //     ninNumber.style.border = "1px solid red"
    // //     ninNumberError.innerHTML = "NIN has to be in thi format  "
    // //     ninNumberError.style = "color: red"
    // //     error++
    // // }
    // //address
    // if(!address.value){
    //     address.style.border = "1px solid red"
    //     addressError.innerHTML = "Please indicate where your home is located"
    //     addressError.style = "color: red"
    //     error++
    // }
    // //time
    // if(!timePeriod.value){
    //     timePeriod.style.border = "1px solid red"
    //     timePeriodError.textContent = "Please fill in this field"
    //     timePeriodError.style = "color: red"
    //     error++
    // }
    // else if(timePeriod < 10){
    //     timePeriod.style.border = "1px solid red"
    //     timePeriodError.textContent = "You must have lived in this area for more than 10 years"
    //     timePeriodError.style = "color: red"
    //     error++  
    // }
    // //ard
    // if(!ward.value){
    //     ward.style.border = "1px solid red"
    //     wardError.innerHTML = "Please enter the ward you belong to"
    //     wardError.style =  "color: red"
    //     error++
    // }
    //  //activities
    //  if(!activities.value){
    //     activities.style.border = "1px solid red"
    //     activitiesError.innerHTML = "Please fill in the activities you carry out"
    //     activitiesError.style = "color: red"
    //     error++
    //  }
    //  //reg
    //  if(!regDate.value){
    //     regDate.style.border = "1px solid red"
    //     regDateError.textContent = "Please fill in the date"
    //     regDateError.style = "color: red"
    //     error++
    //  }
    //  else if(!regDate.value.match(getUTCDate())){
    //     regDate.style.border = "1px solid red"
    //     regDateError.textContent = "This date is incorrect"
    //     regDateError.style = "color: red"
    //     error++
    //  }
    //  //un num
    //  if(!uniqueNumber.value){
    //     uniqueNumber.style = "1px solid red"
    //     uniqueNumberError.textContent = "Please fill in this field"
    //     uniqueNumberError.style = "color: red"
    //     error++
    //  }



    if (error > 0) {
        event.preventDefault()
    }









}
