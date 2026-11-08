const form = document.getElementById("form");
const tabel = document.getElementById("tabel");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const instansi = document.getElementById("instansi").value;
    const tujuan = document.getElementById("tujuan").value;
    const catatan = document.getElementById("catatan").value;

    const barisbaru = document.createElement("tr");
    const datanama = document.createElement("td");
    const datainstansi = document.createElement("td");
    const datatujuan = document.createElement("td");
    const datacatatan = document.createElement("td");

   datanama.textContent = nama;
   barisbaru.appendChild(datanama);

   datainstansi.textContent = instansi;
   barisbaru.appendChild(datainstansi);

   datatujuan.textContent = tujuan;
   barisbaru.appendChild(datatujuan);

   datacatatan.textContent = catatan;
   barisbaru.appendChild(datacatatan);

    tabel.appendChild(barisbaru);

    form.reset();

})