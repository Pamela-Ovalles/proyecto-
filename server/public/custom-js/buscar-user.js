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

async function cargarDatos(cedula){
  extraccion = await http('GET','/getPersonaByCedula/'+cedula,null);
  console.log(extraccion);
  //fillSelect('cedula',extraccion.usuario,'nombre_1');
}

// function onCedulaChange (){
//   const cedula=document.getElementById("cedula").value;
//   extraccion = await http('GET','/getPersonaByCedula/'+cedula,null);
//   console.log(extraccion);
// }

function fillSelect(idSelect, list, probe){

$(`#${idSelect}`).html("");
$(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="">Seleccione</option>`);
$(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="">${[probe]}</option>`);
}

cargarDatos();
