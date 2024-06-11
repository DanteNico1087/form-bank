import esUnCuil from "./validar-cuil.js";
import esMayorDeEdad from "./validarEdad.js";

const camposDeFormulario = document.querySelectorAll("[required]");

camposDeFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())
});

const tiposError = [
    "valueMissing",
    "typeMissmatch",
    "patternMissmatch",
    "tooShort",
    "customError",
];

const mensajes = {
    nombre: {
      valueMissing: "El campo nombre no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un nombre válido.",
      tooShort: "Por favor, ingrese un nombre válido.",
    },
    email: {
      valueMissing: "El campo email no puede estar vacío.",
      typeMismatch: "Por favor, ingrese un email válido.",
      tooShort: "Por favor, ingrese un e-mail válido.",
    },
    identificacion: {
      valueMissing: "El campo identificación no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un número de identificación válido.",
      tooShort: "El campo no tiene caracteres suficientes.",
    },
    cuil: {
      valueMissing: "El campo cuil/cuit no puede estar vacío.",
      patternMismatch: "Por favor, ingrese un cuil/cuit válido.",
      customError: "El cuil/cuit ingresado no existe.",
      tooShort: "El campo no tiene caracteres suficientes.",
    },
    fecha_nacimiento: {
      valueMissing: "El campo fecha nacimiento no puede estar vacío.",
      customError: "Debes ser mayor de 18 años para registrarte.",
    },
    terminos: {
      valueMissing: "Debes aceptar los términos antes de continuar.",
    },
  };
  

function verificarCampo(campo) {
    if (campo.name == "cuil" && campo.value.length >= 11) {
        esUnCuil(campo)
    }
    if (campo.name == "fecha_nacimiento" && campo.value != "") {
        esMayorDeEdad(campo)
    }
    console.log(campo.validity);
}