let dataForm = JSON.parse(sessionStorage.getItem('dataForm')) || [];

// menyimpan data pada session storage
function submitForm() {
    let nama = document.getElementById('fornama').value;
    let email = document.getElementById('foremail').value;
    let no = document.getElementById('fortelp').value;
    let alamat = document.getElementById('alamat').value;
    let radios = document.getElementsByName("gender");
    let gender = "";
  
    
    for (let i=0; i < radios.length; i++) {
      if (radios[i].checked) {
         gender = radios[i].value;
         break;
      }
   }

   let favorit = [];
   let checkbox = document.querySelectorAll('input[type=checkbox]:checked');

   for (let i=0; i < checkbox.length; i++) {
    favorit.push(checkbox[i].value);
 }

    dataForm.push({
      nama: nama,
      email: email,
      alamat: alamat,
      tlp: no,
      JK: JK,
      favorit: favorit,
    });
    alert("Selamat, Berhasil Menjadi Member");
    sessionStorage.setItem('dataForm', JSON.stringify(dataForm));
    window.location.href = "member.html"
 }

 document.getElementById('dataa').addEventListener('submit', function(event) {
  event.preventDefault();
  submitForm();
});