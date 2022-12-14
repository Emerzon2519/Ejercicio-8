$(document).ready(function() {
    $("form").submit(function(event) {
      let nombre = $("#nombre").val();
      let apellido = $("#apellido").val();
      let correo = $("#correo").val();
      let genero = $("#genero").val();
      let fecha = $("#fecha").val();
  
      alert("Nombre: " + nombre + "\nApellido: " + apellido + "\nCorreo electrónico: " + correo + "\nGénero: " + genero + "\nFecha de nacimiento: " + fecha);
  
      event.preventDefault();
    });
  });
  