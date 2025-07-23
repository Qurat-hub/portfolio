  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;

      if (top < windowHeight - revealPoint) {
        el.classList.add('active');
      } else {
        el.classList.remove('active'); // Optional: remove when out of view
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll); // trigger on page load




// darkmode

  const darkModeIcon = document.getElementById('darkmode-icon');
  const body = document.body;

  // Load saved theme
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeIcon.classList.replace('bx-moon', 'bx-sun');
  }

  // Toggle theme on icon click
  darkModeIcon.onclick = () => {
    body.classList.toggle('dark-mode');

    // Change icon
    if (body.classList.contains('dark-mode')) {
      darkModeIcon.classList.replace('bx-moon', 'bx-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      darkModeIcon.classList.replace('bx-sun', 'bx-moon');
      localStorage.setItem('theme', 'light');
    }
  };


let testimonials = document.querySelectorAll('.testimonial');
let currentIndex = 0;

function showTestimonial(index) {
  testimonials.forEach((t, i) => {
    t.classList.remove('active');
    if (i === index) {
      t.classList.add('active');
    }
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

// Auto-slide every 6 seconds
setInterval(nextTestimonial, 6000);





// menue-icon
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick =() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
    sections.forEach(sec=>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top< offset +height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id +']').classList.add('active');
            });
            
        };
    });



  // Sticky header

    let header=document.querySelector('.header');

    header.classList.toggle('sticky',window.scrollY>100);
      // Close menu on scroll

  menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

var swiper=new Swiper(".myswiper",{
    slidesPreView:1,
    spaceBetween:50,
    loop:true,
    grabCursor:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
});