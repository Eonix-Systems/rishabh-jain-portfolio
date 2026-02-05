document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileToggle.classList.remove('active');
                }

                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Scroll Reveal Animation with Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.scroll-reveal, .fade-in');
    revealElements.forEach(el => observer.observe(el));

    // Project Cards - Expansion Logic Removed
    // Images are now visible by default

    // Greeting time based logic (Optional personalization)
    const setGreeting = () => {
        const greetingEl = document.querySelector('.greeting');
        const hour = new Date().getHours();
        let greetingText = "Hello, I'm";

        if (hour >= 5 && hour < 12) greetingText = "Good Morning, I'm";
        else if (hour >= 12 && hour < 18) greetingText = "Good Afternoon, I'm";
        else if (hour >= 18) greetingText = "Good Evening, I'm";

        if (greetingEl) greetingEl.textContent = greetingText;
    };

    setGreeting();

});
