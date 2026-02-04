//ALL

window.addEventListener("load", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});



// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinksContainer = document.querySelector('.nav-links');

    // Toggle the menu visibility when the burger menu is clicked
    burgerMenu.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
    });

    // Close the menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('active');
        });
    });
});



//SECTION 2 

document.addEventListener("DOMContentLoaded", function () {
    // Get the modals
    const modalKCR = document.getElementById("detailsModalKCR");
    const modalIndianHead = document.getElementById("detailsModalIndianHead");
    const modalFacials = document.getElementById("detailsModalFacials");

    // Get the buttons that open the modals
    const btnKCR = document.getElementById("findOutMoreBtnKCR");
    const btnIndianHead = document.getElementById("findOutMoreBtnIndianHead");
    const btnFacials = document.getElementById("findOutMoreBtnFacials");

    // Get the elements that close the modals
    const closeKCR = modalKCR.querySelector(".close-btn");
    const closeIndianHead = modalIndianHead.querySelector(".close-btn");
    const closeFacials = modalFacials.querySelector(".close-btn");

    // Open Modals when respective buttons are clicked
    btnKCR.addEventListener("click", () => {
        modalKCR.style.display = "block";
    });

    btnIndianHead.addEventListener("click", () => {
        modalIndianHead.style.display = "block";
    });

    btnFacials.addEventListener("click", () => {
        modalFacials.style.display = "block";
    });

    // Close Modals when close button is clicked
    closeKCR.addEventListener("click", () => {
        modalKCR.style.display = "none";
    });

    closeIndianHead.addEventListener("click", () => {
        modalIndianHead.style.display = "none";
    });

    closeFacials.addEventListener("click", () => {
        modalFacials.style.display = "none";
    });

    // Close Modals when clicking outside the modal-content
    window.addEventListener("click", (event) => {
        // Close KCR Modal
        if (event.target === modalKCR) {
            modalKCR.style.display = "none";
        }
        // Close Indian Head Modal
        if (event.target === modalIndianHead) {
            modalIndianHead.style.display = "none";
        }
        // Close Facials Modal
        if (event.target === modalFacials) {
            modalFacials.style.display = "none";
        }
    });
});



// MORE INFO MODALS IN SECTION 4

// Get the modal elements
const mobileModal = document.getElementById('mobile-appointment-modal');
const pamperModal = document.getElementById('pamper-party-modal');

// Get the buttons that open the modals
const mobileBtn = document.querySelector('#mobile-appointments .more-info');
const pamperBtn = document.querySelector('#pamper-party .more-info');

// Get the <span> elements that close the modals
const closeBtns = document.querySelectorAll('.close-btn');

// When the user clicks the "More Info" button for Mobile Appointments, open the modal
mobileBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    mobileModal.style.display = 'block'; // Show the mobile modal
});

// When the user clicks the "More Info" button for Pamper Party, open the modal
pamperBtn.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    pamperModal.style.display = 'block'; // Show the pamper modal
});

// When the user clicks on <span> (x), close the modal
closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', function () {
        mobileModal.style.display = 'none'; // Close mobile modal
        pamperModal.style.display = 'none'; // Close pamper modal
    });
});

// When the user clicks anywhere outside the modal content, close the modal
window.addEventListener('click', function (event) {
    if (event.target === mobileModal) {
        mobileModal.style.display = 'none'; // Close the mobile modal
    }
    if (event.target === pamperModal) {
        pamperModal.style.display = 'none'; // Close the pamper modal
    }
});


//ENQUIRE NOW BUTTONS IN MODALS

// Get the Enquiry Modal element
const enquiryModal = document.getElementById('enquiry-modal');

// Get all "Enquire Now" buttons inside the More Info modals
const enquireNowButtons = document.querySelectorAll('.modal .btn-primary');

// When the user clicks an "Enquire Now" button
enquireNowButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Close all open modals (assuming no overlapping modals)
        const openModals = document.querySelectorAll('.modal');
        openModals.forEach(modal => modal.style.display = 'none');

        // Open the Enquiry Modal
        enquiryModal.style.display = 'block';
    });
});

// Get all modal close buttons
const closeButtons = document.querySelectorAll('.close-btn');

// Add click event listener to each close button
closeButtons.forEach(button => {
    button.addEventListener('click', function () {
        // Find the parent modal of the clicked close button
        const parentModal = button.closest('.modal');

        // Close the modal
        parentModal.style.display = 'none';
    });
});

// Optional: Close the modal if the user clicks outside of the modal content
window.addEventListener('click', function (event) {
    const openModals = document.querySelectorAll('.modal');
    openModals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});







// PRICING SECTION FUNCTIONALITY

// Get the modal element
const pricingModal = document.getElementById('pricing-modal');

// Get the button that opens the modal
const pricingButton = document.getElementById('pricing-button');

// Get the <span> element that closes the modal
const pricingCloseBtn = pricingModal.querySelector('.close-btn');

// When the user clicks the "Click for Pricing" button, open the modal
pricingButton.addEventListener('click', function() {
    pricingModal.style.display = 'block';
});

// When the user clicks the close button (x), close the modal
pricingCloseBtn.addEventListener('click', function() {
    pricingModal.style.display = 'none';
});

// When the user clicks anywhere outside the modal content, close the modal
window.addEventListener('click', function(event) {
    if (event.target === pricingModal) {
        pricingModal.style.display = 'none';
    }
});




// Functionality for review carousel 

let currentReviewIndex = 0;
const reviews = document.querySelectorAll('.review');
const dots = document.querySelectorAll('.dot');

function showReview(index) {
    // Hide all reviews
    reviews.forEach((review) => {
        review.classList.remove('active');
    });

    // Remove active class from all dots
    dots.forEach((dot) => {
        dot.classList.remove('active');
    });

    // Show the selected review and activate the corresponding dot
    reviews[index].classList.add('active');
    dots[index].classList.add('active');
}

function currentReview(index) {
    currentReviewIndex = index;
    showReview(currentReviewIndex);
}

// Optionally, you can add an auto-slide feature
setInterval(() => {
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
    showReview(currentReviewIndex);
}, 5000); // Auto-slide every 5 seconds




// SCROLLING NAV BAR 

// Listen for the scroll event
window.onscroll = function() {
    // Get the navigation bar
    var navbar = document.querySelector('nav');

    // If the page is scrolled more than 50px, add the 'scrolled' class
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};



//CONTACT FORM 

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from reloading the page

    // Get form data
    var formData = new FormData(this);

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Set up the request
    xhr.open('POST', 'php/contactForm.php', true);

    // Set up the onload event to handle the server response
    xhr.onload = function() {
        if (xhr.status === 200) {
            // Success - Display the response message
            document.getElementById('responseMessage').innerHTML = xhr.responseText;
        } else {
            // Error - Display an error message
            document.getElementById('responseMessage').innerHTML = "Error: There was a problem with your submission.";
        }
    };

    // Send the form data to the PHP handler
    xhr.send(formData);
});