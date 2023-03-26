const form = document.getElementById("form");
const email = document.getElementById("email");
const pass = document.getElementById("pass");

form.addEventListener("submit", function (e){
    e.preventDefault();

     const loc_email = localStorage.getItem("Email");
     const loc_pass = localStorage.getItem("Password");

     if(email.value == loc_email && pass.value == loc_pass){
        alert("Berhasil Masuk ^.^");
        window.location.href = "index.html";
     }else{
        alert("Email atau Password Salah!!");
     }
});