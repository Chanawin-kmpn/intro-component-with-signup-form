let errfirstname = document.getElementById("errorFirstName")
let errlastname = document.getElementById("errorLastName")
let erremail = document.getElementById("errorEmail")
let errpassword = document.getElementById("errorPassword")

document.getElementById("submit-btn").addEventListener("submit", submitClaim);

function submitClaim(event) {
    event.preventDefault();
    const input = document.querySelectorAll("input")
    input.forEach(e => {
        function setInputError(e) {
            e.style.borderColor = 'hsl(0, 100%, 74%)';
        }
        e.style.borderColor = '';
        let dataInput = e.getAttribute("data-input")
        if (!e.value) {
            if (dataInput == "First Name") {
                errfirstname.innerText = `${dataInput} cannot be empty`
                setInputError(e);
            }
            if (dataInput == "Last Name") {
                errlastname.innerText = `${dataInput} cannot be empty`
                setInputError(e);
            }
            if (dataInput == "Email") {
                erremail.innerText = `${dataInput} cannot be empty`
                setInputError(e);
            }
            if (dataInput == "Password") {
                errpassword.innerText = `${dataInput} cannot be empty`
                setInputError(e);
            }
        }
        else {
            if (dataInput == "First Name") {
                errfirstname.innerText = ``
                e.style.borderColor = '';
            }
            if (dataInput == "Last Name") {
                errlastname.innerText = ``
                e.style.borderColor = '';
            }
            if (dataInput == "Email") {
                const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (emailCheck.test(e.value)) {
                    erremail.innerText = ``;
                    e.style.borderColor = '';
                } else {
                    erremail.innerText = `Look like this is not an email`;
                }
            }
            if (dataInput == "Password") {
                errpassword.innerText = ``
                e.style.borderColor = '';
            }
        }
    });
}
