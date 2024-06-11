export default function esMayorDeEdad(campo) {
    const fechaDeNacimiento = new Date(campo.value);
    validarEdad(fechaDeNacimiento);
    console.log(validarEdad(fechaDeNacimiento));
}

function validarEdad(fecha) {
    const fechaActual = new Date();
    const fechaMayorDeEdad = new Date(fecha.getFullYear()+18, fecha.getUTCMonth(), fecha.getUTCDate());

    return fechaActual >= fechaMayorDeEdad;
}