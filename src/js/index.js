const slides = document.querySelectorAll(".slide");
const luaEurope = document.getElementById("lualinkeurope");
const luaIo = document.getElementById("lualinkio")
const luaCalisto = document.getElementById("lualinkcalisto")
const luaGanimedes = document.getElementById("lualinkganimedes")


console.log(slides)
console.log(luaEurope)
console.log(luaIo)

luaEurope.addEventListener("click", function () {
  slides[0].classList.remove("mostrar")
  slides[2].classList.remove("mostrar")
  slides[3].classList.remove("mostrar")
  slides[4].classList.remove("mostrar")
  slides[1].classList.add("mostrar")
 
})

luaIo.addEventListener("click", function () {
  slides[0].classList.remove("mostrar")
  slides[1].classList.remove("mostrar")
  slides[2].classList.remove("mostrar")
  slides[4].classList.remove("mostrar")
  slides[3].classList.add("mostrar")
})

luaCalisto.addEventListener("click", function(){
  slides[0].classList.remove("mostrar")
  slides[1].classList.remove("mostrar")
  slides[3].classList.remove("mostrar")
  slides[4].classList.remove("mostrar")
  slides[2].classList.add("mostrar")
})

luaGanimedes.addEventListener("click", function(){
  slides[0].classList.remove("mostrar")
  slides[1].classList.remove("mostrar")
  slides[2].classList.remove("mostrar")
  slides[3].classList.remove("mostrar")
  slides[4].classList.add("mostrar")
})




















// const imagens = document.querySelectorAll(".slide");
// const setaVoltar = document.getElementById("seta-voltar");
// const setaAvancar = document.getElementById("seta-avancar");

// let imagemAtual = 0;

// setaAvancar.addEventListener("click", function () {
//   if (imagemAtual === imagens.length - 1) {
//     return;
//   }

//   esconderImagemAberta();

//   imagemAtual++;

//   imagens[imagemAtual].classList.add("mostrar");

//   mostrarOuEsconderSetas();
// });

// setaVoltar.addEventListener("click", function () {
//   if (imagemAtual === 0) {
//     return;
//   }
//   esconderImagemAberta();

//   imagemAtual--;

//   imagens[imagemAtual].classList.add("mostrar");

//   mostrarOuEsconderSetas();
// });

// function esconderImagemAberta() {
//   const imagemAberta = document.querySelector(".mostrar");
//   imagemAberta.classList.remove("mostrar");
// }

// function mostrarOuEsconderSetas() {
//   const naoEhAPrimeiraImagem = imagemAtual !== 0;
//   if (naoEhAPrimeiraImagem) {
//     setaVoltar.classList.remove("opacidade");
//   } else {
//     setaVoltar.classList.add("opacidade");
//   }

//   const chegouNaUltimaImagem =
//     imagemAtual !== 0 && imagemAtual === imagens.length - 1;
//   if (chegouNaUltimaImagem) {
//     setaAvancar.classList.add("opacidade");
//   } else {
//     setaAvancar.classList.remove("opacidade");
//   }
// }
