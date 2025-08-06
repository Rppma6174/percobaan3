// =================================================================================
// DATA & LOGIKA KHUSUS UNTUK HALAMAN BANK SOAL
// =================================================================================

// 1. Data Soal dipindahkan ke sini
const bankSoalData = [
    {
        id: 'tiu_1',
        title: 'Paket Latihan TIU #1',
        subject: 'Tes Intelegensi Umum - Analogi',
        totalQuestions: 5,
        questions: [
            { questionText: 'MATA : WAJAH', options: ['A. Bantal : Ranjang', 'B. Buku : Perpustakaan', 'C. Jendela : Rumah', 'D. Air : Ember'], correctAnswer: 'C. Jendela : Rumah', explanation: 'Analogi ini adalah hubungan "bagian dari". MATA adalah bagian dari WAJAH, sebagaimana JENDELA adalah bagian dari RUMAH.' },
            { questionText: 'API : BAKAR', options: ['A. Air : Minum', 'B. Es : Beku', 'C. Angin : Sejuk', 'D. Tanah : Subur'], correctAnswer: 'B. Es : Beku', explanation: 'Analogi ini menunjukkan sifat atau fungsi. Sifat API adalah MEMBAKAR, sebagaimana sifat ES adalah MEMBEKUKAN (atau menjadi BEKU).' },
            { questionText: 'GELAP : TERANG', options: ['A. Siang : Malam', 'B. Basah : Kering', 'C. Panas : Hangat', 'D. Manis : Gula'], correctAnswer: 'B. Basah : Kering', explanation: 'Analogi ini adalah hubungan antonim atau lawan kata. GELAP adalah lawan kata dari TERANG, sebagaimana BASAH adalah lawan kata dari KERING.'},
            { questionText: 'PADI : PETANI', options: ['A. Obat : Dokter', 'B. Buku : Penulis', 'C. Emas : Penambang', 'D. Murid : Guru'], correctAnswer: 'C. Emas : Penambang', explanation: 'Hubungan analogi ini adalah "hasil dari pekerjaan". PADI adalah hasil kerja PETANI, sebagaimana EMAS adalah hasil kerja PENAMBANG.'},
            { questionText: 'JARUM : BENANG', options: ['A. Kuas : Cat', 'B. Palu : Paku', 'C. Pulpen : Tinta', 'D. Gunting : Kertas'], correctAnswer: 'A. Kuas : Cat', explanation: 'Hubungan ini adalah "alat dan bahan yang digunakan bersamaan". JARUM digunakan bersama BENANG, sebagaimana KUAS digunakan bersama CAT.'}
        ]
    }
];

// 2. Semua fungsi terkait kuis dipindahkan ke sini
let currentQuizData = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let currentExplanationIndex = 0;

function populateBankSoalCards() {
    const container = document.getElementById('bank-soal-card-container');
    if (!container) return;

    const cardsHTML = bankSoalData.map(quiz => `
        <div class="card-item p-6 rounded-lg flex flex-col" onclick="startQuiz('${quiz.id}')">
            <h3 class="font-bold text-lg mb-2">${quiz.title}</h3>
            <p class="text-sm text-gray-400 mb-4">${quiz.subject}</p>
            <div class="mt-auto text-xs font-mono bg-gray-900/50 text-cyan-300 rounded-full px-3 py-1 self-start">
                ${quiz.totalQuestions} Soal
            </div>
        </div>
    `).join('');
    
    container.innerHTML = cardsHTML;
}

function startQuiz(quizId) {
    currentQuizData = bankSoalData.find(q => q.id === quizId);
    if (!currentQuizData) { showToast('Kuis tidak ditemukan!', 'error'); return; }
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuizData.questions.length).fill(null);
    renderQuizInterface();
}

function renderQuizInterface() {
    const quiz = currentQuizData;
    const question = quiz.questions[currentQuestionIndex];
    const quizHTML = `<div class="panel max-w-4xl mx-auto"><div class="flex justify-between items-start mb-4"><div><h2 class="text-xl font-bold text-cyan-400">${quiz.title}</h2><p class="text-sm text-gray-400">Pertanyaan ${currentQuestionIndex + 1} dari ${quiz.questions.length}</p></div><button onclick="navigateTo('bank_soal', null)" class="text-xs text-gray-400 hover:text-white">&times; Tutup</button></div><hr class="border-gray-700 my-4"/><div class="mb-6 min-h-[60px]"><div class="text-lg text-gray-200">${question.questionText}</div></div><div id="quiz-options" class="space-y-3">${question.options.map((opt, index) => `<div id="option-${index}" class="quiz-option p-4 rounded-lg cursor-pointer transition-colors" onclick="selectAnswer('${opt.replace(/'/g, "\\'")}', ${index})">${opt}</div>`).join('')}</div><hr class="border-gray-700 my-6"/><div class="flex justify-end"><button id="next-btn" onclick="submitQuiz()" class="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-6 rounded-lg">${currentQuestionIndex === quiz.questions.length - 1 ? 'Selesai & Lihat Hasil' : 'Lanjut'}</button></div></div>`;
    appContent.innerHTML = quizHTML;
}

