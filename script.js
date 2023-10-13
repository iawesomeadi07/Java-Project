// JavaScript to handle the popup
const signupButton = document.getElementById('signup-button');
const signupPopup = document.getElementById('signup-popup');
const closePopupButton = document.getElementById('close-popup');

signupButton.addEventListener('click', function() {
    signupPopup.style.display = 'block';
});

closePopupButton.addEventListener('click', function() {
    signupPopup.style.display = 'none';
});

// Close the popup if the user clicks outside the popup content
window.addEventListener('click', function(event) {
    if (event.target === signupPopup) {
        signupPopup.style.display = 'none';
    }
});
