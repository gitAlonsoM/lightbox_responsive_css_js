
const enlaces  = document.querySelectorAll('.column a')
const lightbox = document.querySelector('.lightbox')
const big   = document.querySelector('.big')
const close   = document.querySelector('.close')



/* Primero se realiza una iteracion en todos los elementos "enlaces"*/
/* Luego a la variable iteradora se le agrega el evento onclick */
/* Se le ordena la funcion que agregre la clase active de CSS a lightbox por medio de classList.add al hacer click*/
/* Ademas que a la clase big se le agregue el atributo src de la variable ruta */

for (let i of enlaces ){
    
    console.log(i);  /* console usado nada mas para mostrar como se iteran los elementos nada mas abrir la pagina */
    let ruta = i.querySelector('.img').src; //se captura el src de cada iteracion en let ruta  
    
    i.addEventListener("click", (e)=>{ //se le agrega el evento click a cada iteracion

        e.preventDefault()   //usado para que no reediriga la pagina al comienzo
        
        lightbox.classList.add('active');
        big.setAttribute('src', ruta)
    })
}



  
/* BOTON close del LIGHTBOX */
/* se declara que a la clase close, se le adhiera el evento on click, con el nombre de funcion "cierre"*/

close.addEventListener('click', cierre);

function cierre(){   /* al hacer click se remueve la clase la clase active */
        lightbox.classList.remove('active') 
}

 