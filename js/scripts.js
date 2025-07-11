// Load header
fetch('commons/header.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('header-placeholder').innerHTML = data;
    
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
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
          
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

// Reviews slides 
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


