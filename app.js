const openMobileNavBtn = document.getElementById('nav--button');
const mobileNav = document.getElementById('mobile-nav')
const closeMobileNavBtn = document.getElementById('closemobilenav');

openMobileNavBtn.onclick = () => {
  mobileNav.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
closeMobileNavBtn.onclick = () => {
  mobileNav.style.display = 'none';
  document.body.style.overflow = 'initial';
}