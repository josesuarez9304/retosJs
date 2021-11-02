

//recibe los  elementos del html

const  btnUser= document.getElementById("btnUser");

const nombre = document.getElementById("nombre");

const sueldo= document.getElementById("sueldo");


//metodos 
const userData = () =>{
    let userName = prompt("Ingresa tu nombre empleado");
    let userSalary = parseInt( prompt("Ingresa tu sueldo"));

   if( userName == null ||
    userName == "" ||
    userName == undefined ||
    //profe como hago para preguntar un vacio  y un null?
    userSalary == NaN ||
    userSalary == "" ||
    userSalary == undefined
    ){
        return alert("Error en el momento de ingresar alguno de los datos"); 
    }



    nombre.innerHTML = "el nombre es "+userName ;

    sueldo.innerHTML ="el sueldo es "+userSalary;

    console.log( typeof userName);
    console.log( typeof userSalary);

}



//eventos

btnUser.onclick = () =>{
userData();
};

