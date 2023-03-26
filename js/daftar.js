const tombol = document.getElementById("daftar");
tombol.onclick = daftar;

function daftar(e){
        e.preventDefault();
    const nama = document.getElementById("dfnama").value;
    const email = document.getElementById("dfemail").value;
    const pass = document.getElementById("dfpass").value;

    localStorage.setItem("Nama", nama);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pass);

    alert("Berhasil Daftar :)");
}