function selectAnswer(answer, optionIndex) {
    userAnswers[currentQuestionIndex] = answer;
    document.querySelectorAll('.quiz-option').forEach(el => el.classList.remove('selected'));
    document.getElementById(`option-${optionIndex}`).classList.add('selected');
}

function submitQuiz() {
    if (userAnswers[currentQuestionIndex] === null) { showToast('Silakan pilih jawaban terlebih dahulu!', 'error'); return; }
    if (currentQuestionIndex < currentQuizData.questions.length - 1) { currentQuestionIndex++; renderQuizInterface(); } else { renderQuizResults(); }
}

function renderQuizResults() {
    const quiz = currentQuizData;
    let score = 0;
    quiz.questions.forEach((q, index) => { if (q.correctAnswer === userAnswers[index]) { score++; } });
    
    const COMPLETED_KEY = 'userCompletedItems';
    let completed = JSON.parse(localStorage.getItem(COMPLETED_KEY)) || [];
    if (!completed.includes(quiz.id)) {
        completed.push(quiz.id);
        localStorage.setItem(COMPLETED_KEY, JSON.stringify(completed));
    }

    const finalScorePercentage = quiz.questions.length > 0 ? Math.round((score / quiz.questions.length) * 100) : 0;
    
    const resultShellHTML = `<div class="panel max-w-4xl mx-auto"><h2 class="text-2xl font-bold text-center">Hasil Kuis: ${quiz.title}</h2><div class="text-center my-6 bg-gray-900/50 p-4 rounded-lg"><p class="text-gray-400">Skor Akhir Anda</p><p class="text-5xl font-bold text-cyan-400 mt-2">${finalScorePercentage}%</p><p class="text-gray-300 mt-2">(${score} dari ${quiz.questions.length} soal benar)</p></div><h3 id="explanation-title" class="font-bold text-xl mt-10 mb-4 text-center">⭐ Pembahasan Soal</h3><div id="single-explanation-container" class="min-h-[250px]"></div><div class="flex justify-between items-center mt-8 flex-wrap gap-4"><button id="prev-explanation-btn" onclick="prevExplanation()" class="nav-btn bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg"><i class="fa-solid fa-chevron-left"></i> Sebelumnya</button><button onclick="navigateTo('bank_soal', null)" class="bg-cyan-800 hover:bg-cyan-700 text-white text-sm py-2 px-4 rounded-lg">Kembali ke Bank Soal</button><button id="next-explanation-btn" onclick="nextExplanation()" class="nav-btn bg-gray-600 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg">Selanjutnya <i class="fa-solid fa-chevron-right"></i></button></div></div>`;
    appContent.innerHTML = resultShellHTML;
    currentExplanationIndex = 0;
    renderSingleExplanation(currentExplanationIndex);
}

function renderSingleExplanation(index) {
    const container = document.getElementById('single-explanation-container');
    const title = document.getElementById('explanation-title');
    const quiz = currentQuizData;
    const q = quiz.questions[index];
    title.innerText = `⭐ Pembahasan Soal ${index + 1} / ${quiz.questions.length}`;
    const explanationHTML = `<div class="bg-gray-900/50 p-4 rounded-lg"><div class="mb-3 text-gray-300 text-lg">${q.questionText}</div><div class="space-y-2 text-sm"><p class="${userAnswers[index] === q.correctAnswer ? 'correct-answer' : 'wrong-answer'} p-2 rounded">Jawaban Anda: ${userAnswers[index] || 'Tidak dijawab'}</p><p class="correct-answer p-2 rounded">Jawaban Benar: ${q.correctAnswer}</p><div class="bg-gray-800 p-3 mt-3 rounded-md"><p class="font-bold text-cyan-300">Pembahasan:</p><p class="text-gray-400 mt-1">${q.explanation}</p></div></div></div>`;
    container.innerHTML = explanationHTML;
    document.getElementById('prev-explanation-btn').disabled = (index === 0);
    document.getElementById('next-explanation-btn').disabled = (index === quiz.questions.length - 1);
}

function nextExplanation() { if (currentExplanationIndex < currentQuizData.questions.length - 1) { currentExplanationIndex++; renderSingleExplanation(currentExplanationIndex); } }
function prevExplanation() { if (currentExplanationIndex > 0) { currentExplanationIndex--; renderSingleExplanation(currentExplanationIndex); } }

// 3. Panggil fungsi inisialisasi setelah script dimuat
populateBankSoalCards();
