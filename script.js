document.addEventListener('DOMContentLoaded', function () {
    const passwordForm = document.getElementById('password-form');
    const generateButton = document.getElementById('generate-button');
    const generatedPassword = document.getElementById('generated-password');

    generateButton.addEventListener('click', function () {
        const passwordLength = parseInt(document.getElementById('password-length').value);
        const includeUppercase = document.getElementById('uppercase').checked;
        const includeNumbers = document.getElementById('numbers').checked;
        const includeSpecialChars = document.getElementById('special-chars').checked;
        const excludeSimilarChars = document.getElementById('exclude-similar').checked;
        const excludeDuplicateChars = document.getElementById('exclude-duplicates').checked;

        let lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
        let uppercaseChars = '';
        let numberChars = '';
        let specialChars = '!@#$%&*+';

        if (includeUppercase) {
            uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (includeNumbers) {
            numberChars = '0123456789';
        }
        if (excludeSimilarChars) {
            lowercaseChars = lowercaseChars.replace(/[i1lLoO0]/g, '');
            uppercaseChars = uppercaseChars.replace(/[i1lLoO0]/g, '');
            numberChars = numberChars.replace(/[i1lLoO0]/g, '');
        }

        let charset = lowercaseChars;
        if (includeUppercase) charset += uppercaseChars;
        if (includeNumbers) charset += numberChars;
        if (includeSpecialChars) charset += specialChars;

        let password = '';
        while (password.length < passwordLength) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            const randomChar = charset.charAt(randomIndex);

            if (!excludeDuplicateChars || password.indexOf(randomChar) === -1) {
                password += randomChar;
            }
        }

        generatedPassword.textContent = password;
    });
});
