document.getElementById("login-submit").addEventListener('click', function(){
    const emailField = document.getElementById("user-email");
    const emailFields = emailField.value;
    // user password
    const passwordField = document.getElementById("user-password");
    const passwordFields = passwordField.value;
    if(emailFields == "rabin@gmail.com" && passwordFields == "admin"){
        window.location.href = "banking.html"
    }

})