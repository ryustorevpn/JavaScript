const mahasiswa1 = {
    nama : 'udin',
    kelas : '13A'
}

const mahasiswa2 = {
    nama : 'bayu',
    kelas : '69B',
    umur : '69'
}

function mahasiswabaru(nama, kelas, umur){
    const mahasiswa = {}
    mahasiswa.nama = nama
    mahasiswa.kelas = kelas
    mahasiswa.umur = umur

    return mahasiswa
}

console.log(mahasiswabaru('udin','SIA','34'))
console.log(mahasiswa2)