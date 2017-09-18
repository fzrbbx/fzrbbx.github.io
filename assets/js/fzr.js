$('#example2').typeIt({
    strings: ["Halo, saya Fathur Hidayat atau bisa panggil Fathur .", 
    "Pertama kali kerja sebagai Python Developer \
    membuat saya kembali penasaran dengan dunia web development.",
    "Apalagi saat ini semakin banyak teknologi yang dapat diterapkan sebagai solusi\
    bagi lingkungan.",
    "Hal itu menjadi motivasi lebih bagi saya untuk menekuni bidang ini sebagai \
    seorang yang berkarya dan sebagai 'pelajar' :D.", 
    "Sekian perkenalan singkatnya, silakan melihat konten web ini atau \
    versi cetak (.pdf) bisa diunduh <a href='https://www.visualcv.com/fathur-hidayat-indo'>di sini</a>."],
    speed: 50,
    breakLines: false,
    autoStart: false,
    loop: true,
    loopDelay: 5000
}); 
function initMap() {
    var uluru = {lat: -7.289973, lng: 112.780808};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
    });
    var marker = new google.maps.Marker({
    position: uluru,
    map: map
    });
}