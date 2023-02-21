const openPopup = document.getElementById('openNav');
const closePopup = document.getElementById('closeNav');

const popup = document.getElementById('mobileNav');

function closeMobileMenu() {
    popup.style.display = 'none';
}

closeMobileMenu()

openPopup.addEventListener('click', () => {
    popup.style.display = 'block';
})
closePopup.addEventListener('click', () => {
    closeMobileMenu()
})

const links = document.querySelectorAll('.mobile-menu__nav-link');

for (let link of links) {
    link.addEventListener('click', () => {
        closeMobileMenu()
    })
}