//s1:read email and password value from inpiut

let emailinput=document.getElementById("email");
let passwordinput=document.getElementById("password");

document.getElementById("loginButton").addEventListener("click",login);


function login(){
    let email=emailinput.value;
    let password=passwordinput.value;

    console.log(email);
    console.log(password);

    if(email=='tani@gmail.com'&&password=='tani')
    {
        alert('valid');
        window.location.href = "dashboard.html";
    }
    else{
        alert('invalid');
    }
}
