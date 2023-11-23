const prompt=require("prompt-sync")({sigint:true});

let nama = prompt("Silahkan Masukkan Nama Anda : ");
const kelas = ["javascript", "desain grafis"];
 

if(nama === 'Salma'){
    console.log(nama,'. Silahkan Masuk Pada Ruangan 103, Pada Jam 10:00 AM')
}else if(nama === 'Andre'){
    console.log(nama,'. Silahkan Masuk Pada Ruangan 101, Pada Jam 13:00 AM')
}

else{
    console.log('Mohon Maaf',nama,'. Anda Belum Mengambil Kelas Kafe Koding')
}