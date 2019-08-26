let direcciones = {};

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

async function cargarProvinciasYDemas(){
  direcciones = await http('POST', '/getDirecciones', null);
  fillSelect('provincia',direcciones.provincias, 'nom_provincia', 'id');
}

function fillSelect(idSelect, list, descriptionName, idName){
  $(`#${idSelect}`).html("");
$(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="">Seleccione</option>`);
  for(let i of list){
    $(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="${i[idName]}">${i[descriptionName]}</option>`);
  }
}

function fillMunicipios(){

  if (compare($("#provincia").val())){
    let municipiosValidos = direcciones.municipios.filter(a => {
      return a.provincia_id == $("#provincia").val();
    });
    fillSelect('municipio', municipiosValidos, 'nom_municipio', 'id');
  }
  else fillSelect('municipio', [], null, null);
}

function fillSector(){
  if (compare($("#municipio").val())){
    let sectoresValidos = direcciones.sectores.filter(a => {
      return a.municipio_id == $("#municipio").val();
    });
    fillSelect('sector', sectoresValidos, 'nombre_sector', 'id');
  }
  else fillSelect('sector', [], null, null);
}

cargarProvinciasYDemas();
