let numRegEx = /\d/;

export const validacionNombre = (nombre) => (nombre.length < 2 || numRegEx.test(nombre));

export const validacionDireccion = (domicilio) => (domicilio.length < 6);

export const validacionCelular = (celular) => (celular.length < 8);

