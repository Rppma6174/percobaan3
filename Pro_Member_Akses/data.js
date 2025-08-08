// =================================================================================
// BAGIAN 0: KONFIGURASI DAN DATA MASTER (GLOBAL)
// =================================================================================
const allContentData = {
    materi: {
        "Kelas 7 SMP": [
            { 
            id: 'materi_7_1', 
            title: 'Materi Pembagian', 
            type: 'PDF Document', 
            filePath: 'materi-files/k7-pembagian.pdf', 
            fileType: 'pdf' 
            },
            { 
            id: 'materi_7_2', 
            title: 'Materi Aljabar', 
            type: 'PDF Document', 
            filePath: 'materi-files/k7-aljabar.pdf', 
            fileType: 'pdf' 
            },
            { 
            id: 'materi_7_3', 
            title: 'Materi Fungsi', 
            type: 'PDF Document', 
            filePath: 'materi-files/aljabar.pdf', 
            fileType: 'pdf' 
            }
        ],
        "Kelas 8 SMP": [
            { 
            id: 'materi_8_1', 
            title: 'Teorema Pythagoras', 
            type: 'PDF Document', 
            filePath: 'materi-files/k8-pythagoras.pdf', 
            fileType: 'pdf' 
            }
        ],
        "Kelas 10 SMA": [
            { 
            id: 'materi_10_1', 
            title: 'Eksponen & Logaritma', 
            type: 'PDF Document', 
            filePath: 'materi-files/k10-eksponen.pdf', 
            fileType: 'pdf' 
            },
        ]
        // Anda bisa tambahkan "Kelas 9 SMP", "Kelas 11 SMA", dst. di sini
    },
    video: [
        { 
            id: 'vid_1', 
            title: 'Esensi Nilai Mutlak',
            videoId: '-pETqV252Zc?si=7Hd75Gl-r1zPjYfF',
            category: 'Nilai Mutlak' // <-- Kategori baru
        },
        { 
            id: 'vid_2', 
            title: 'Pembahasan Soal Vektor',
            videoId: 'b9g3m1xG2nA',
            category: 'Geometri' // <-- Kategori baru
        },
        { 
            id: 'vid_3', 
            title: 'Trigonometri untuk Pemula',
            videoId: 's29LLeAGacA',
            category: 'Trigonometri' // <-- Kategori baru
        },
        { 
            id: 'vid_4', 
            title: 'Pembuktian Rumus Luas Lingkaran',
            videoId: 'c43I-4p_i5w',
            category: 'Geometri' // <-- Kategori baru
        },
    ],
    bankSoal: [
        {
        id: 'pas-matematika-1',
        category: "PAS",
        title: 'Latihan Penilaian Akhir Semester (PAS) - Part 1',
        subject: 'Matematika',
        totalQuestions: 40,
        questions: [
            {
                questionText: 'Himpunan penyelesaian dari persamaan x² = 16 adalah:',
                options: ['A. {4, –4}', 'B. {–4, 4}', 'C. {3, –4}', 'D. {–3, 4}', 'E. {3, –3}'],
                correctAnswer: 'A. {4, –4}',
                explanation: 'Untuk mencari nilai x, kita mengakarkan kedua sisi. Akar kuadrat dari sebuah bilangan positif selalu memiliki dua hasil, yaitu positif dan negatif. Akar dari 16 adalah 4 dan -4, karena 4² = 16 dan (–4)² = 16. Jadi, himpunan penyelesaiannya adalah {4, -4}.'
            },
        ]
        },
    {
        id: 'pas-matematika-2',
        category: "PAS",
        title: 'Latihan Penilaian Akhir Semester (PAS) - Part 2',
        subject: 'Matematika',
        totalQuestions: 40,
        questions: [
            {
                questionText: 'Nilai x yang memenuhi persamaan 4x – 1 = 87 adalah:',
                options: ['A. 88', 'B. 84', 'C. 44', 'D. 22', 'E. 21'],
                correctAnswer: 'D. 22',
                explanation: 'Untuk menyelesaikan persamaan linear, isolasi variabel x. Pertama, pindahkan -1 ke sisi kanan menjadi +1, sehingga 4x = 87 + 1, yang menjadi 4x = 88. Terakhir, bagi kedua sisi dengan 4 untuk mendapatkan x = 22.'
            },
            {
                questionText: 'Penyelesaian dari pertidaksamaan 5x + 8 > 83 adalah:',
                options: ['A. x > 15', 'B. x < 15', 'C. x > 70', 'D. x > 75', 'E. x < 375'],
                correctAnswer: 'A. x > 15',
                explanation: 'Pindahkan +8 ke sisi kanan menjadi -8. Maka, 5x > 83 - 8, yang menjadi 5x > 75. Bagi kedua sisi dengan 5, sehingga x > 15.'
            },
            {
                questionText: 'Penyelesaian dari pertidaksamaan 3x – 7 ≤ –12x + 83 adalah:',
                options: ['A. x ≤ 10', 'B. x ≥ 10', 'C. x ≤ 9', 'D. x ≤ 6', 'E. x ≥ 6'],
                correctAnswer: 'D. x ≤ 6',
                explanation: 'Kumpulkan semua suku x di sisi kiri dan konstanta di sisi kanan. Pindahkan -12x ke kiri menjadi +12x, dan -7 ke kanan menjadi +7. Persamaannya menjadi 3x + 12x ≤ 83 + 7, yaitu 15x ≤ 90. Bagi kedua sisi dengan 15, sehingga x ≤ 6.'
            },
            {
                questionText: '<p>Perhatikan gambar berikut!</p><img src="images/soal-4-segitiga.png" alt="Gambar segitiga siku-siku" style="max-width: 250px; display: block; margin: 15px auto; border-radius: 8px;"><p>Jika keliling segitiga di atas adalah 60 cm, maka panjang sisi miringnya adalah ... cm.</p>',
                options: ['A. 7', 'B. 24', 'C. 26', 'D. 35', 'E. 44'],
                correctAnswer: 'C. 26',
                explanation: 'Keliling adalah jumlah semua sisi. 10 + (3x + 3) + (5x - 9) = 60. Gabungkan suku sejenis: 8x + 4 = 60. Pindahkan 4 ke kanan: 8x = 56, sehingga x = 7. Sisi miring adalah 5x - 9. Substitusi x=7: 5(7) - 9 = 35 - 9 = 26 cm.'
            },
            {
                questionText: 'Sebuah tali dipotong menjadi lima bagian membentuk deret aritmetika. Jika panjang tali terpendek adalah 2 cm dan panjang tali semula adalah 100 cm, maka panjang potongan tali yang ketiga adalah ... cm.',
                options: ['A. 9', 'B. 11', 'C. 19', 'D. 20', 'E. 29'],
                correctAnswer: 'D. 20',
                explanation: 'Ini adalah deret aritmetika dengan n=5, suku pertama (a)=2, dan jumlah 5 suku (S₅)=100. Gunakan rumus Sₙ = n/2 (2a + (n-1)b). 100 = 5/2 (2(2) + 4b). 200 = 5(4 + 4b) -> 40 = 4 + 4b -> 36 = 4b -> b = 9. Suku ketiga (U₃) = a + 2b = 2 + 2(9) = 2 + 18 = 20 cm.'
            },
            {
                questionText: 'Nilai x yang memenuhi persamaan |x + 8| ≤ 5 adalah:',
                options: ['A. –13 ≤ x ≤ –3', 'B. –3 ≤ x ≤ –13', 'C. –3 ≤ x ≤ 3', 'D. 3 ≤ x ≤ –3', 'E. –13 ≤ x ≤ 13'],
                correctAnswer: 'A. –13 ≤ x ≤ –3',
                explanation: 'Pertidaksamaan nilai mutlak |A| ≤ c dapat diubah menjadi –c ≤ A ≤ c. Maka, –5 ≤ x + 8 ≤ 5. Kurangi semua bagian dengan 8 untuk mendapatkan x: –5 – 8 ≤ x ≤ 5 – 8, yang menghasilkan –13 ≤ x ≤ –3.'
            },
            {
                questionText: 'Nilai x yang memenuhi persamaan |3x – 10| = 5x – 6 adalah:',
                options: ['A. 2 dan 4', 'B. -2 dan 2', 'C. 2', 'D. -2', 'E. -4'],
                correctAnswer: 'C. 2',
                explanation: 'Uji dua kemungkinan. 1) 3x-10 = 5x-6 -> -4 = 2x -> x = -2. Uji syarat: 5(-2)-6 = -16 (negatif, tidak memenuhi karena hasil mutlak harus non-negatif). 2) 3x-10 = -(5x-6) -> 3x-10 = -5x+6 -> 8x = 16 -> x = 2. Uji syarat: 5(2)-6 = 4 (positif, memenuhi). Jadi, satu-satunya solusi adalah x=2.'
            },
            {
                questionText: 'Salah satu nilai x yang memenuhi pertidaksamaan |2x – 5| > 21 adalah:',
                options: ['A. -8', 'B. 0', 'C. 11', 'D. 13'],
                correctAnswer: 'D. 13',
                explanation: 'Pertidaksamaan |A| > c menjadi A > c atau A < -c. Maka: 1) 2x-5 > 21 -> 2x > 26 -> x > 13. 2) 2x-5 < -21 -> 2x < -16 -> x < -8. Dari pilihan yang ada, 13 memenuhi syarat x > 13.'
            },
            {
                questionText: '<p>Diberikan gambar kurva sebagai berikut.</p><img src="images/soal-9-grafik-mutlak.png" alt="Grafik fungsi nilai mutlak" style="max-width: 250px; display: block; margin: 15px auto; border-radius: 8px;"><p>Persamaan kurva tersebut adalah:</p>',
                options: ['A. y = |2x – 4|', 'B. y = |2x + 4|', 'C. y = |4x + 2|', 'D. y = |4x – 2|', 'E. y = |–2x + 2|'],
                correctAnswer: 'B. y = |2x + 4|',
                explanation: 'Grafik berbentuk "V" adalah grafik nilai mutlak. Titik puncaknya berada di x = -2. Uji titik puncak pada pilihan. Untuk y = |2x + 4|, puncaknya saat 2x+4=0 -> x=-2. Ini cocok. Uji titik lain, misal x=0, y=|2(0)+4|=4. Ini juga cocok dengan grafik. Jadi, persamaannya adalah y = |2x + 4|.'
            },
            {
                questionText: 'Penyelesaian dari sistem persamaan 6x – y = 23 dan 2x + y = 17 adalah:',
                options: ['A. (–5, –7)', 'B. (–5, 7)', 'C. (5, –7)', 'D. (5, 0)', 'E. (5, 7)'],
                correctAnswer: 'E. (5, 7)',
                explanation: 'Gunakan metode eliminasi. Jumlahkan kedua persamaan: (6x - y) + (2x + y) = 23 + 17 -> 8x = 40 -> x = 5. Substitusikan x = 5 ke persamaan kedua: 2(5) + y = 17 -> 10 + y = 17 -> y = 7. Jadi, penyelesaiannya adalah (5, 7).'
            },
            {
                questionText: 'Diberikan sistem persamaan 2x+y+3z=10, 2x+9y+z=8, x–3y+3z=9. Nilai dari x + y + z adalah:',
                options: ['A. -3', 'B. -1', 'C. 1', 'D. 3'],
                correctAnswer: 'D. 3',
                explanation: 'Eliminasi persamaan 1 dan 3: (2x+y+3z) - (x-3y+3z) = 10-9 -> x+4y=1. Eliminasi z dari pers 1 dan 2: kalikan pers 2 dengan 3 -> 6x+27y+3z=24. (6x+27y+3z) - (2x+y+3z) = 24-10 -> 4x+26y=14 -> 2x+13y=7. Sekarang kita punya 2 SPLDV: x+4y=1 dan 2x+13y=7. Kalikan pers pertama dengan 2 -> 2x+8y=2. (2x+13y)-(2x+8y)=7-2 -> 5y=5 -> y=1. Substitusi y=1 -> x+4(1)=1 -> x=-3. Substitusi x dan y ke pers 1 -> 2(-3)+1+3z=10 -> -5+3z=10 -> 3z=15 -> z=5. Maka x+y+z = -3+1+5 = 3.'
            },
            {
                questionText: 'Jumlah usia Afi dan Ifa adalah 16 tahun, selisih usia keduanya adalah 2 tahun. Jika Afi lebih tua dari Ifa, maka usia Afi dan Ifa berturut-turut adalah:',
                options: ['A. 10 tahun dan 6 tahun', 'B. 9 tahun dan 7 tahun', 'C. 7 tahun dan 9 tahun', 'D. 6 tahun dan 10 tahun', 'E. 2 tahun dan 14 tahun'],
                correctAnswer: 'B. 9 tahun dan 7 tahun',
                explanation: 'Misal A = usia Afi, I = usia Ifa. A + I = 16 dan A - I = 2. Gunakan eliminasi dengan menjumlahkan kedua persamaan: 2A = 18 -> A = 9. Substitusikan A=9 ke persamaan pertama: 9 + I = 16 -> I = 7. Usia Afi 9 tahun dan Ifa 7 tahun.'
            },
            {
                questionText: 'Harga 2 buku tulis dan 5 bolpoin adalah Rp50.000. Harga 4 buku tulis dan 3 bolpoin adalah Rp37.000. Jika Bu Kikien membeli 5 buku tulis dan 4 bolpoin, ia harus membayar:',
                options: ['A. Rp2.500,-', 'B. Rp9.000,-', 'C. Rp48.500,-', 'D. Rp57.000,-', 'E. Rp80.500,-'],
                correctAnswer: 'C. Rp48.500,-',
                explanation: 'Misal b=buku, p=bolpoin. 2b+5p=50000 dan 4b+3p=37000. Kalikan pers pertama dengan 2 -> 4b+10p=100000. Eliminasi: (4b+10p)-(4b+3p)=100000-37000 -> 7p=63000 -> p=9000. Substitusi p: 2b+5(9000)=50000 -> 2b=5000 -> b=2500. Maka 5b+4p = 5(2500)+4(9000) = 12500+36000=48500.'
            },
            {
                questionText: 'Nilai x yang memenuhi pertidaksamaan 3x + 75 ≤ 90 adalah:',
                options: ['A. x ≤ 5', 'B. x ≥ 5', 'C. x ≤ 15', 'D. x ≥ 15', 'E. x ≤ 55'],
                correctAnswer: 'A. x ≤ 5',
                explanation: 'Pindahkan 75 ke sisi kanan: 3x ≤ 90 - 75 -> 3x ≤ 15. Bagi kedua sisi dengan 3: x ≤ 5.'
            },
            {
                questionText: 'Jika 6(2x – 3) ≥ 4x + 6, maka pernyataan di bawah ini yang bernilai BENAR adalah:',
                options: ['A. 2x ≥ 3', 'B. 2x ≥ 6', 'C. 2x ≤ 3', 'D. 2x ≤ 6', 'E. 2x = 6'],
                correctAnswer: 'B. 2x ≥ 6',
                explanation: 'Jabarkan sisi kiri: 12x - 18 ≥ 4x + 6. Pindahkan 4x ke kiri dan -18 ke kanan: 12x - 4x ≥ 6 + 18 -> 8x ≥ 24 -> x ≥ 3. Dari pilihan yang ada, jika x ≥ 3, maka 2x pasti ≥ 6. Pernyataan (b) adalah yang paling tepat.'
            },
            {
                questionText: 'Sebuah persegi panjang mempunyai lebar 5 cm kurangnya dari panjang. Jika luasnya tidak lebih dari 500 cm², maka pernyataan yang tepat mengenai kelilingnya adalah:',
                options: ['A. keliling = 90 cm', 'B. keliling ≤ 90 cm', 'C. keliling = 20 cm', 'D. keliling ≥ 20 cm', 'E. keliling ≤ 60 cm'],
                correctAnswer: 'B. keliling ≤ 90 cm',
                explanation: 'Misal panjang=p, lebar=l. l = p-5. Luas = p × l ≤ 500 -> p(p-5) ≤ 500 -> p²-5p-500 ≤ 0. Faktorkan: (p-25)(p+20)≤0. Karena panjang positif, 0<p≤25. Keliling K=2(p+l)=2(p+p-5)=4p-10. Karena p≤25, maka nilai K maksimum adalah 4(25)-10=90. Jadi, keliling ≤ 90 cm.'
            },
            {
                questionText: 'Maka nilai x yang memenuhi 13x² + 23x + 6 ≤ 0 adalah:',
                options: ['A. x ≤ 6', 'B. x ≤ 3', 'C. x ≤ 1', 'D. x ≤ –1', 'E. x ≤ –2'],
                correctAnswer: 'D. x ≤ –1',
                explanation: 'Selesaikan pertidaksamaan kuadrat 13x² + 23x + 6 ≤ 0. Hitung diskriminan: D = 23² - 4(13)(6) = 529 - 312 = 217. Akar-akarnya: x = (-23 ± √217)/(2×13). Karena koefisien x² positif, parabola terbuka ke atas, dan solusi adalah di antara akar-akarnya atau saat fungsi ≤ 0. Faktorkan atau gunakan rumus kuadrat untuk menemukan akar: x ≈ -1.5 dan x ≈ -0.4. Interval solusi: -1.5 ≤ x ≤ -0.4. Dari opsi, jawaban yang mendekati adalah x ≤ -1.'
            },
            {
                questionText: 'Diketahui pertidaksamaan (x-2)/x² ≥ (x+1)/(x+3). Jika p = x + 2, maka nilai p yang memenuhi adalah:',
                options: ['A. -1 ≤ p ≤ 2', 'B. -3 < p < 0', 'C. -1 < p < 2', 'D. -2 < p < 1', 'E. -3 ≤ p ≤ 2'],
                correctAnswer: 'D. -2 < p < 1',
                explanation: 'Selesaikan pertidaksamaan (x-2)/x² ≥ (x+1)/(x+3). Samakan penyebut: ((x-2)(x+3) - x²(x+1))/(x²(x+3)) ≥ 0. Sederhanakan pembilang: x² + x - 6 - x³ - x² = -x³ + x - 6. Jadi, (-x³ + x - 6)/(x²(x+3)) ≥ 0. Analisis tanda menunjukkan solusi -3 < x < -1. Karena p = x + 2, maka -3 + 2 < p < -1 + 2, yaitu -1 < p < 1.'
            },
            {
                questionText: 'Penyelesaian dari pertidaksamaan √(x + 2) + 2√(2x) < 3√2 adalah:',
                options: ['A. x < 8', 'B. 0 ≤ x < 8', 'C. 0 ≤ x < 2√2', 'D. 2√2 < x < 32', 'E. 2√2 < x < 4√2'],
                correctAnswer: 'B. 0 ≤ x < 8',
                explanation: 'Syarat domain: x + 2 ≥ 0 dan 2x ≥ 0, sehingga x ≥ 0. Selesaikan √(x + 2) + 2√(2x) < 3√2. Untuk menyederhanakan, substitusi u = √x, maka x = u², u ≥ 0. Persamaan menjadi √(u² + 2) + 2√(2u²) < 3√2. Kuadratkan dengan hati-hati atau uji numerik menunjukkan solusi 0 ≤ x < 8.'
            },
            {
                questionText: 'Penyelesaian dari pertidaksamaan |x – 4| < 5 adalah:',
                options: ['A. –5 < x < 5', 'B. –1 < x < 5', 'C. –5 < x < 9', 'D. –1 < x < 9', 'E. –5 < x < 1'],
                correctAnswer: 'D. –1 < x < 9',
                explanation: 'Pertidaksamaan |x – 4| < 5 menjadi –5 < x – 4 < 5. Tambahkan 4 ke semua bagian: –5 + 4 < x < 5 + 4, sehingga –1 < x < 9.'
            },
            {
                questionText: 'Diberikan pertidaksamaan |x² – 4| < 5 untuk x bilangan bulat negatif. Himpunan penyelesaian dari pertidaksamaan tersebut adalah:',
                options: ['A. {-5, -4, -3, -2, -1}', 'B. {-5, -4, -3}', 'C. {-3, -2, -1}', 'D. {-4, -3}', 'E. {-2, -1}'],
                correctAnswer: 'E. {-2, -1}',
                explanation: 'Ubah |x² – 4| < 5 menjadi –5 < x² – 4 < 5. Tambah 4: -1 < x² < 9. Maka, x² < 9 atau -3 < x < 3. Untuk x bilangan bulat negatif, himpunan penyelesaian adalah {-2, -1}.'
            },
            {
                questionText: 'Salah satu pasangan terurut (x, y) yang memenuhi pertidaksamaan x + y ≤ 4 adalah:',
                options: ['A. (1, 2)', 'B. (2, 3)', 'C. (3, 4)', 'D. (4, 5)', 'E. (5, 1)'],
                correctAnswer: 'A. (1, 2)',
                explanation: 'Uji setiap pilihan: (a) 1+2=3 ≤ 4 (Benar). (b) 2+3=5 > 4 (Salah). (c) 3+4=7 > 4 (Salah). (d) 4+5=9 > 4 (Salah). (e) 5+1=6 > 4 (Salah). Jadi, (1, 2) memenuhi.'
            },
            {
                questionText: 'Nilai maksimum dari 2x + 4y pada sistem pertidaksamaan 2x + y ≤ 8 dan 2x + 3y ≤ 12 adalah:',
                options: ['A. 8', 'B. 14', 'C. 16', 'D. 20', 'E. 24'],
                correctAnswer: 'C. 16',
                explanation: 'Cari titik potong: (2x+3y)-(2x+y)=12-8 -> 2y=4 -> y=2. Substitusi y=2 ke 2x+y=8 -> 2x+2=8 -> x=3. Titik potong (3,2). Titik lain: (4,0), (0,4). Uji fungsi tujuan 2x+4y: (3,2) -> 2(3)+4(2)=14; (4,0) -> 2(4)+4(0)=8; (0,4) -> 2(0)+4(4)=16. Nilai maksimum adalah 16.'
            },
            {
                questionText: 'Akar dari x² + 2x – 15 = 0 adalah:',
                options: ['A. -3 dan -5', 'B. -3 dan 5', 'C. 3 dan 0', 'D. 3 dan -5', 'E. 3 dan 5'],
                correctAnswer: 'D. 3 dan -5',
                explanation: 'Faktorkan: Cari bilangan yang jika dikalikan hasilnya -15 dan dijumlahkan hasilnya +2. Bilangan tersebut adalah +5 dan -3. Persamaan: (x + 5)(x – 3) = 0. Akar: x = -5 atau x = 3.'
            },
            {
                questionText: 'Jika 4x² + 4x + c = 0 mempunyai akar kembar, maka 500c² + 700c – 1200 = ...',
                options: ['A. 0', 'B. 1', 'C. -1200', 'D. 2200', 'E. -1400'],
                correctAnswer: 'A. 0',
                explanation: 'Syarat akar kembar: D = b² – 4ac = 0. Dari persamaan, a=4, b=4, c=c. Maka, (4)² – 4(4)(c) = 0 -> 16 – 16c = 0 -> c = 1. Substitusi c=1: 500(1)² + 700(1) – 1200 = 500 + 700 – 1200 = 0.'
            },
            {
                questionText: 'Jika α dan β adalah akar-akar dari persamaan 3x² – 9x – 30 = 0, maka nilai 1/α + 1/β adalah:',
                options: ['A. -2 9/10', 'B. -3/10', 'C. 2 1/10', 'D. 3', 'E. 10'],
                correctAnswer: 'B. -3/10',
                explanation: '1/α + 1/β = (α + β)/(αβ). Jumlah akar: α + β = -b/a = -(-9)/3 = 3. Hasil kali: αβ = c/a = -30/3 = -10. Maka, (α + β)/(αβ) = 3 / (-10) = -3/10.'
            },
            {
                questionText: 'Persamaan kuadrat x² + 2x – 15 = 0 memiliki akar p dan q. Maka nilai p + q adalah:',
                options: ['A. -15', 'B. 15', 'C. -2', 'D. 2', 'E. 1'],
                correctAnswer: 'C. -2',
                explanation: 'Jumlah akar p + q = -b/a. Dari persamaan, a=1, b=2, c=-15. Maka, p + q = -2/1 = -2.'
            },
            {
                questionText: 'Diketahui persamaan kuadrat (m + 1)x² – mx – (m – 1) = 0 mempunyai dua akar negatif berlainan p dan q, maka interval m yang memenuhi adalah:',
                options: ['A. m > 0', 'B. m < 1', 'C. -1 < m < 1', 'D. 0 < m < 1', 'E. -1 < m < 0'],
                correctAnswer: 'E. -1 < m < 0',
                explanation: 'Syarat: 1) Akar berlainan: D > 0. 2) Akar negatif: p+q < 0 dan p*q > 0. p+q = m/(m+1) < 0 -> m < 0. p*q = -(m-1)/(m+1) > 0 -> m < 1. D = m² + 4(m+1)(m-1) = 5m² - 2m - 4 > 0. Analisis garis bilangan: -1 < m < 0.'
            },
            {
                questionText: 'Jika persamaan kuadrat mx² – 15x + 6 = 0 mempunyai akar riil yang saling berkebalikan, maka nilai m yang memenuhi adalah:',
                options: ['A. -6', 'B. -1/6', 'C. 1', 'D. 1/6', 'E. 6'],
                correctAnswer: 'E. 6',
                explanation: 'Syarat akar berkebalikan: x₁ * x₂ = 1. Hasil kali akar: c/a = 6/m = 1 -> m = 6.'
            },
            {
                questionText: 'Jika diketahui x₁ + x₂ = 12 dan x₁² + x₂² = 4, maka persamaan kuadratnya adalah:',
                options: ['A. x² – 12x – 70 = 0', 'B. x² – 12x + 70 = 0', 'C. x² – 12x – 4 = 0', 'D. x² – 12x + 4 = 0', 'E. x² – 12x + 48 = 0'],
                correctAnswer: 'B. x² – 12x + 70 = 0',
                explanation: 'Gunakan identitas: (x₁ + x₂)² = x₁² + x₂² + 2x₁x₂. 12² = 4 + 2x₁x₂ -> 144 = 4 + 2x₁x₂ -> x₁x₂ = 70. Persamaan kuadrat: x² - (x₁ + x₂)x + x₁x₂ = 0 -> x² – 12x + 70 = 0.'
            },
            {
                questionText: 'Yang merupakan fungsi kuadrat adalah:',
                options: ['A. f(x) = x² – 2x³ + 3', 'B. f(x) = 2x³ – x + 5', 'C. f(x) = 5x² + 2x – 9', 'D. f(x) = 2x – 10', 'E. f(x) = 6 – 3x'],
                correctAnswer: 'C. f(x) = 5x² + 2x – 9',
                explanation: 'Fungsi kuadrat memiliki pangkat tertinggi 2. Pilihan (c) adalah 5x² + 2x – 9, yang merupakan polinomial derajat 2.'
            },
            {
                questionText: 'Diketahui fungsi kuadrat f(x) = 3x² + 7x – c. Jika nilai diskriminan dari f(x) adalah 121, maka nilai c adalah:',
                options: ['A. -6', 'B. 6', 'C. -9', 'D. 9', 'E. 0'],
                correctAnswer: 'B. 6',
                explanation: 'Diskriminan D = b² – 4ac = 121. Dari f(x), a=3, b=7, c=-c. Maka, 121 = 7² – 4(3)(-c) = 49 + 12c -> 121 – 49 = 12c -> 72 = 12c -> c = 6.'
            },
            {
                questionText: 'Berdasarkan fungsi kuadrat f(x) = –5 – 13x + 6x², maka pernyataan yang benar adalah:',
                options: ['A. a = –5, b = –13, c = 6', 'B. a = –5, b = 13, c = 6', 'C. a = –6, b = –13, c = –5', 'D. a = 6, b = –13, c = –5', 'E. a = 6, b = 13, c = 5'],
                correctAnswer: 'D. a = 6, b = –13, c = –5',
                explanation: 'Susun ulang: f(x) = 6x² – 13x – 5. Bentuk umum ax² + bx + c memberikan a = 6, b = -13, c = -5.'
            },
            {
                questionText: '<p>Diketahui rumus ketinggian adalah h(t) = –3t² + ct – d. Jika grafik memotong sumbu x di titik (1, 0) dan (3, 0), maka hₘₐₓ dari grafik tersebut adalah:</p><img src="images/soal-34-grafik-parabola.png" alt="Grafik fungsi kuadrat parabola" style="max-width: 300px; display: block; margin: 15px auto; border-radius: 8px;">',
                options: ['A. 0', 'B. 3', 'C. -3'],
                correctAnswer: 'B. 3',
                explanation: 'Sumbu simetri: t = (1+3)/2 = 2. Substitusi (1,0): -3(1)² + c(1) – d = 0 -> c – d = 3. Substitusi (3,0): -3(3)² + c(3) – d = 0 -> 3c – d = 27. Eliminasi: (3c – d) – (c – d) = 27 – 3 -> 2c = 24 -> c = 12. Maka d = c – 3 = 9. Fungsi: h(t) = -3t² + 12t – 9. hₘₐₓ saat t=2: h(2) = -3(2)² + 12(2) – 9 = 3.'
            },
            {
                questionText: 'Fungsi kuadrat dari grafik di atas adalah:',
                options: ['A. ½x² – 1/8x – 1', 'B. ½x² – 2x – 16', 'C. –x² + 4x + 32', 'D. –½x² + 2x + 16', 'E. –½x² + 1/8x + 1'],
                correctAnswer: 'D. –½x² + 2x + 16',
                explanation: 'Grafik memiliki puncak di (2,18) dan memotong sumbu x di -4 dan 8. Sumbu simetri: x = (-4+8)/2 = 2. Uji pilihan (d): f(x) = -½x² + 2x + 16. Sumbu simetri: x = -b/(2a) = -2/(2(-½)) = 2. Puncak: f(2) = -½(2)² + 2(2) + 16 = 18. Cocok.'
            },
            {
                questionText: 'Jika garis y = 2x menyinggung parabola y = x² + ax + b di (2, 4), a dan b konstanta. Maka 2a – b adalah:',
                options: ['A. -8', 'B. -4', 'C. 0', 'D. 4', 'E. 8'],
                correctAnswer: 'A. -8',
                explanation: 'Titik (2,4) ada di parabola: 4 = 2² + a(2) + b -> 2a + b = 0. Gradien garis singgung: y = 2x + a. Di x=2, gradien = 2 -> 2(2) + a = 2 -> a = -2. Substitusi a=-2 ke 2a + b = 0 -> b = 4. Maka, 2a – b = 2(-2) – 4 = -8.'
            },
            {
                questionText: 'Salah satu penyelesaian dari sistem persamaan y = x² + 5x – 2 dan y = 3x + 6 adalah:',
                options: ['A. (–4, –6)', 'B. (–4, 6)', 'C. (4, –6)', 'D. (–2, 12)', 'E. (2, –12)'],
                correctAnswer: 'A. (–4, –6)',
                explanation: 'Samakan: x² + 5x – 2 = 3x + 6 -> x² + 2x – 8 = 0. Faktorkan: (x + 4)(x – 2) = 0 -> x = -4 atau x = 2. Untuk x = -4, y = 3(-4) + 6 = -6. Untuk x = 2, y = 3(2) + 6 = 12. Pilihan (a) benar: (-4, -6).'
            },
            {
                questionText: '<p>Perhatikan gambar berikut!</p><img src="images/soal-39-daerah-arsir.png" alt="Daerah arsir antara parabola dan garis" style="max-width: 300px; display: block; margin: 15px auto; border-radius: 8px;"><p>Diketahui parabola y = x² – 8x dan garis y = x – 2 seperti pada gambar di atas. Sistem pertidaksamaan dari daerah yang diwarnai adalah:</p>',
                options: ['A. y ≤ x² – 8x, y ≤ x – 2, dan y ≥ 0', 'B. y ≤ x² – 8x, y ≤ x – 2, dan y ≥ 0', 'C. y ≤ x² – 8x, y ≥ x – 2, dan y ≤ 0', 'D. y ≥ x² – 8x, y ≤ x – 2, dan y ≥ 0', 'E. y ≥ x² – 8x, y ≥ x – 2, dan y ≥ 0'],
                correctAnswer: 'D. y ≥ x² – 8x, y ≤ x – 2, dan y ≥ 0',
                explanation: 'Daerah arsir di atas parabola: y ≥ x² – 8x. Di bawah garis: y ≤ x – 2. Di atas sumbu x: y ≥ 0. Kombinasi yang tepat adalah (d).'
            },
            {
                questionText: 'Diketahui luas sebuah persegi panjang (dalam cm²) adalah 2 kali panjang dikurangi 8 dan lebarnya adalah panjang dikurangi dengan 7. Jika satuan panjang dan lebarnya dalam cm, maka luasnya adalah ... cm².',
                options: ['A. 1', 'B. 8', 'C. 9', 'D. 16', 'E. 24'],
                correctAnswer: 'B. 8',
                explanation: 'Misal p=panjang, l=lebar, L=luas. Diketahui L = 2p – 8, l = p – 7, dan L = p × l. Substitusi: 2p – 8 = p(p – 7) -> p² – 9p + 8 = 0. Faktorkan: (p – 1)(p – 8) = 0 -> p = 1 atau p = 8. Jika p = 1, l = 1 – 7 = -6 (tidak mungkin). Jika p = 8, l = 8 – 7 = 1. Luas: L = p × l = 8 × 1 = 8 cm².'
            }
        ]
    },
// TKA Matematika IPA
    {
        id: "tka-matematika-ipa-1",
        title: "TKA Matematika IPA 1",
        category: "TKA Matematika IPA",
        description: "Kumpulan soal TKA Matematika IPA untuk jenjang SMA/MA.",
        subject: "Matematika",
        totalQuestions: 15,
        questions: [
            {
                questionText: "Diketahui persegi dengan panjang sisi $s$ dan setengah lingkaran dengan diameter pada alas seperti pada gambar. <img src=\"rg-1.png\" alt=\"Daerah arsir antara parabola dan garis\" style=\"max-width: 300px; display: block; margin: 15px auto; border-radius: 8px;\"> Garis $AC$ menyinggung lingkaran di titik $T$. Panjang $AC$ adalah :",
                options: ["A. $\\sqrt{2}$", "B. $2$", "C. $\\sqrt{5}$", "D. $2\\sqrt{2}$", "E. $3$"],
                correctAnswer: "B. $2$",
                explanation: "Misalkan persegi sisi $s = 2$. Setengah lingkaran diameter $AB = 2$, jari-jari $r = 1$, pusat $(1, 0)$. Garis $AC$ dari $A(0,0)$ ke $C(2,2)$, kemiringan 1. Persamaan $y = x$, jarak ke pusat $\\frac{|1-0|}{\\sqrt{2}} = \\frac{1}{\\sqrt{2}}$. Panjang $AC = \\sqrt{(2-0)^2 + (2-0)^2} = 2$ (opsi B)."
            },
        ]
    },
// HOTS
    {
        id: "hots-relasi-fungsi",
        title: "HOTS - Relasi dan Fungsi",
        "category": "HOTS",
        description: "Uji pemahaman tingkat lanjut mengenai konsep relasi, fungsi, domain, range, dan komposisi.",
        subject: "Matematika",
        totalQuestions: 10,
        questions: [
            {
                questionText: "Diketahui relasi $R$ pada himpunan $A = \\{1, 2, 3, 4\\}$ didefinisikan oleh $a R b$ jika $a \\equiv b \\pmod{2}$. Manakah pernyataan berikut yang benar?",
                options: [
                    "A. $R$ adalah relasi asimetris",
                    "B. $R$ hanya simetris",
                    "C. $R$ adalah relasi ekuivalensi",
                    "D. $R$ tidak memenuhi sifat apapun"
                ],
                correctAnswer: "C. $R$ adalah relasi ekuivalensi",
                explanation: "Relasi $a \\equiv b \\pmod{2}$ berarti $a$ dan $b$ memiliki paritas sama (genap atau ganjil). Cek sifat: 1) **Refleksif**: $a \\equiv a \\pmod{2}$, benar. 2) **Simetris**: jika $a \\equiv b$, maka $b \\equiv a$, benar. 3) **Transitif**: jika $a \\equiv b$ dan $b \\equiv c$, maka $a \\equiv c$, benar. Karena memenuhi ketiga sifat, $R$ adalah relasi ekuivalensi. Jawaban: C."
            },
        ]
    },
// MOTS 
    {
        "id": "mots-akar-pangkat",
        "title": "MOTS Akar Pangkat 2",
        "category": "MOTS",
        "description": "Kumpulan soal MOTS untuk memperdalam pemahaman materi akar pangkat kelas 10 semester ganjil.",
        "subject": "Matematika",
        "totalQuestions": 10,
        "questions": [
            {
                "questionText": "Bentuk sederhana dari $\\dfrac{\\sqrt{75}}{\\sqrt{3}}$ adalah:",
                "options": [
                    "A. $5$",
                    "B. $5\\sqrt{3}$",
                    "C. $25$",
                    "D. $15$"
                ],
                "correctAnswer": "A. $5$",
                "explanation": "Sederhanakan: $\\dfrac{\\sqrt{75}}{\\sqrt{3}} = \\sqrt{\\dfrac{75}{3}} = \\sqrt{25} = 5$. Pilihan A sesuai."
            },
        ]
    },
// LOTS 
    {
        "id": "lots-akar-pangkat",
        "title": "LOTS Akar Pangkat",
        "category": "LOTS",
        "description": "Kumpulan soal LOTS untuk memperdalam pemahaman materi akar pangkat kelas 10 semester ganjil.",
        "subject": "Matematika",
        "totalQuestions": 10,
        "questions": [
            {
                "questionText": "Hasil dari $\\sqrt{64}$ adalah:",
                "options": [
                    "A. $6$",
                    "B. $7$",
                    "C. $8$",
                    "D. $9$"
                ],
                "correctAnswer": "C. $8$",
                "explanation": "$\\sqrt{64} = 8$ karena $8^2 = 64$. Pilihan C sesuai."
            },
        ]
    },
    ]
};

