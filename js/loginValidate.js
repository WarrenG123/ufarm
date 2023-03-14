const validate = (event) => {
    let error = 0;
    //input
    let password = document.getElementById("pwd");

    //error
    let passwordError = document.getElementById("pwdErr");


    //pwd
    if(!password.value) {
        password.style.border = "1px solid red"
        passwordError.textContent = "Please enter your password"
        passwordError.style = "color: red"
        error++
    }


    if(error > 0) {
        event.preventdefault()
    }
}