function validarCURP(curp) {
  var re = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/,
      validado = curp.match(re);

  if (!validado)  //Coincide con el formato general?
    return false;
  
  //Validar que coincida el dígito verificador
  function digitoVerificador(curp17) {
      //Fuente https://consultas.curp.gob.mx/CurpSP/
      var diccionario  = "0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ",
          lngSuma      = 0.0,
          lngDigito    = 0.0;
      for(var i=0; i<17; i++)
          lngSuma = lngSuma + diccionario.indexOf(curp17.charAt(i)) * (18 - i);
      lngDigito = 10 - lngSuma % 10;
      if (lngDigito == 10) return 0;
      return lngDigito;
  }

  if (validado[2] != digitoVerificador(validado[1])) 
    return false;
      
  return true; //Validado
}

function obtenerGeneroPorCURP(curp) {
  // Verificar que la CURP sea válida
  if (!validarCURP(curp)) {
    return "CURP no válida";
  }

  // Obtener el carácter en la posición 11 de la CURP
  const genero = curp.charAt(10);

  // Determinar si es hombre o mujer
  if (genero === 'M') {
    return "Masculino";
  } else if (genero === 'Femenino') {
    return "Femenino";
  } else {
    return "Género desconocido";
  }
}
export {
    obtenerGeneroPorCURP,
    validarCURP
}