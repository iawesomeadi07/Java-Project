// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");

    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

// Function to generate a random strong password
function generateStrongPassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?/~";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset.charAt(randomIndex);
    }

    return password;
}

document.getElementById("toggle-password-visibility").addEventListener("click", togglePasswordVisibility);

document.getElementById("generate-password").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    const generatedPassword = generateStrongPassword();

    passwordField.value = generatedPassword;
});
