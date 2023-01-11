let errfirstname = document.getElementById("errorFirstName")
let errlastname = document.getElementById("errorLastName")
let erremail = document.getElementById("errorEmail")
let errpassword = document.getElementById("errorPassword")
function submitClaim() {
    const input = document.querySelectorAll("input")
    input.forEach(e => {
        let dataInput = e.getAttribute("data-input")
        if (!e.value) {
            if (dataInput == "First Name") {
                errfirstname.innerText = `${dataInput} is empty`
            }
            if (dataInput == "Last Name") {
                errlastname.innerText = `${dataInput} is empty`
            }
            if (dataInput == "Email") {
                erremail.innerText = `${dataInput} is empty`
            }
            if (dataInput == "Password") {
                errpassword.innerText = `${dataInput} is empty`
            }

        }
        else {
            if(dataInput == "First Name") {
                errfirstname.innerText = ``
            }
            if(dataInput == "Last Name") {
                errlastname.innerText = ``
            }
            if(dataInput == "Email") {
                const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(emailRegEx.test(e.value)){
                    erremail.innerText = ``;
                } else {
                    erremail.innerText = `Email is not valid.`;
                }
            }
            if(dataInput == "Password") {
                errpassword.innerText = ``
            }
        }
    });
}