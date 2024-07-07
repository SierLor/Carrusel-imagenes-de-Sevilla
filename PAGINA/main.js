const imagenesContainer = document.querySelector(".imagenes");
const imagenes = document.querySelectorAll(".imagenes-carrusel");
const btnAtras = document.querySelector(".boton-atras");
const btnDelante = document.querySelector(".boton-delante");

btnAtras.addEventListener("click", e => moverIzquierda());
btnDelante.addEventListener("click", e => moverDerecha());

setInterval(()=>{
   moverDerecha();
}, 2500);

let operacion = 0;
let counter = 0;
let widthImg = 100 / imagenes.length;

function moverDerecha(){
   
   if(counter >= imagenes.length-1){
      counter = 0;
      operacion = 0;
      imagenesContainer.style.transform = `translate(-${operacion}%)`;
      imagenesContainer.style.transition = "none";
   }else{
      counter++;
      operacion = operacion + widthImg;
      imagenesContainer.style.transform = `translate(-${operacion}%)`;
      imagenesContainer.style.transition = "all ease .6s";
   }
   
};

function moverIzquierda(){
   counter--;
   if(counter < 0){
      counter = imagenes.length-1;
      operacion = widthImg * (imagenes.length-1);
      imagenesContainer.style.transform = `translate(-${operacion}%)`;
      imagenesContainer.style.transition = "none";
   }else{
      operacion = operacion - widthImg;
      imagenesContainer.style.transform = `translate(-${operacion}%)`;
      imagenesContainer.style.transition = "all ease .6s";
   }
   
};