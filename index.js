// Dropdown menu animation for desktop
const products = document.getElementById('products');
const dropdown = document.getElementById('dropdown');

// Open dropdown when products is hovered on
products.addEventListener('mouseover', function openDrop() {
    products.style.cursor = 'pointer';
    dropdown.classList.add('active');
});

// Close dropdown when mouse leaves products
products.addEventListener('mouseleave', function closeDrop() {
    setTimeout(() => {
        if (!dropdown.matches(':hover')) {
            dropdown.classList.remove('active');
        }
    }, 200);
});

// Keep dropdown active if it is hovered on
dropdown.addEventListener('mouseover', () => {
    dropdown.classList.add('active');
});

//  Close dropdown when mouse leaves dropdown
dropdown.addEventListener('mouseleave', () => {
    setTimeout(() => {
        dropdown.classList.remove('active');
    }, 200);
});

// Dropdown menu implementation for mobile
const hamburger = document.getElementById('hamburger');
const cancel = document.getElementById('cancel');
const mobileNav = document.getElementById('mobileNav');

if (window.innerWidth > 768) {
    cancel.classList.add('hide');
    hamburger.classList.add('hide');
};

if (window.innerWidth <= 768) {
    hamburger.classList.remove('hide');

    cancel.addEventListener('click', function closeNav() {
        if (window.innerWidth <= 768) {
            cancel.style.display = 'none';
            hamburger.style.display = 'block';
            mobileNav.style.display = 'none';
        } else {
            hamburger.classList.add('hide');
            mobileNav.style.display = 'none';
        }
    });
};

hamburger.addEventListener('click', function openNav() {
    if (window.innerWidth <= 768) {
        cancel.style.display = 'block';
        hamburger.style.display = 'none';
        mobileNav.style.display = 'flex';
    }
});

window.addEventListener('resize', () => {
    const widthThreshold = 769;
    if (window.innerWidth >= widthThreshold) {
        hamburger.style.display = 'none';
        cancel.style.display = 'none';
        mobileNav.style.display = 'none';
    } else {
        hamburger.style.display = 'block';
        cancel.style.display = 'none';
        mobileNav.style.display = 'none';
    }
});

const mobileProducts = document.getElementById('mobileProducts');
const mobileDropdown = document.getElementById('mobileDropdown');

mobileProducts.addEventListener('click', function openList() {
    mobileDropdown.classList.toggle('active');
});

// scroll effect for links clicked
document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });

        if (window.innerWidth <= 768) {
            cancel.style.display = 'none';
            hamburger.style.display = 'block';
            mobileNav.style.display = 'none';
            mobileDropdown.classList.remove('active');
        }
    });
});

// carousel container implementation
document.addEventListener('DOMContentLoaded', () => {
    const carouselOne = document.querySelector('.carousel-one');
    const carouselTwo = document.querySelector('.carousel-two');
    const buttonOne = document.getElementById('buttonOne');
    const buttonTwo = document.getElementById('buttonTwo');

    function showActiveSlide(activeSlide) {
        if (activeSlide === 1) {
            carouselOne.classList.add('active');
            carouselTwo.classList.remove('active');
            buttonOne.classList.add('active');
            buttonTwo.classList.remove('active');
        } else {
            carouselOne.classList.remove('active');
            carouselTwo.classList.add('active');
            buttonOne.classList.remove('active');
            buttonTwo.classList.add('active');
        }
    }

    buttonOne.addEventListener('click', () => showActiveSlide(1));
    buttonTwo.addEventListener('click', () => showActiveSlide(2));

    showActiveSlide(1);
});

// Faq question answer reveal implementation
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    const answerShow = faq.querySelector('#answerShow');
    const answerHide = faq.querySelector('#answerHide');
    const faqDrop = faq.querySelector('.faq-drop');

    answerShow.addEventListener('click', function() {
        faqs.forEach(otherFaq => {
            if (otherFaq !== faq) {
                otherFaq.querySelector('#answerShow').style.display = 'block';
                otherFaq.querySelector('#answerHide').style.display = 'none';
                otherFaq.querySelector('.faq-drop').style.display = 'none';
                otherFaq.classList.remove('active');
            }
        });

        answerShow.style.display = 'none';
        answerHide.style.display = 'block';
        faqDrop.style.display = 'flex';
        faqDrop.style.opacity = '1';
        faq.classList.add('active');
    });

    answerHide.addEventListener('click', function() {
        answerShow.style.display = 'block';
        answerHide.style.display = 'none';
        faqDrop.style.display = 'none';
        faq.classList.remove('active');
    });
});

// copyright
date = new Date();
year = date.getFullYear();

const copyright = document.querySelector('.copyright');
copyright.textContent = year;


//  Sign Up Button on the navbar

function signUp() {
    window.location.href = "sign-up.html"
}


// Sign In Button on the Navbar
function signIn() {
    window.location.href = "login.html"
}