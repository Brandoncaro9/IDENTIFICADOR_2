
var datos = []

var Cargardatos = function(){
    datos = JSON.parse(localStorage.getItem("datos"))
    if(datos == null){
        datos = []
    }
}

var Guardar = function(){
    var nombres = document.getElementById("nombres").value
    var apellidos = document.getElementById("apellidos").value
    var cedula = document.getElementById("cedula").value
    var celular = document.getElementById("celular").value
    var correo = document.getElementById("correo").value

    var persona = {
        nombres:nombres,
        apellidos:apellidos,
        cedula:cedula,
        celular:celular,
        correo:correo,
    }

    var posicion = datos.findIndex((item) => item.cedula == cedula)
    if (posicion == -1) {
    
    datos.push (persona)
    localStorage.setItem("datos",JSON.stringify(datos))
    Swal.fire({
        icon: "success",
        title: "Guardado con exito",
        text: "Gracias",
      });
    Cargardatos()
    }
    else{
        Swal.fire({
            icon: "error",
            title: "La cedula ya existe",
            text: "¡Prueba con otra cedula!",
          });
    }
  console.log(persona)
}

var BorrarBD = function(){
    datos = []
    localStorage.removeItem("datos")
}

var Borrarporcedula = function(){
    var cedulaaeliminar = document.getElementById("buscarcedula").value
    var pos = datos.findIndex ((item) => item.cedula == cedulaaeliminar)
    if(pos == -1){
        Swal.fire({
            icon: "error",
            title: "OUCH!",
            text: "La cedula digitada no existe",
          });

    }
    else{
        datos.splice(pos,1)
        localStorage.setItem("datos",JSON.stringify(datos))
        Swal.fire({
            icon: "success",
            title: "Que bien¡",
            text: "Se borraron los datos",
          });
    }
}

var Buscarporidentificación = function(){
    var cedulaabuscar = document.getElementById("buscaridentificación").value
    var pos = datos.findIndex ((item) => item.cedula == cedulaabuscar)
    if(pos == -1){
        Swal.fire({
            icon: "error",
            title: "OUCH!",
            text: "La cedula digitada no existe",
          });

    }
    else{
        const infousuario = datos[pos]
        const informacionpormostrar = `
        <p> ${infousuario.nombres} </p>
        <p> ${infousuario.apellidos} </p>
        <p> ${infousuario.cedula} </p>
        <p> ${infousuario.celular} </p>
        <p> ${infousuario.correo} </p>
        `
        document.querySelector(".infousuario").innerHTML=informacionpormostrar
        localStorage.setItem("datos",JSON.stringify(datos))
        Swal.fire({
            icon: "info",
            title: "INFORMACIÓN DEL USUARIO: ",
            text: `${infousuario.nombres}  
                   ${infousuario.apellidos}
                   ${infousuario.cedula}
                   ${infousuario.celular}
                   ${infousuario.correo}`,
          });
    }
}
 Cargardatos()
