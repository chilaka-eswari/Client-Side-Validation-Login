let emailid=document.getElementById("email-id");
let errormsg=document.getElementById("error-msg");
let icon=document.getElementById("icon");
function checker(){
    icon.style.display="inline-block";
    let email=emailid.value.trim();
    if(email===" "){
        icon.style.display="none";
        errormsg.style.display="none";
        emailid.style.border=" 2px solid #d1d3d4";

    }
    else if(validateemail(email)){
      icon.innerHTML='<i class="fas fa-check-circle"></i>';
      icon.style.color=" #2ecc71";
      errormsg.style.display="none";
      emailid.style.border="2px solid #2ecc71";

    }else{
        icon.innerHTML='<i class="fas fa-exclamation-circle"></i>';
        icon.style.color=" red";
        errormsg.style.display="block";
        emailid.style.border="2px solid red";
    }
}
function validateemail(email){
    let atindex=email.indexOf("@");
    let dotindex=email.lastIndexOf(".");
    if(atindex>0 && dotindex>atindex+1 && dotindex<email.length-2){
       return true;
    }else{
        return false;
    }
}

let eyeicon=document.getElementById("eyeicon");
let password=document.getElementById("password");
eyeicon.onclick=function(){
    if(password.type==="password"){
        password.type="text";
        eyeicon.classList.remove("fa-eye-slash");
        eyeicon.classList.add("fa-eye");
    }else{
        password.type="password";
        eyeicon.classList.add("fa-eye");
        eyeicon.classList.remove("fa-eye-slash");
    }
}
