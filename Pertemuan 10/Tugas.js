function hitunggaji(tahun_kerja, banyak_proyek) {
    const gaji_bulanan = 2500000;
    const tunjangan_ptahun = 600000;
    const bonus_pproyek = 400000;

    const gaji_ptahun = gaji_bulanan * 12;
    const total_tunjangan = tunjangan_ptahun * tahun_kerja;
    const total_bonus = bonus_pproyek * banyak_proyek;
    const total_gaji = gaji_ptahun + total_tunjangan + total_bonus;

    return total_gaji;
}
const gaji_karyawan = hitunggaji(6, 7);
console.log(`Gaji karyawan: Rp ${gaji_karyawan}`);
