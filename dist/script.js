// menu show and hide toggle 
const menuIcon = document.getElementById("menu-icon");
const headerNav = document.getElementById("header-nav-list");
const headerNavItems = document.querySelectorAll('.header-nav-list li')

menuIcon.addEventListener("click", () => {
    headerNav.classList.toggle("open");
    if(menuIcon.classList.contains("bx-grid-alt")){
        menuIcon.className = "bx bx-chevrons-right";
        headerNavItems.forEach((item,index) => {
            item.classList.toggle("open");
            item.style.transitionDelay = `${index * 0.5}s`;
        })
    }else{
        menuIcon.className = "bx bx-grid-alt";
        headerNavItems.forEach((item,index) => {
            item.classList.toggle("open");
            item.style.transitionDelay = "0s";
        })
    }
})

// show scroll icon 
const scrollTopIcon = document.getElementById('scroll-top-icon');

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');
    this.scrollY >= 350? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll',scrollUp)
// scroll to top 
scrollTopIcon.addEventListener("click", () => {
    const scrollToTop = () => {
        if(window.pageYOffset > 0) {
            window.scroll(0 , window.pageYOffset - 50);
            requestAnimationFrame(scrollToTop);
        }
    };
    scrollToTop();
})

//scroll reveal animation 
// scroller reveal 
animateElement = (element,origin,delay,distance) => {
    // Initialize ScrollReveal with options
    const sr = ScrollReveal({
        delay: delay,
        distance: distance,
        duration: 1000,
        easing: 'ease',
        origin: origin
    });
  
    // Reveal the element
    sr.reveal(element);
}

// section header 
animateElement('.section-header','left',500,'250px');
// hero section 
animateElement('.hero-img','top',500,'250px');
animateElement('.hero-content','bottom',500,'100px');
animateElement('.social-icon-list','right',700,'250px');
// project section 
animateElement('.project-1','left',700,'250px');
animateElement('.project-2','right',900,'250px');
// about section 
animateElement('.about-img','left',700,'250px');
animateElement('.about-info','right',900,'250px');
// contact section 
animateElement('.contact-form','right',700,'250px');

// footer section 
animateElement('.footer-section','bottom',500,'250px');

// light and dark mode toggle 
const modeChangeIcon = document.getElementById("mode-change-icon");

modeChangeIcon.addEventListener("click", () => {
    if(modeChangeIcon.classList.contains("bx-moon")){
        modeChangeIcon.classList.remove("bx-moon");
        modeChangeIcon.classList.add("bx-sun");
        
        // toggle light and dark mode 
        document.body.classList.toggle('dark-theme');
    }else{
        modeChangeIcon.classList.remove("bx-sun");
        modeChangeIcon.classList.add("bx-moon");
        // toggle light and dark mode 
        document.body.classList.toggle('dark-theme');
    }
})
