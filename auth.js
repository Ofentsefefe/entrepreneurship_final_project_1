// Authentication JavaScript
document.addEventListener('DOMContentLoaded', function () {
    initializeAuthSystem();
});

function initializeAuthSystem() {
    // Password visibility toggle
    initializePasswordToggles();

    // Form submissions
    initializeFormSubmissions();

    // Password strength indicator
    initializePasswordStrength();
}

// Password visibility toggle
function initializePasswordToggles() {
    const toggleButtons = document.querySelectorAll('.toggle-password');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const passwordInput = document.getElementById(targetId);
            const icon = this.querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
}

// Form submissions
function initializeFormSubmissions() {
    // Login form
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    // Register form
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }

    // Tutor application form
    const tutorForm = document.getElementById('tutorApplicationForm');
    if (tutorForm) {
        tutorForm.addEventListener('submit', handleTutorApplication);
    }
}

// Password strength indicator
function initializePasswordStrength() {
    const passwordInput = document.getElementById('register-password');
    if (passwordInput) {
        passwordInput.addEventListener('input', updatePasswordStrength);
    }
}

function updatePasswordStrength() {
    const password = this.value;
    const strengthFill = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');

    let strength = 0;
    let feedback = '';

    // Check password criteria
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    // Update strength bar
    strengthFill.setAttribute('data-strength', strength);

    // Update strength text
    switch (strength) {
        case 0:
            feedback = 'Very weak';
            break;
        case 1:
            feedback = 'Weak';
            break;
        case 2:
            feedback = 'Fair';
            break;
        case 3:
            feedback = 'Good';
            break;
        case 4:
            feedback = 'Strong';
            break;
    }

    if (strengthText) {
        strengthText.textContent = feedback;
    }
}

// Form handlers
function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Basic validation
    if (!email.endsWith('@uj.ac.za')) {
        showMessage('Please use your UJ email address', 'error');
        return;
    }

    if (password.length < 6) {
        showMessage('Password must be at least 6 characters', 'error');
        return;
    }

    // Simulate login process
    showMessage('Logging you in...', 'success');

    // In a real application, you would make an API call here
    setTimeout(() => {
        showMessage('Login successful! Redirecting...', 'success');
        // Redirect to dashboard or home page
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    }, 1000);
}

function handleRegister(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('register-name').value,
        email: document.getElementById('register-email').value,
        studentId: document.getElementById('register-student-id').value,
        password: document.getElementById('register-password').value,
        confirmPassword: document.getElementById('register-confirm-password').value,
        role: document.getElementById('user-role').value
    };

    // Validation
    if (!formData.email.endsWith('@uj.ac.za')) {
        showMessage('Please use your UJ email address', 'error');
        return;
    }

    if (formData.password !== formData.confirmPassword) {
        showMessage('Passwords do not match', 'error');
        return;
    }

    if (formData.password.length < 8) {
        showMessage('Password must be at least 8 characters', 'error');
        return;
    }

    if (!formData.role) {
        showMessage('Please select your preferred role', 'error');
        return;
    }

    // Simulate registration process
    showMessage('Creating your account...', 'success');

    setTimeout(() => {
        showMessage('Account created successfully!', 'success');
        // Redirect to login or dashboard
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 1500);
    }, 1000);
}

function handleTutorApplication(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('tutor-name').value,
        email: document.getElementById('tutor-email').value,
        studentId: document.getElementById('tutor-student-id').value,
        phone: document.getElementById('tutor-phone').value,
        subjects: Array.from(document.getElementById('tutor-subjects').selectedOptions).map(option => option.value),
        rate: document.getElementById('tutor-rate').value,
        experience: document.getElementById('tutor-experience').value,
        qualifications: document.getElementById('tutor-qualifications').value,
        methodology: document.getElementById('tutor-methodology').value
    };

    // Validation
    if (!formData.email.endsWith('@uj.ac.za')) {
        showMessage('Please use your UJ email address', 'error');
        return;
    }

    if (formData.subjects.length === 0) {
        showMessage('Please select at least one subject', 'error');
        return;
    }

    if (formData.rate < 50 || formData.rate > 200) {
        showMessage('Please set a reasonable hourly rate (R50 - R200)', 'error');
        return;
    }

    // Simulate application submission
    showMessage('Submitting your application...', 'success');

    setTimeout(() => {
        showMessage('Application submitted successfully! We will review it and contact you within 3 business days.', 'success');

        // Reset form
        event.target.reset();

        // Optionally redirect
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 3000);
    }, 1000);
}

// Utility function to show messages
function showMessage(message, type = 'info') {
    // Remove existing messages
    const existingMessage = document.querySelector('.message-toast');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `message-toast message-${type}`;
    messageDiv.innerHTML = `
        <span>${message}</span>
        <button class="message-close">&times;</button>
    `;

    // Add styles
    messageDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 15px;
        max-width: 400px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
    `;

    // Set background color based on type
    const colors = {
        success: '#27ae60',
        error: '#e74c3c',
        info: '#3498db',
        warning: '#f39c12'
    };

    messageDiv.style.background = colors[type] || colors.info;

    // Add close button functionality
    const closeBtn = messageDiv.querySelector('.message-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    closeBtn.addEventListener('click', () => {
        messageDiv.remove();
    });

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 5000);

    document.body.appendChild(messageDiv);
}

// Add CSS for message animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);