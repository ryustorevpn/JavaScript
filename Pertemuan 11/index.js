const mahasiswa = {
    udin: {
        no_hp : '087812345678',
        kelas : '1 S.I A',
        alamat : {
            jln: 'Jl. Batang Hitam no 69',
            kecamatan : 'Lubang Buaya'
        } 
    }
}

console.log(mahasiswa)

function jumlahbilangan(a, b){
    var total
    total = a + b
    return total
}
console.log(jumlahbilangan(12, 15))


const keliling = (a, b, c)=>{
    let hasil
    hasil = a * b * c

    return hasil
}
console.log(keliling(4,9,16))
console.log(keliling(4,9,7))
console.log(keliling(4,9,2))