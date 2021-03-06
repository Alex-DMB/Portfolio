/* Light Mode */

const toggleButton = document.getElementById("toggle");

toggleButton.addEventListener("click", function(){
  document.body.classList.toggle("light-mode");
})

/* Efeito Digitação */

function typeWriter(element){
  const arrayText = element.innerHTML.split('');
  element.innerHTML = ' ';
  arrayText.forEach(function(letter, i){   
    
  setTimeout(function(){
      element.innerHTML += letter;
  }, 200 * i)

});
}


const name = document.getElementById('myName');
typeWriter(name);

/* Saiba Mais */


const aboutMe = document.getElementById('aboutMe')
const aboutMoreButton = document.getElementById('aboutMore')
const aboutMoreText = `Gosto de assistir animes, jogar em Fliperama, sou flamenguista e adoro festas, meus estilos músicais favoritos são Funk e Trap. 

Desenho desde criança, hoje raramente devido ao foco na programação mas nunca perco o jeito, creio que esse seja um dos meus maiores talentos.`

function changeAboutMe(){
  aboutMoreButton.addEventListener("click",function(){
    aboutMe.textContent = aboutMoreText
  })
}

changeAboutMe()

/* Scroll Reveal */

ScrollReveal().reveal('.scrollReveal',{ duration: 1500, reset: false, distance: '120px' } );

var swiper = new Swiper(".swiper", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
