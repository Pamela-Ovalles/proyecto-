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


function onCedulaChange (){
  const busqueda = document.getElementById("busqueda").value);
  const buscar = busqueda.substr(7);
  console.log(buscar);
  extraccion = await http('GET','/getPersonaByCedula/'+buscar,null);
  console.log(extraccion);
}


cargarDatos();
