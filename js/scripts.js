// Load header
fetch('commons/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    
    // Now that header is loaded, initialize the mobile menu functionality
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    
    if (mobileMenuBtn && mobileMenu && overlay) {
      mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        this.innerHTML = mobileMenu.classList.contains('active') ? 
          '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      });
      
      overlay.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    }
    
    // Initialize scroll header effect
    const header = document.getElementById('header');
    if (header) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }
    
    // Initialize smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            if (mobileMenuBtn) {
              mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
          }
        }
      });
    });
  });

// Load footer
fetch('commons/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer-placeholder').innerHTML = data;
  });


  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
     showSlides(slideIndex += n);
  }

  function currentSlide(n) {
     showSlides(slideIndex = n);
  }

  function showSlides(n) {
     let i;
     let slides = document.getElementsByClassName("review-slide");
     let dots = document.getElementsByClassName("slider-dot");
     
     if (n > slides.length) {slideIndex = 1}
     if (n < 1) {slideIndex = slides.length}
     
     for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
     }
     
     for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
     }
     
     slides[slideIndex-1].classList.add("active");
     dots[slideIndex-1].classList.add("active");
  }

  setInterval(() => {
     plusSlides(1);
  }, 6000);

  document.addEventListener('DOMContentLoaded', function() {
      const cards = document.querySelectorAll('.location-card');
      
      cards.forEach(card => {
         card.addEventListener('mouseenter', function() {
            this.querySelector('.location-header').style.background = 'linear-gradient(to right, var(--primary-color), var(--secondary-color))';
         });
         
         card.addEventListener('mouseleave', function() {
            this.querySelector('.location-header').style.background = 'linear-gradient(to right, var(--secondary-color), var(--primary-color))';
         });
      });
   });

   const dateInput = document.getElementById('date');
   const today = new Date().toISOString().split('T')[0];
   dateInput.min = today;
   
   const form = document.getElementById('reservationForm');
   const confirmationMessage = document.getElementById('confirmationMessage');
   const closeButton = document.getElementById('closeConfirmation');
   
   form.addEventListener('submit', function(e) {
       e.preventDefault();
       confirmationMessage.classList.add('active');
   });
   
   closeButton.addEventListener('click', function() {
       confirmationMessage.classList.remove('active');
       form.reset();
   });


