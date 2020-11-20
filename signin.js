function validation(){

    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var text = document.getElementById("text");
    var pattern =/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\.]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

    if (email.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "your email address is valid";
        text.style.color = "black";
    }

    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        text.innerHTML = "please enter valid email address";
        text.style.color = "red";
    }
}


