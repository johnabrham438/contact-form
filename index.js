const form = document.getElementById("form");
const successMessage  = document.getElementById("success-message");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const email = document.getElementById("email");
    const queryType = document.querySelector('input[name="query-type"]:checked');
    const message = document.getElementById("message");
    const consent  = document.getElementById("consent");
    const formAlert = document.querySelectorAll(".form-alert");
    let isValid = true;
    function validEmail(email){
    const Regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return Regex.test(email);

  }

    //first name validation
    firstName.value === "" 
    ? (isValid = false, document.querySelector("#first-name + .form-alert").style.display = "block", firstName.style.border = "1px solid var(--Red)") 
    : (document.querySelector("#first-name + .form-alert").style.display = "none", firstName.style.border = "1px solid var(--Green-600)");

    //last name validation
    lastName.value === "" 
  ? (isValid = false, document.querySelector("#last-name + .form-alert").style.display = "block", lastName.style.border = "1px solid var(--Red)") 
  : (document.querySelector("#last-name + .form-alert").style.display = "none", lastName.style.border = "1px solid var(--Green-600)");


  //email validation
  !validEmail(email.value)
  ? (isValid = false, document.querySelector("#email + .form-alert").style.display = "block", email.style.border = "1px solid var(--Red)") 
  : (document.querySelector("#email + .form-alert").style.display = "none", email.style.border = "1px solid var(--Green-600)");
  

  //radio validation
  !queryType 
  ? (isValid = false, document.querySelector(".radio-options + .form-alert").style.display = "block") 
  : (document.querySelector(".radio-options + .form-alert").style.display = "none");
 //message vallidation 
 message.value === "" 
 ? (isValid = false, document.querySelector("#message + .form-alert").style.display = "block", message.style.border = "1px solid var(--Red)") 
 : (document.querySelector("#message + .form-alert").style.display = "none", message.style.border = "1px solid var(--Green-600)");
 //checkbox vallidation
!consent.checked
? (isValid = false, formAlert[5].style.display = "block") 
: (formAlert[5].style.display = "none");
//form is valid 
if(isValid){
    successMessage.style.display = 'block';
    form.reset();
    setTimeout(() => {
        successMessage.style.display = 'none';
   
    }, 1000);
}
})


