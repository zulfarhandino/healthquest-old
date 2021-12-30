const mobileMenuLines = document.querySelector('.mobile-menu-lines');
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuLines.addEventListener('click', function() {
    mobileNav.style.display = 'block';
    setTimeout(() => mobileNav.style.transform = 'translateX(0)', 1);
});

mobileNav.addEventListener('click', function() {
    mobileNav.style.display = 'none';
    mobileNav.style.transform = 'translateX(100%)';
});
