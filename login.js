document.addEventListener('DOMContentLoaded', () => {
    // 1. Password Toggle Logic
    const togglePassword = document.querySelector('#toggle-password');
    const passwordInput = document.querySelector('#password');
    const eyeIcon = document.querySelector('#eye-icon');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            eyeIcon.style.opacity = (type === 'text') ? '0.5' : '1';
        });
    }

    // 2. Simulation Modal Elements
    const authOverlay = document.querySelector('#auth-modal');
    const googleModal = document.querySelector('#google-modal-content');
    const appleModal = document.querySelector('#apple-modal-content');
    
    const googleBtn = document.querySelector('#google-login');
    const appleBtn = document.querySelector('#apple-login');
    const signupGoogleBtn = document.querySelector('.signup-google-btn');
    const signupAppleBtn = document.querySelector('.signup-apple-btn');

    const openGoogleModal = () => {
        authOverlay.style.display = 'flex';
        googleModal.style.display = 'block';
        appleModal.style.display = 'none';
    };

    const openAppleModal = () => {
        authOverlay.style.display = 'flex';
        appleModal.style.display = 'block';
        googleModal.style.display = 'none';
    };

    if (googleBtn) googleBtn.addEventListener('click', openGoogleModal);
    if (signupGoogleBtn) signupGoogleBtn.addEventListener('click', openGoogleModal);
    if (appleBtn) appleBtn.addEventListener('click', openAppleModal);
    if (signupAppleBtn) signupAppleBtn.addEventListener('click', openAppleModal);

    if (authOverlay) {
        authOverlay.addEventListener('click', (e) => {
            if (e.target === authOverlay) closeAuthModal();
        });
    }

    // 3. Login Form Submission
    const loginForm = document.querySelector('#login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.querySelector('#email').value;
            const name = email.split('@')[0];
            
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', name);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userImg', `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0046B4&color=fff`);

            window.location.href = 'index.html'; 
        });
    }

    // 4. Toggle Login/Signup
    const showSignup = document.querySelector('#show-signup');
    const showLogin = document.querySelector('#show-login');
    const signupForm = document.querySelector('#signup-form');
    const loginTitle = document.querySelector('.login-title');
    const loginSubtitle = document.querySelector('.login-subtitle');

    if (showSignup) {
        showSignup.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = 'none';
            signupForm.style.display = 'flex';
            loginTitle.innerText = 'SIGN UP';
            loginSubtitle.innerText = 'Daftar Sekarang untuk Memulai Perjalanan Kesehatan Anda';
        });
    }

    if (showLogin) {
        showLogin.addEventListener('click', (e) => {
            e.preventDefault();
            signupForm.style.display = 'none';
            loginForm.style.display = 'flex';
            loginTitle.innerText = 'LOGIN';
            loginSubtitle.innerText = 'Masuk untuk Pengalaman yang Lebih Personal';
        });
    }

    // 5. Signup Submission
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.querySelector('#signup-name').value || 'User';
            const email = document.querySelector('#signup-email').value || 'user@email.com';
            
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', name);
            localStorage.setItem('userEmail', email);
            localStorage.setItem('userImg', `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0046B4&color=fff`);

            window.location.href = 'index.html';
        });
    }
});

function closeAuthModal() {
    const authOverlay = document.querySelector('#auth-modal');
    if (authOverlay) authOverlay.style.display = 'none';
}

function selectAccount(email, name) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userImg', `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=0046B4&color=fff`);
    
    window.location.href = 'index.html';
}