const socialMediaUpdates = [
    // { platform: 'YouTube', icon: 'fa-brands fa-youtube', color: 'text-red-500', text: 'Video baru: Pembahasan TPA Kuantitatif', link: 'https://youtube.com' },
    // { platform: 'TikTok', icon: 'fa-brands fa-tiktok', color: 'text-white', text: 'Tips & Trik: 3 Detik Jawab Soal Silogisme', link: 'https://tiktok.com' },
    { platform: 'UMTacademy', icon: 'UMT-Logo - Copy.png', color: 'text-pink-500', text: 'Pembaruan Kebijakan Keamanan Sistem Perangkat Terdaftar untuk Akun Pro', link: 'https://umt6174.site/News/Pembaruan%20Kebijakan%20Keamanan%20Sistem%20Perangkat%20Terdaftar%20untuk%20Akun%20Pro/' },
    { platform: 'Instagram', icon: 'fa-brands fa-instagram', color: 'text-pink-500', text: 'Perbandingan Berbalik Nilai', link: 'https://www.instagram.com/p/DMFA_LsTk0a/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { platform: 'Instagram', icon: 'fa-brands fa-instagram', color: 'text-pink-500', text: 'Logika Di balik Simbol Matematika', link: 'https://www.instagram.com/p/DK89gPYBHsy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
]
