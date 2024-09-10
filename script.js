document.addEventListener('DOMContentLoaded', () => {
    const otpDisplay = document.getElementById('otpDisplay');
    const generateBtn = document.getElementById('generateBtn');
    const clearBtn = document.getElementById('clearBtn');
    const infoBtn = document.getElementById('infoBtn');
    const nameInput = document.getElementById('nameInput');

    function generateOTP(name) {
        const digits = '0123456789';
        const base = Math.abs(name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0));
        let otp = '';
        for (let i = 0; i < 6; i++) {
            otp += digits[(base + i) % digits.length];
        }
        return otp;
    }

    generateBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name) {
            const otp = generateOTP(name);
            otpDisplay.textContent = otp;
        } else {
            otpDisplay.textContent = 'Please enter a name';
        }
    });

    clearBtn.addEventListener('click', () => {
        nameInput.value = '';
        otpDisplay.textContent = 'Your OTP will appear here';
    });

    infoBtn.addEventListener('click', () => {
        alert('This OTP generator uses a simple algorithm to create a 6-digit OTP based on the entered name.');
    });
});
