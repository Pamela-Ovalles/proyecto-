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

  if (extraccion.usuario!=null) {
    const bus = extraccion.usuario.id;
    const busqueda = document.getElementById("busqueda").value= bus;
      $("#cedula").val(extraccion.usuario.cedula);
      $("#primernombre").val(extraccion.usuario.nombre_1);
      $("#primerapellido").val(extraccion.usuario.apellido_1);
      //$("#").val(' no encontrado');
    }
  /*if (extraccion.usuario.nombre_2!=null) {
  $("#segundonombre").val(extraccion.usuario.nombre_2);
}*/
  if (extraccion.usuario.apellido_2!=null) {
      $("#segundoapellido").val(extraccion.usuario.apellido_2);
    }
    if (extraccion.usuario.nacionalidad!=null) {
    $("#nacionalidad").val(extraccion.usuario.nacionalidad);
    }
    if (extraccion.usuario.celular!=null) {
    $("#telefonoconductor").val(extraccion.usuario.celular);
  }

}

onCedulaChange();
