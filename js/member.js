function acc(){
    let dataForm = JSON.parse(sessionStorage.getItem('dataForm'));
    // Ambil index terakhir
    let lastIndex = dataForm.length - 1;
    // Ambil data pada index terakhir
    let dataTerakhir = dataForm[lastIndex];

    document.getElementById('m_nama').textContent = dataTerakhir.nama;
    document.getElementById('m_email').textContent = dataTerakhir.email;
    document.getElementById('m_no').textContent = dataTerakhir.no;
    document.getElementById('gender').textContent = dataTerakhir.gender;
    document.getElementById('favorit').textContent = dataTerakhir.favorit.join(', ');
};

acc();
