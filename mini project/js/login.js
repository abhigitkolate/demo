function login() {
        
        var email = document.getElementById("email").value;
        var password = document.getElementById("pwd1");
    
        if (email.value == "") {
           alert("Please enter valid email")
        }
  
        if (password.value == "") {
            window.alert("Please enter your password");
            password.focus();
            return false;
        }

    alert('Thank you for login...:')
    window.location = "index.html"
}
