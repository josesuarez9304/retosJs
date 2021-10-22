//LocalStorage
// es pequeñño espacio de memoria en los navegadores que puede guardar variables en el navegador
// es medio seguro por que se guarda en el navegador de nosotros como iicios de session y datos de usuario

//key nombre de la variables y value el valor de esa variable

//esto queda en cache de memoria

//se guarda un boton y los h2
const btnUser = document.getElementById("btnUser");
//se guarda el h2 nombre usuario
const nombreUsuario = document.getElementById("nombre");
//se guarda el h2 apellido usuario
const apellidoUsuario = document.getElementById("apellido");
//se guarda el h2 edad usuario
const edadUsuario = document.getElementById("edad");
//se guarda el h2 telefono usuario
const telefoUsuario = document.getElementById("telefo");
//se guarda el h2 celular usuario
const celuUsuario = document.getElementById("celu");
//se guarda el h2 direccion
const dirUsuario = document.getElementById("dir");

//funciones
//el h2 va  a quedar guardado  asi refresque el navegador
const userData = () => {
  let userName = prompt("Ingresa tu nombre");
  let userLastName = prompt("Ingresa tu apellido");
  let userage = prompt("Ingresa tu edad");
  let usertelephone = prompt("Ingresa tu número telefonico");
  let usermobile = prompt("Ingresa tu celular");
  let useraddress = prompt("Ingresa tu  dirección");

 //Validacion
//aca valida si viene un null
console.log(userName, userLastName, userage,usertelephone,usermobile,useraddress);
if (
  userName == null ||
  userName == "" ||
  userName == undefined ||
  userLastName == null ||
  userLastName == "" ||
  userLastName == undefined ||
  userage == null ||
  userage == "" ||
  userage == undefined ||
  usertelephone == null ||
  usertelephone == "" ||
  usertelephone == undefined ||
  usermobile == null ||
  usermobile == "" ||
  usermobile == undefined ||
  useraddress == null ||
  useraddress == "" ||
  useraddress == undefined 
)
{
  return alert("Error en el momento de ingresar alguno de los datos");
}

//dejarlo en min por si necesito validar algo ams adelante
userName = userName.toLowerCase();
userLastName = userLastName.toLowerCase();
userage = userage.toLowerCase();
usertelephone= usertelephone.toLowerCase();
usermobile= usermobile.toLowerCase();
useraddress= useraddress.toLowerCase();


 
 
 
  //inerhtml asigna un valor con igual
  nombreUsuario.innerHTML = "Nombre : " + userName;
  //guarda en el local storaje
  localStorage.setItem("name", userName);
  //iner apellido reemplaza el q esta tomando
  apellidoUsuario.innerHTML = "Apellido : " + userLastName;
  localStorage.setItem("lastname", userLastName);
  //iner edad reemplaza el q esta tomando
  edadUsuario.innerHTML = "edad : " + userage;
  localStorage.setItem("age", userage);
  //iner telefono reemplaza el q esta tomando
  telefoUsuario.innerHTML = "Teléfono : " + usertelephone;
  localStorage.setItem("telephone", usertelephone);
  //iner mobile reemplaza el q esta tomando
  celuUsuario.innerHTML = "Celular : " + usermobile;
  localStorage.setItem("mobile", usermobile);
  //iner direccion reemplaza el q esta tomando
  dirUsuario.innerHTML = "Dirección : " + useraddress;
  localStorage.setItem("address", useraddress);
  
};

//busca el objeto si esta en el local storage
//si lo encunetra devuelve true sino false
// si lo encontro se lo manda a la variabe h2 para que lo muestre cuando se refresca
//si es true

if (localStorage.getItem("name")) {
  nombreUsuario.innerHTML = "El nombre es: " + localStorage.getItem("name");
}
if (localStorage.getItem("lastname")) {
    apellidoUsuario.innerHTML = "El apellido es: " + localStorage.getItem("lastname");
}
if (localStorage.getItem("age")) {
    edadUsuario.innerHTML = "La edad es: " + localStorage.getItem("age");
}
if (localStorage.getItem("telephone")) {
    telefoUsuario.innerHTML = "El telefóno es: " + localStorage.getItem("telephone");
}
if (localStorage.getItem("mobile")) {
    celuUsuario.innerHTML = "El mobil es: " + localStorage.getItem("mobile");
}
if (localStorage.getItem("address")) {
    dirUsuario.innerHTML = "La direccion es: " + localStorage.getItem("address");
}


//evento
//el evento que se da es cuandos e oprime el boton
btnUser.onclick = () => {
  userData();
};
