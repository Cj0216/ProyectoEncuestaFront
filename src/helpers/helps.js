function validarCURP(curp) {
    const regexCURP = /^[A-Z]{4}\d{6}[HM][A-Z]{2}[B-DF-HJ-NP-TV-Z]{3}\d{2}$/;
  
    return regexCURP.test(curp);
  }
  
  function obtenerGeneroPorCURP(curp) {
    // Verificar que la CURP sea válida
    if (!validarCURP(curp)) {
      return "CURP no válida";
    }
  
    // Obtener el carácter en la posición 11 de la CURP
    const genero = curp.charAt(10);
  
    // Determinar si es hombre o mujer
    if (genero === 'H') {
      return "Hombre";
    } else if (genero === 'M') {
      return "Mujer";
    } else {
      return "Género desconocido";
    }
  }
export {
    obtenerGeneroPorCURP,
    validarCURP
}