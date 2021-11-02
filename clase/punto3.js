

//recuerde que el h1 es la pálabra clave para el SEO  de windows
//aca se trae el boton escribe en caracteres el id del q esta tomando de la vista
let btnUser = document.getElementById("btnUser");
let palabra = document.getElementById("palabra");

//funciones
const traduce = () => {
  let userWord = prompt(
    "Ingresa una de estas 4  palabras entre casa,mesa,perro,gato "
  );
 console.log( userWord);
  if (
    (userWord == "casa" ||
    userWord == "mesa" ||
    userWord == "perro" ||
    userWord == "gato") == false
  ) {
    alert("vuelva a digitar alguna de estas 4 palabras");
  } else {
    
    switch (userWord) {
      case "casa":
        palabra.innerHTML = "house";
        // alert("house");

        break;
      case "mesa":
        palabra.innerHTML = "table";

        break;
      case "perro":
        palabra.innerHTML = "dog";

        break;
      case "gato":
        palabra.innerHTML = "cat";
    }
  }
};

//eventos
btnUser.onclick = () => {
  traduce();
};
