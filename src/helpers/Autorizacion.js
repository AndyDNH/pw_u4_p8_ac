export function obtenerPaginasPermitidas(usuario) {
    let arreglo;
    if (usuario === "admin") {
        // Paginas del admin
        arreglo = ['/home','/about','/estudiante','/prohibido','/notas'];
    }
    if (usuario === "estudiante") {
        arreglo = ['/home','/about','/estudiante','/prohibido'];
    }
    return arreglo
}