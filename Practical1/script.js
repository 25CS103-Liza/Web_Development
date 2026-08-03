document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const messageBox = document.getElementById('form-message');

    if (!form || !messageBox) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const studentId = document.getElementById('student-id').value.trim();
        const password = document.getElementById('password').value.trim();

        if (!studentId || !password) {
            showMessage('Please enter both your student ID and password.', 'error');
            return;
        }

        if (studentId.length < 3) {
            showMessage('Student ID must be at least 3 characters long.', 'error');
            return;
        }

        if (password.length < 4) {
            showMessage('Password must be at least 4 characters long.', 'error');
            return;
        }

        showMessage('Login successful! Redirecting to your dashboard...', 'success');

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    });

    function showMessage(text, type) {
        messageBox.textContent = text;
        messageBox.className = `form-message ${type}`;
    }
});
