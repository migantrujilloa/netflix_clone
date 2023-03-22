const grande= document.querySelector('.grande');
const punto=document.querySelectorAll('.punto');
const img=document.querySelectorAll('.img');
const total_img = document.getElementById('grande').getElementsByTagName('img').length;

grande.style.width= `calc(${100*total_img}%)`;


img.forEach((cadaImagen,i)=>{
    img[i].style.width= `calc(${100/total_img}%)`;
})
//cuandp CLic en punto
    //Saber la posición de ese punto
    //Aplicar un transform translateX al grande
    //Añadir la clase activo al punto que hemos hecho clic

//Recoremos todos los puntos
punto.forEach((cadaPunto,i)=>{
    //asignamos un clic a cadaPunto
    punto[i].addEventListener('click',()=>{
        //guardar la posición de es punto
        let posicion =i;

        //Calculamos el espcacio que debe DESPLAZARSE el grande

        let operacion= posicion*-(100/total_img);

        grande.style.transform= `translateX(${operacion}%)`

        //pRecorremos todos los punto
        punto.forEach((cadaPunto, i)=>{
            punto[i].classList.remove('activo')
        })

        //añadir la clase activo en el punto que hemos hecho clic

        punto[i].classList.add('activo');

    })
})



window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      document.getElementById("menu-principal").style.background = `#141414`;
      document.getElementById("menu-principal").style.color = "#000";
      document.getElementById("menu-principal").style.line - height;
      "37.5px";
    } else {
      document.getElementById("menu-principal").style.background = `linear-gradient(180deg, rgba(20,20,20,0.742734593837535) 7%, rgba(20,20,20,0) 100%)`;
      document.getElementById("menu-principal").style.color = "#fff";
      document.getElementById("menu-principal").style.line - height;
      "50px";
    }
  }