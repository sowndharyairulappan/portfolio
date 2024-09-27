let MenuBtn = document.getElementById('MenuBtn');

MenuBtn.addEventListener('click', function() {
    document.body.classList.toggle('mobile-nav-active'); // Toggle the mobile navigation
    // Toggle between 'fa-bars' and 'fa-xmark' icons
    if (this.classList.contains('fa-bars')) {
        this.classList.remove('fa-bars');
        this.classList.add('fa-xmark');
    } else {
        this.classList.remove('fa-xmark');
        this.classList.add('fa-bars');
    }
});

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let message = document.getElementById("message").value;

    // Name validation
    if (name == "") {
        alert("Name must be filled out");
        return false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Phone number validation (basic example for 10 digits)
    let phonePattern = /^\d{10}$/;
    if (!number.match(phonePattern)) {
        alert("Please enter a valid 10-digit phone number");
        return false;
    }

    // Message validation
    if (message == "") {
        alert("Message cannot be empty");
        return false;
    }

    // If everything is valid, allow the form to submit
    return true;
}