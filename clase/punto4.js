//recuerde que el h1 es la pálabra clave para el SEO  de windows
//aca se trae el boton escribe en caracteres el id del q esta tomando de la vista
let btnUser = document.getElementById("btnUser");
let dptobusqueda = document.getElementById("dpto");



//funciones
const buscaCapital = () => {
  let dpto = prompt(
    "Ingresa uno de los 32 departamentos de colombia para saber su capital "
  );
  //recuerde colcoar a minusculas tambien
  if (dpto == "" || dpto == null || dpto == undefined) {
    alert("digite un valor valido");
  } else {
    dpto = dpto.toLocaleLowerCase();
  }
  dptobusqueda.innerHTML= "EL DEPARTAMENTO QUE BUSCA ES "+dpto ;

  console.log(dpto);
  if (
    (dpto == "amazonas" || dpto == "antioquía"||
    dpto == "arauca"||dpto == "atlántico"||
    dpto == "bolívar"||dpto == "boyacá"||
    dpto == "caldas"|| dpto == "caquetá"||
    dpto == "casanare"|| dpto == "cauca"||
    dpto == "cesar"||dpto == "chocó"||
    dpto == "córdoba"||dpto == "cundinamarca"||
    dpto == "guainía"||dpto == "guaviare"||
    dpto == "huila"||dpto == "la guajira"||
    dpto == "guajira"||dpto == "magdalena"||
    dpto == "meta"||dpto == "nariño"||
    dpto == "norte de santander"||dpto == "putumayo"||
    dpto == "quindío"||dpto == "risaralda"||
    dpto == "san andrés y providencia"||dpto == "santander"||
    dpto == "sucre"||dpto == "tolima"||
    dpto == "valle del cauca"||dpto == "vaupés"||
    dpto == "vichada"
    ) ==
    // validacion 2
    false
  ) {
    alert(
      "escriba un departamento bien escrito de colombia con tildes porfavor"
    );
  } else {
    switch (dpto) {
      case "amazonas":
        alert("la capital es  Leticia");

        break;

      case "antioquía":
        alert("la capital es  Medellín");

        break;

      case "arauca":
        alert("la capital es  Arauca");

        break;

      case "atlántico":
        alert("la capital es  Barranquilla");

        break;

      case "bolívar":
        alert("la capital es  Cartagena de Indias");

        break;

      case "boyacá":
        alert("la capital es  Tunja");

        break;

      case "caldas":
        alert("la capital es  Manizales");

        break;
      case "caquetá":
        alert("la capital es  Florencia");

        break;

      case "casanare":
        alert("la capital es  Yopal");

        break;

      case "cauca":
        alert("la capital es  Yopal");

        break;
      case "cesar":
        alert("la capital es  Valledupar");

        break;
      case "chocó":
        alert("la capital es  Quibdó");

        break;
      case "córdoba":
        alert("la capital es  Montería");

        break;
      case "cundinamarca":
        alert("la capital es  Bogotá");

        break;
      case "guainía":
        alert("la capital es  Inírida");

        break;
      case "guaviare":
        alert("la capital es  San José del Guaviare");

        break;
      case "huila":
        alert("la capital es  Neiva");

        break;
      case "la guajira":
        alert("la capital es  Riohacha");

        break;
      case "guajira":
        alert("la capital es  Riohacha");

        break;

      case "magdalena":
        alert("la capital es  Santa Marta");

        break;
      case "meta":
        alert("la capital es  Villavicencio");

        break;
      case "nariño":
        alert("la capital es  San Juan de Pasto");

        break;
      case "norte de santander":
        alert("la capital es  San José de Cúcuta");

        break;
      case "putumayo":
        alert("la capital es  Mocoa");

        break;
      case "quindío":
        alert("la capital es  Armenia");

        break;
      case "risaralda":
        alert("la capital es  Pereira");

        break;
      case "san andrés y providencia":
        alert("la capital es  San Andrés");

        break;
      case "santander":
        alert("la capital es  Bucaramanga");

        break;
      case "sucre":
        alert("la capital es  Sincelejo");

        break;
      case "tolima":
        alert("la capital es  Ibagué");

        break;
      case "valle del cauca":
        alert("la capital es  Cali");

        break;
      case "vaupés":
        alert("la capital es  Mitú");

        break;

      case "vichada":
        alert("la capital es  Puerto Carreño");

        break;
    }
  }
};

//eventos
btnUser.onclick = () => {
  buscaCapital();
};
