function pvalidation(){

    var form = document.getElementById("form");
    var password = document.getElementById("password").value;
    var ptext = document.getElementById("ptext");
    var pattern =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

    if (password.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        ptext.innerHTML = "your password is valid";
        ptext.style.color = "black";
    }

    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        ptext.innerHTML = "please enter valid password";
        form.classList.remove("valid");
        form.classList.add("invalid");
        ptext.style.color = "red";
    }

    if(email == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        ptext.innerHTML ="";
        ptext.style.color = "black"
    }
}


