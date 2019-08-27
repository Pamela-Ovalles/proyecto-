let extraccion = {};
function compare(element){
  return element !== null && element !== '' && typeof element !== "undefined";
}

function http(type, route, params){
  return new Promise(function(resolve, reject){
    var xhr = new XMLHttpRequest();
    xhr.open(type, route);
    xhr.onload = function() {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText));
        }
        else{
          resolve(null);
        }
    };
    xhr.send();
  });
}

async function onCedulaChange(){
  const busqueda = document.getElementById("busqueda").value;
  const buscar = busqueda.substr(7);
  const valido = busqueda.substr(0,11);
  console.log(valido);
  extraccion = await http('GET','/getPersonaByCedula/'+buscar,null);
  //location.reload();

  if (extraccion.usuario!=null && valido == extraccion.usuario.cedula) {

    const bus = extraccion.usuario.id;
    const busqueda = document.getElementById("busqueda").value= bus;
      $("#cedula").val(extraccion.usuario.cedula);
      $("#cedulaoculta").val(extraccion.usuario.cedula);
      $("#primernombre").val(extraccion.usuario.nombre_1);
      $("#primerapellido").val(extraccion.usuario.apellido_1);
      //$("#").val(' no encontrado');
    }
  if (extraccion.usuario.apellido_2!=null && valido == extraccion.usuario.cedula) {
      $("#segundoapellido").val(extraccion.usuario.apellido_2);
    }
    if (extraccion.usuario.nacionalidad!=null && valido == extraccion.usuario.cedula) {
    $("#nacionalidad").val(extraccion.usuario.nacionalidad);
    }
    if (extraccion.usuario.celular!=null && valido == extraccion.usuario.cedula) {
    $("#telefonoconductor").val(extraccion.usuario.celular);
  }
  else {
    const busqueda1 = document.getElementById("cedula").value= "";
    const busqueda2 = document.getElementById("primernombre").value= "";
    const busqueda3 = document.getElementById("primerapellido").value= "";
    const busqueda4 = document.getElementById("segundoapellido").value= "";
    const busqueda5 = document.getElementById("nacionalidad").value= "";
    const busqueda6 = document.getElementById("telefonoconductor").value= "";
  }



}

onCedulaChange();
