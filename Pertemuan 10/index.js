const perusahaan = {
    struktur: {
        direksi: {
            Dimas: {
                nip: "87654321",
                noHp: "081234567890",
                alamat: {
                    jalan: "Jl. Hasanuddin",
                    kota: "Bandung",
                    provinsi: "Jawa Barat",
                },
            },
        },
        manager: {
            Rangga: {
                nip: "98765432",
                noHp: "083654789012",
                alamat: {
                    jalan: "Jl. Merdeka",
                    kota: "Bandung",
                    provinsi: "Jawa Barat",
                },
            },
        },
        divisi: {
            divisi_pelayanan: {
                Budi: {
                    nip: "13579246",
                    noHp: "081237465890",
                    alamat: {
                        jalan: "Jl. Sudirman",
                        kota: "Jakarta",
                        provinsi: "DKI Jakarta",
                    },
                },
                Danu: {
                    nip: "24681357",
                    noHp: "087654321098",
                    alamat: {
                        jalan: "Jl. Pemuda",
                        kota: "Surabaya",
                        provinsi: "Jawa Timur",
                    },
                },
            },
            divisi_pemasaran: {
                Udin: {
                    nip: "98765432",
                    noHp: "081234567890",
                    alamat: {
                        jalan: "Jl. Asia Afrika",
                        kota: "Bandung",
                        provinsi: "Jawa Barat",
                    },
                },
                Ujang: {
                    nip: "13579246",
                    noHp: "081237465890",
                    alamat: {
                        jalan: "Jl. Thamrin",
                        kota: "Jakarta",
                        provinsi: "DKI Jakarta",
                    },
                },
            },
        },
    },
};

console.log(perusahaan.struktur.direksi.Dimas);