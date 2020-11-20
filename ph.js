function phvalidation(){

    var form = document.getElementById("form");
    var phno = document.getElementById("phno").value;
    var phtext = document.getElementById("phtext");
    var pattern =/^\(?([0-9]{3})\)?[-.]?([0-9]){3})[-.]?([0-9]{4}$)/;

    if (phno.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        phtext.innerHTML = "your number is valid";
        phtext.style.color = "red";
    }

    else
    {
        form.classList.remove("valid");
        form.classList.add("invalid");
        phtext.innerHTML = "please enter valid number";
        form.classList.remove("valid");
        form.classList.add("invalid");
        phtext.style.color = "black";
    }

    if(phno == ""){
        form.classList.remove("valid");
        form.classList.remove("invalid");
        phtext.innerHTML ="";
        phtext.style.color = "red"
    }
}