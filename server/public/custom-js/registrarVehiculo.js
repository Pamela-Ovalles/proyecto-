let seleccionMarcas = {};

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

async function loadMarcaYmodelo(){
  seleccionMarcas = await http('POST', '/getMarca', null);
  fillSelect('marca',seleccionMarcas.marcas, 'nom_marca', 'id');
}

function fillSelect(idSelect, list, descriptionName, idName){
  $(`#${idSelect}`).html("");
$(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="">Seleccione</option>`);
  for(let i of list){
    $(`#${idSelect}`).html($(`#${idSelect}`).html()+`<option value="${i[idName]}">${i[descriptionName]}</option>`);
  }
}

function fillModelos(){

  if (compare($("#marca").val())){
    let modelosValidos = seleccionMarcas.modelos.filter(b => {
      return b.marca_id == $("#marca").val();
    });
    fillSelect('modelo', modelosValidos, 'nombre_modelo', 'id');
  }
  else fillSelect('modelo', [], null, null);
}

loadMarcaYmodelo();
