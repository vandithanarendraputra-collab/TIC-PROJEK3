const questions = [
    "Apakah Anda alergi terhadap kacang tanah?",
    "Apakah Anda alergi terhadap tree nuts (almond, walnut, cashew, pistachio, dll)?",
    "Apakah Anda alergi terhadap susu atau produk dairy?",
    "Apakah Anda alergi terhadap telur?",
    "Apakah Anda alergi terhadap seafood?",
    "Apakah Anda alergi terhadap ikan tertentu?",
    "Apakah Anda alergi terhadap gandum atau gluten?",
    "Apakah Anda alergi terhadap kedelai?",
    "Apakah Anda alergi terhadap wijen (sesame)?"
];

let currentStep = 0;
const answers = [];

const stepNumEl = document.getElementById('step-num');
const questionTextEl = document.getElementById('question-text');
const cardEl = document.getElementById('question-card');

function updateQuestion() {
    if (currentStep < questions.length) {
        // Animation reset
        cardEl.style.animation = 'none';
        cardEl.offsetHeight; // trigger reflow
        cardEl.style.animation = 'slideUp 0.5s ease-out';

        stepNumEl.textContent = currentStep + 1;
        questionTextEl.textContent = questions[currentStep];

        // Special handling for the last question (Step 9)
        const optionsGrid = document.querySelector('.options-grid');
        const existingCta = document.getElementById('final-cta-btn');
        
        if (currentStep === questions.length - 1) {
            if (!existingCta) {
                const ctaBtn = document.createElement('button');
                ctaBtn.id = 'final-cta-btn';
                ctaBtn.className = 'btn-finish';
                ctaBtn.style.marginTop = '40px';
                ctaBtn.style.width = '100%';
                ctaBtn.innerHTML = 'LIHAT DIAGNOSIS SEKARANG <i class="fas fa-arrow-right"></i>';
                ctaBtn.onclick = () => showResults();
                optionsGrid.parentNode.appendChild(ctaBtn);
            }
        } else if (existingCta) {
            existingCta.remove();
        }
    } else {
        showResults();
    }
}

function nextQuestion(answer) {
    answers.push({
        question: questions[currentStep],
        answer: answer
    });
    currentStep++;
    updateQuestion();
}

function showResults() {
    // Filter only "Ya" or "Sering" answers
    const positiveResults = answers
        .filter(a => a.answer === 'ya' || a.answer === 'sering')
        .map(a => a.question);

    // Save to localStorage
    localStorage.setItem('diagnosisResults', JSON.stringify(positiveResults));

    // Redirect to results page
    window.location.href = 'results.html';
}

// Initial Load
document.addEventListener('DOMContentLoaded', updateQuestion);
