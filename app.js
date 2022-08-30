const openMobileNavBtn = document.getElementById('nav--button');
const mobileNav = document.getElementById('mobile-nav')
const closeMobileNavBtn = document.getElementById('closemobilenav');
const illustrateBtn1 = document.getElementById('illustrationBtn1');
const illustrateBtn2 = document.getElementById('illustrationBtn2');
const illustrateBtn3 = document.getElementById('illustrationBtn3');
const illustrateImage = document.getElementById('illustration-image');
const illustrateHeading = document.getElementById('illustration-heading');
const illustrateParagraph = document.getElementById('illustration-paragraph');
let accordionButtons = document.getElementsByClassName('accordion-btn');


openMobileNavBtn.onclick = () => {
  mobileNav.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
closeMobileNavBtn.onclick = () => {
  mobileNav.style.display = 'none';
  document.body.style.overflow = 'initial';
}

const illustrationDetails = {
  illustrationBtn1: {
    imgsrc: './images/illustration-features-tab-1.svg',
    heading: 'Bookmark in one click',
    paragraph: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
  },
  illustrationBtn2: {
    imgsrc: './images/illustration-features-tab-2.svg',
    heading: 'Intelligent search',
    paragraph: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
  },
  illustrationBtn3:{
    imgsrc: './images/illustration-features-tab-3.svg',
    heading: 'Share your bookmarks',
    paragraph: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
  }
}

let changeActiveIllustration = (elem) => {
  if(elem.classList.contains('illustration-btn--active')){
    return
  }
  let dunce = document.querySelector('.illustration-btn--active')
  dunce.classList.remove('illustration-btn--active');
  elem.classList.add('illustration-btn--active')
  illustrateImage.setAttribute('src', illustrationDetails[elem.id].imgsrc);
  illustrateHeading.textContent = illustrationDetails[elem.id].heading;
  illustrateParagraph.textContent = illustrationDetails[elem.id].paragraph;
}

[illustrateBtn1, illustrateBtn2, illustrateBtn3].forEach(elem => {
  elem.onclick = () => changeActiveIllustration(elem);
})

accordionButtons = [...accordionButtons];
accordionButtons.forEach((elem, index) => {
  elem.onclick = () => {
    elem.classList.toggle('accordionbtn--active')
    let dets = document.getElementById(`det${index+1}`)
    dets.classList.toggle('show');
  }
})