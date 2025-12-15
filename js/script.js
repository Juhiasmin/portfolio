const menuMobile = document.getElementById('menuMobile');
const menu = document.querySelector('.menu');

menuMobile.addEventListener('click', () => {
  menu.classList.toggle('active');
});
// LIGHTBOX PORTFÓLIO
const imagens = document.querySelectorAll('.grid-portfolio img');

if (imagens.length) {
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  document.body.appendChild(lightbox);

  const img = document.createElement('img');
  lightbox.appendChild(img);

  imagens.forEach(imagem => {
    imagem.addEventListener('click', () => {
      img.src = imagem.src;
      lightbox.style.display = 'flex';
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
}
// ANIMAÇÃO AO SCROLL
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
