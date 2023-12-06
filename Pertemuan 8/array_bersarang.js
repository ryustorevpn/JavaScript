// Array negara
var negara = ["Indonesia", "Malaysia", "Singapura"];

// Array bersarang untuk alamat peserta
var alamatPeserta = [
    {
        peserta: "Maulana Aditya",
        provinsi: "Sumatera Barat",
        kotaKabupaten: ["Padang", "Lima Puluh Kota", "Bukittinggi", "Payakumbuh"],
        kecamatan: ["Luhak", "Sijunjung", "Harau"],
        jorong: ["Tabek Buruak", "Padang Mengatas"],
        jalan: "-"
    }
];

// Menampilkan data peserta beserta alamat
console.log("Nama saya " + alamatPeserta[0].peserta, ".Bertempat tinggal di negara " + negara[0]);
console.log("Pada provinsi " + alamatPeserta[0].provinsi);
console.log("Kabupaten " + alamatPeserta[0].kotaKabupaten[1]);
console.log("Kecamatan " + alamatPeserta[0].kecamatan[0]);
console.log("Jorong " + alamatPeserta[0].jorong[0]);
console.log("Dan Jalan " + alamatPeserta[0].jalan);
