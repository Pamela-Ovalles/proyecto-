let agente = {};
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

async function onBuscarAmet(){
  const busqueda = document.getElementById("buscaramet").value;
  agente = await http('GET','/getAmet/'+busqueda,null);

  if (agente.usuario!=null) {
    var busca = document.getElementById("busqueda").disabled="";
    }
}

onBuscarAmet();
