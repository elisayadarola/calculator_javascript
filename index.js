//almaceno el html display en la variable display
let display = document.getElementById("display");
//lo mismo con buttons, cuidado al seleccionar el button individual y no el div entero. el array.from permite transformarlo en array
let buttons = Array.from(document.getElementsByClassName("button"));
console.log(buttons);
//mapeamos el array, pasamos el parametro que queremos, en este caso button, y le podemos un event listener para que cuando hagamos click, la consola nos f¡diga 'clicked', nos imprima el evento, nos diga el objeto siendo targeteado y nos diga el texto que hay escrito en ese objeto en este caso el div del boton y el numero que corresponde.
buttons.map((button) => {
  button.addEventListener("click", (e) => {
    console.log("clicked");
    console.log(e);
    console.log(e.target);
    console.log(e.target.innerText);
  });
});
