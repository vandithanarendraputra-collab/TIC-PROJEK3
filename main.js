// HEALERGY - Master Logic (Translation, Dark Mode, Profile)
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Comprehensive Translation Dictionary ---
    const translations = {
        'id': {
            'nav-register': 'DAFTAR',
            'edit-profile': 'Edit Profil',
            'dark-mode': 'Mode Gelap',
            'logout': 'Keluar',
            'hero-title': 'MAKAN DENGAN RASA AMAN, <br> <span class="highlight">TANPA ADA RASA CEMAS</span>',
            'hero-desc': 'dengan <strong>HEALERGY</strong> anda bisa mendapat panduan lengkap navigasi makanan aman untuk Anda dan keluarga. Temukan info bahan, substitusi cerdas, dan tips makan di luar dengan tenang.',
            'cta-start': 'MULAI DIAGNOSIS',
            'diagnosis-title': 'LAYANAN DIAGNOSIS',
            'diagnosis-desc': 'Fitur diagnosis sedang dalam pengembangan. Segera hadir untuk membantu Anda mengenali alergi makanan dengan lebih akurat.',
            'mission-title': 'Misi Kami',
            'mission-1': 'Menyediakan kurasi resep lezat yang bebas alergen tanpa mengorbankan rasa.',
            'mission-2': 'Membangun komunitas suportif tempat berbagi pengalaman dan solusi praktis.',
            'mission-3': 'Menghilangkan stigma dan rasa terisolasi bagi individu dengan pantangan makan.',
            'vision-title': 'Visi Kami',
            'vision-desc': 'Menjadi ruang aman digital nomor satu yang memberdayakan pejuang alergi makanan untuk hidup tanpa rasa takut dan penuh rasa syukur.',
            'team-title': 'TIM KAMI',
            'why-us-title': 'MENGAPA HARUS MEMILIH KAMI?',
            'feat1-title': 'AKURASI KETEPATAN',
            'feat1-desc': 'Setiap diagnosis anda 98% pasti benar karena kami sudah riset mendalam',
            'feat2-title': 'KEAMANAN TINGKAT TINGGI',
            'feat2-desc': 'keamanan data anda selama berada di website ini sudah pasti aman',
            'feat3-title': 'SELALU MELAKUKAN UPDATE',
            'feat3-desc': 'Kami selalu melakukan update database kami untuk diagnosa anda',
            'stat-1': 'ORANG PERCAYA',
            'stat-2': 'KERJASAMA KLINIK',
            'stat-3': 'AKURASI DIAGNOSIS',
            'stat-4': 'PENGHARGAAN RESMI',
            'cta-final-title': 'Siap Untuk Hidup Tenang?',
            'cta-final-desc': 'Mulai dengan cara mengecek apakah anda memiliki alergi makanan pada tubuh anda?, mari cek di sistem website kami klik sekarang',
            'cta-final-btn': 'COBA SEKARANG GRATIS!!!',
            'contact-title': 'HUBUNGI KAMI',
            'contact-desc': 'Bila mana ada bug atau kesalahan web dan design dari web kami anda bisa hubungi kami untuk memberi kritik dan saran.',
            'map-pill': 'BEBERAPA KLINIK YANG ADA DI SEKITAR',
            'footer-about-title': 'TENTANG',
            'nav-home': 'BERANDA',
            'nav-diagnosis': 'DIAGNOSIS',
            'nav-about': 'TENTANG KAMI',
            'nav-contact': 'KONTAK',
            'lang-text': 'Bahasa: ID'
        },
        'en': {
            'nav-register': 'REGISTER',
            'edit-profile': 'Edit Profile',
            'dark-mode': 'Dark Mode',
            'logout': 'Logout',
            'hero-title': 'EAT WITH PEACE OF MIND, <br> <span class="highlight">WITHOUT ANY ANXIETY</span>',
            'hero-desc': 'With <strong>HEALERGY</strong> you can get a complete guide to safe food navigation for you and your family. Find ingredient info, smart substitutions, and tips for eating out with peace of mind.',
            'cta-start': 'START DIAGNOSIS',
            'diagnosis-title': 'DIAGNOSIS SERVICE',
            'diagnosis-desc': 'The diagnosis feature is under development. Coming soon to help you identify food allergies more accurately.',
            'mission-title': 'Our Mission',
            'mission-1': 'Providing delicious allergen-free recipe curation without sacrificing taste.',
            'mission-2': 'Building a supportive community to share experiences and practical solutions.',
            'mission-3': 'Eliminating stigma and a sense of isolation for individuals with dietary restrictions.',
            'vision-title': 'Our Vision',
            'vision-desc': 'To be the number one digital safe space that empowers food allergy warriors to live without fear and with gratitude.',
            'team-title': 'OUR TEAM',
            'why-us-title': 'WHY CHOOSE US?',
            'feat1-title': 'ACCURATE PRECISION',
            'feat1-desc': 'Every diagnosis you get is 98% accurate because of our deep research',
            'feat2-title': 'HIGH LEVEL SECURITY',
            'feat2-desc': 'Your data security while on this website is guaranteed safe',
            'feat3-title': 'ALWAYS UPDATING',
            'feat3-desc': 'We always update our database for your diagnosis',
            'stat-1': 'PEOPLE TRUSTED',
            'stat-2': 'CLINIC PARTNERS',
            'stat-3': 'DIAGNOSIS ACCURACY',
            'stat-4': 'OFFICIAL AWARDS',
            'cta-final-title': 'Ready for a Peaceful Life?',
            'cta-final-desc': 'Start by checking if you have food allergies in your body, let\'s check in our website system click now',
            'cta-final-btn': 'TRY NOW FOR FREE!!!',
            'contact-title': 'CONTACT US',
            'contact-desc': 'If there are bugs or errors in the web and design of our web you can contact us to provide criticism and suggestions.',
            'map-pill': 'SOME CLINICS IN THE VICINITY',
            'footer-about-title': 'ABOUT',
            'nav-home': 'HOME',
            'nav-diagnosis': 'DIAGNOSIS',
            'nav-about': 'ABOUT US',
            'nav-contact': 'CONTACT',
            'lang-text': 'Language: EN'
        }
    };

    // --- 2. State & Persistence ---
    let currentLang = localStorage.getItem('lang') || 'id';
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    const applyLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        const langToggleText = document.getElementById('lang-text');
        if (langToggleText) langToggleText.textContent = translations[lang]['lang-text'];
    };

    const applyDarkMode = (dark) => {
        isDarkMode = dark;
        localStorage.setItem('darkMode', dark);
        if (dark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    applyLanguage(currentLang);
    applyDarkMode(isDarkMode);

    // --- 3. Profile & Auth System ---
    const updateUIForUser = () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
        const loggedOutView = document.getElementById('logged-out-view');
        const loggedInView = document.getElementById('logged-in-view');
        
        if (isLoggedIn) {
            if (loggedOutView) loggedOutView.style.display = 'none';
            if (loggedInView) loggedInView.style.display = 'block';
            
            const name = localStorage.getItem('userName');
            const img = localStorage.getItem('userImg');
            const email = localStorage.getItem('userEmail');
            
            if (document.getElementById('nav-user-name')) document.getElementById('nav-user-name').textContent = name;
            if (document.getElementById('nav-user-img')) document.getElementById('nav-user-img').src = img;
            if (document.getElementById('dropdown-name')) document.getElementById('dropdown-name').textContent = name;
            if (document.getElementById('dropdown-email')) document.getElementById('dropdown-email').textContent = email;
        } else {
            if (loggedOutView) loggedOutView.style.display = 'block';
            if (loggedInView) loggedInView.style.display = 'none';
        }
    };

    updateUIForUser();

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        // Close menu when clicking links
        navMenu.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            });
        });
    }

    // --- 4. Feedback Persistence ---
    const loadFeedbacks = () => {
        const feedbacks = JSON.parse(localStorage.getItem('userFeedbacks')) || [];
        const testimonialGrid = document.querySelector('.testimonial-grid');
        if (testimonialGrid && feedbacks.length > 0) {
            feedbacks.forEach(fb => {
                const card = document.createElement('div');
                card.className = 'testimonial-card';
                card.innerHTML = `
                    <div class="stars">${fb.stars}</div>
                    <p class="testi-text">"${fb.message}"</p>
                    <div class="testi-user">
                        <img src="${fb.img}" alt="${fb.name}">
                        <span>${fb.name.toUpperCase()}</span>
                    </div>
                `;
                testimonialGrid.prepend(card);
            });
        }
    };
    loadFeedbacks();

    // --- 4. Interactive Events ---
    const profileTrigger = document.getElementById('profile-trigger');
    const profileDropdown = document.getElementById('profile-dropdown');
    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener('click', (e) => {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
        document.addEventListener('click', () => profileDropdown.classList.remove('show'));
    }

    const editProfileBtn = document.getElementById('edit-profile-btn');
    const editModal = document.getElementById('edit-profile-modal');
    const closeEditModal = document.getElementById('close-edit-modal');
    const editForm = document.getElementById('edit-profile-form');
    const editNameInput = document.getElementById('edit-name');
    const editEmailInput = document.getElementById('edit-email');
    const editPreviewImg = document.getElementById('edit-preview-img');
    const editUploadPhoto = document.getElementById('edit-upload-photo');

    if (editProfileBtn && editModal) {
        editProfileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            editNameInput.value = localStorage.getItem('userName') || '';
            editEmailInput.value = localStorage.getItem('userEmail') || '';
            editPreviewImg.src = localStorage.getItem('userImg') || `https://ui-avatars.com/api/?name=${encodeURIComponent(editNameInput.value)}&background=0046B4&color=fff`;
            editModal.style.display = 'flex';
        });

        closeEditModal?.addEventListener('click', () => {
            editModal.style.display = 'none';
        });

        editModal.addEventListener('click', (e) => {
            if (e.target === editModal) editModal.style.display = 'none';
        });

        // Photo Upload Preview
        editUploadPhoto?.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    editPreviewImg.src = event.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        editForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            const newName = editNameInput.value;
            localStorage.setItem('userName', newName);
            localStorage.setItem('userImg', editPreviewImg.src);
            updateUIForUser();
            editModal.style.display = 'none';
            alert('Profil berhasil diperbarui!');
        });
    }

    document.getElementById('dark-mode-toggle')?.addEventListener('click', (e) => {
        e.preventDefault();
        applyDarkMode(!isDarkMode);
    });

    document.getElementById('lang-toggle')?.addEventListener('click', (e) => {
        e.preventDefault();
        applyLanguage(currentLang === 'id' ? 'en' : 'id');
    });

    document.getElementById('logout-btn')?.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
    });

    // --- Feedback Logic (Works for Modal in index.html AND dedicated feedback.html) ---
    const feedbackModal = document.getElementById('feedback-modal');
    const closeFeedbackModal = document.getElementById('close-feedback-modal');
    const feedbackForm = document.getElementById('feedback-form');
    const openFeedbackBtn = document.querySelector('.testimonial-cta button'); 
    const stars = document.querySelectorAll('#star-rating i');
    const testimonialGrid = document.querySelector('.testimonial-grid');
    let selectedRating = 5;

    // Open modal logic (only if on index.html and modal exists)
    if (openFeedbackBtn && feedbackModal) {
        openFeedbackBtn.addEventListener('click', (e) => {
            e.preventDefault();
            feedbackModal.style.display = 'flex';
            const loggedInName = localStorage.getItem('userName');
            if (loggedInName) document.getElementById('feedback-name').value = loggedInName;
        });
        closeFeedbackModal?.addEventListener('click', () => feedbackModal.style.display = 'none');
        feedbackModal.addEventListener('click', (e) => {
            if (e.target === feedbackModal) feedbackModal.style.display = 'none';
        });
    }

    // Star Rating Selection (Generic)
    if (stars.length > 0) {
        stars.forEach(star => {
            star.addEventListener('click', function() {
                selectedRating = parseInt(this.getAttribute('data-value'));
                stars.forEach(s => {
                    if (parseInt(s.getAttribute('data-value')) <= selectedRating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
        });
        // Initialize
        stars.forEach(s => {
            if (parseInt(s.getAttribute('data-value')) <= selectedRating) s.classList.add('active');
        });
    }

    // Form Submission (Generic)
    if (feedbackForm) {
        // Set name if logged in
        const loggedInName = localStorage.getItem('userName');
        const feedbackNameInput = document.getElementById('feedback-name');
        if (loggedInName && feedbackNameInput) feedbackNameInput.value = loggedInName;

        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('feedback-name').value;
            const message = document.getElementById('feedback-message').value;
            const userImg = localStorage.getItem('userImg') || `https://i.pravatar.cc/100?u=${encodeURIComponent(name)}`;

            // Create Star HTML
            let starHtml = '';
            for (let i = 0; i < selectedRating; i++) starHtml += '<i class="fas fa-star"></i>';

            // Save to localStorage for persistence
            const newFeedback = {
                name: name,
                message: message,
                stars: starHtml,
                img: userImg
            };
            const feedbacks = JSON.parse(localStorage.getItem('userFeedbacks')) || [];
            feedbacks.push(newFeedback);
            localStorage.setItem('userFeedbacks', JSON.stringify(feedbacks));

            if (testimonialGrid) {
                // If on index.html, prepend to grid immediately
                const card = document.createElement('div');
                card.className = 'testimonial-card';
                card.innerHTML = `
                    <div class="stars">${starHtml}</div>
                    <p class="testi-text">"${message}"</p>
                    <div class="testi-user">
                        <img src="${userImg}" alt="${name}">
                        <span>${name.toUpperCase()}</span>
                    </div>
                `;
                testimonialGrid.prepend(card);
                if (feedbackModal) feedbackModal.style.display = 'none';
                feedbackForm.reset();
                alert('Terima kasih! Komentar Anda telah ditambahkan.');
                document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If on feedback.html, go back to home to see the result
                alert('Terima kasih! Komentar Anda telah terkirim.');
                window.location.href = 'index.html#testimonials';
            }
        });
    }

    // --- 5. Navigation & Modals ---
    const setupModal = (triggerId, modalId, closeId) => {
        const trigger = document.getElementById(triggerId);
        const modal = document.getElementById(modalId);
        const close = document.getElementById(closeId);
        if (trigger && modal) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            });
            const closeF = () => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            };
            if (close) close.addEventListener('click', closeF);
            modal.addEventListener('click', (e) => { if (e.target === modal) closeF(); });
        }
    };

    setupModal('terms-trigger', 'terms-modal', 'close-terms');
    setupModal('cookie-trigger', 'cookie-modal', 'close-cookie');

    document.querySelectorAll('.nav-link, .footer-link-item').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
                }
            }
        });
    });
});
