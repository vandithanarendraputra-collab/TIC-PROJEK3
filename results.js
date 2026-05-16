document.addEventListener('DOMContentLoaded', () => {
    const detectedAllergies = JSON.parse(localStorage.getItem('diagnosisResults')) || [];
    const diagnosisListEl = document.getElementById('diagnosis-list');
    const adviceListEl = document.getElementById('advice-list');

    // Mapping Questions to Titles and Advice
    const allergyData = {
        "Apakah Anda alergi terhadap kacang tanah?": {
            title: "ANDA TERKENA PENYAKIT ALERGI KACANG",
            advice: [
                "Hentikan Makan Segera: Jika terasa gatal di mulut atau bibir bengkak saat makan, lepehkan/keluarkan sisa makanan. Jangan ditelan.",
                "Cek Label/Kontaminasi: Alergi kacang bisa dipicu hanya oleh 'jejak' kacang (misal: spatula yang bekas mengaduk selai kacang)."
            ]
        },
        "Apakah Anda alergi terhadap tree nuts (almond, walnut, cashew, pistachio, dll)?": {
            title: "ANDA TERKENA PENYAKIT ALERGI TREE NUTS",
            advice: [
                "Hindari Seluruh Jenis Kacang Pohon: Waspadai produk cokelat, sereal, dan kue yang mungkin mengandung almond atau kenari.",
                "Waspadai Produk Bakery: Banyak toko roti menggunakan minyak atau alat yang sama untuk berbagai jenis produk."
            ]
        },
        "Apakah Anda alergi terhadap susu atau produk dairy?": {
            title: "ANDA TERKENA PENYAKIT ALERGI SUSU / DAIRY",
            advice: [
                "Ganti ke Susu Nabati: Gunakan susu kedelai, almond, atau oat sebagai pengganti susu sapi.",
                "Periksa Label Makanan Olahan: Waspadai istilah seperti 'whey', 'casein', atau 'lactose' pada kemasan makanan."
            ]
        },
        "Apakah Anda alergi terhadap telur?": {
            title: "ANDA TERKENA PENYAKIT ALERGI TELUR",
            advice: [
                "Hindari Telur dan Turunannya: Waspadai mayones, saus tertentu, dan kue kering yang mengandung telur.",
                "Cek Bahan Pengental: Beberapa makanan olahan menggunakan protein telur sebagai pengental atau pengikat."
            ]
        },
        "Apakah Anda alergi terhadap seafood?": {
            title: "ANDA TERKENA PENYAKIT ALERGI SEAFOOD",
            advice: [
                "Hindari Kerang dan Krustasea: Waspadai udang, kepiting, dan lobster dalam hidangan campuran.",
                "Waspadai Saus Tiram: Banyak masakan Asia menggunakan saus tiram yang bisa memicu reaksi alergi."
            ]
        },
        "Apakah Anda alergi terhadap ikan tertentu?": {
            title: "ANDA TERKENA PENYAKIT ALERGI IKAN",
            advice: [
                "Hindari Segala Jenis Ikan: Waspadai kontaminasi silang di restoran seafood atau pasar ikan.",
                "Periksa Bumbu Masakan: Hati-hati dengan terasi, saus ikan, atau kaldu ikan dalam masakan."
            ]
        },
        "Apakah Anda alergi terhadap gandum atau gluten?": {
            title: "SENSITIFITAS TERHADAP GANDUM / GLUTEN",
            advice: [
                "Ganti ke Tepung Bebas Gluten: Gunakan tepung beras, jagung, atau singkong untuk memasak.",
                "Cari Label Gluten-Free: Selalu utamakan produk dengan sertifikasi bebas gluten untuk keamanan."
            ]
        },
        "Apakah Anda alergi terhadap kedelai?": {
            title: "ANDA TERKENA PENYAKIT ALERGI KEDELAI",
            advice: [
                "Hindari Kecap dan Produk Kedelai: Waspadai tempe, tahu, dan susu kedelai dalam menu harian.",
                "Cek Lesitin Kedelai: Bahan ini sering ditemukan pada cokelat dan makanan ringan olahan."
            ]
        },
        "Apakah Anda alergi terhadap wijen (sesame)?": {
            title: "ANDA TERKENA PENYAKIT ALERGI WIJEN",
            advice: [
                "Hindari Biji dan Minyak Wijen: Waspadai masakan Timur Tengah dan Asia yang sering menggunakan wijen.",
                "Cek Saus dan Dressing: Tahini, hummus, dan dressing salad seringkali mengandung wijen."
            ]
        }
    };

    if (detectedAllergies.length === 0) {
        diagnosisListEl.innerHTML = `
            <div class="result-item">
                <div class="item-num">!</div>
                <div class="item-text">TIDAK ADA ALERGI YANG TERDETEKSI. ANDA SEHAT!</div>
            </div>
        `;
        adviceListEl.innerHTML = `
            <div class="result-item">
                <div class="item-num">1</div>
                <div class="item-text">Tetap jaga pola makan sehat dan seimbang.</div>
            </div>
        `;
    } else {
        let diagnosisCount = 1;
        let adviceCount = 1;

        detectedAllergies.forEach(q => {
            const data = allergyData[q];
            if (data) {
                // Populate Diagnosis
                const diagItem = document.createElement('div');
                diagItem.className = 'result-item';
                diagItem.innerHTML = `
                    <div class="item-num">${diagnosisCount++}</div>
                    <div class="item-text">${data.title}</div>
                `;
                diagnosisListEl.appendChild(diagItem);

                // Populate Advice
                data.advice.forEach(text => {
                    const adviceItem = document.createElement('div');
                    adviceItem.className = 'result-item';
                    adviceItem.innerHTML = `
                        <div class="item-num">${adviceCount++}</div>
                        <div class="item-text">${text}</div>
                    `;
                    adviceListEl.appendChild(adviceItem);
                });
            }
        });
    }
});
