const imagenes = document.querySelectorAll('img-galeria');
const imagenesLight = document.querySelectorAll('agregar-imagen');
const contenedorLight=document.querySelector('imagen-light');
console.log(imagenes);
imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{
        console.log(imagen.getAttribute('src'));
    })
})