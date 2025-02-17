$(document).ready(function(){
    $("#cekNilai").click(function(){
        var nilai = parseInt($("#nilaiInput").val());
        var hasil = $("#hasil");

        if (isNaN(nilai)) {
            hasil.hide();
            alert("Masukkan angka yang valid!");
            return;
        }

        hasil.removeClass("hijau oranye kuning merah").show();

        if (nilai >= 85) {
            hasil.text("Mendapatkan Nilai A").addClass("hijau");
        } else if (nilai >= 75) {
            hasil.text("Mendapatkan Nilai B+").addClass("oranye");
        } else if (nilai >= 60) {
            hasil.text("Mendapatkan Nilai C+").addClass("kuning");
        } else {
            hasil.text("Mendapatkan Nilai E").addClass("merah");
        }
    });
});
