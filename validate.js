const validate = (event) => {
    let error = 0
    //pick input
    let firstName = document.getElementById("fName");
    let secondName = document.getElementById("sName");
    let birthDate = document.getElementById("db");
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let phoneNumber = document.getElementById("pNum");
    //pick error
    let firstNameError = document.getElementById("fNameErr");
    let secondNameError = document.getElementById("sNameErr");
    let birthDateError = document.getElementById("dbErr");
    let genderError = document.getElementById("gndErr");
    let phoneNumberError = document.getElementById("pNumErr");
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
    //for second name
    if (!secondName.value) {
        secondName.style.border = "1px solid red"
        secondNameError.textContent = "Please enter second name"
        secondNameError.style = "color: red"
        error++
    }
    else if (firstName.value.length < 5) {
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "first name should have atleast four letters"
        firstNameError.style = "color: red"
        error++
    }
    //DOB
    if (!birthDate.value) {
        birthDate.style.border = "1px solid red"
        birthDateError.textContent = "Please fill in this feild"
        birthDateError.style = "color: red"
        error++
    }
    // gender
    // if (!(female.checked && male.checked)) {
    //     gender.innerHTML = "Pick your gender"
    //     genderError.style = "color: red"
    //     error++
    // }
    // else {
    //     genderError.textContent = "";
    // }
    //phone number
    const phoneNumberregex = /^\+256\d{9}$/;
    if (!phoneNumber.value) {
        phoneNumber.style.border = "1px solid red" 
        phoneNumberError.innerHTML = "Please enter your phone number"
        phoneNumberError.style = "color: red"
        error++
    }
    else if (!phoneNumber.value.match(phoneNumberregex)) {
        phoneNumber.style.border = "1px solid red"
        phoneNumberError.innerHTML = "phone number should be in thi format +256 700000000"
        phoneNumberError.style = "color: red"
        error++
    }


    if (error > 0) {
        event.preventDefault()
    }









}
