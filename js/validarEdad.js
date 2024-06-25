export default function esMayorDeEdad(campo) {
    const fechaDeNacimiento = new Date(campo.value);
    if (!validarEdad(fechaDeNacimiento)) {
        campo.setCustomValidity("Necesitas ser mayor de edad")
    }
}

function validarEdad(fecha) {
    const fechaActual = new Date();
    const fechaMayorDeEdad = new Date(fecha.getFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());

    return fechaActual >= fechaMayorDeEdad;
}