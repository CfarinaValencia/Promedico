function validarFormulario() {
    var opciones = document.getElementsByName("opciones");
    var seleccionado = false;
    for(var i=0; i<opciones.length; i++) {
      if(opciones[i].checked) {
        seleccionado = true;
        break;
      }
    }
    if(!seleccionado) {
      alert("Por favor, seleccione una opción.");
      return false;
    }
    return true;
  }