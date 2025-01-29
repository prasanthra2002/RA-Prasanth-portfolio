document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            validateForm();
        });
    }

    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        let valid = true;

        if (name === '') {
            valid = false;
            alert('Name is required.');
        }

        if (email === '' || !validateEmail(email)) {
            valid = false;
            alert('Valid email is required.');
        }

        if (message === '') {
            valid = false;
            alert('Message cannot be empty.');
        }

        if (valid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});