// Función para actualizar el precio
function actualizar_precio(productoSeleccionado, cantidad) {
    let tipoSeleccionado = document.getElementById('tipo_' + productoSeleccionado).value;
    let precio = preciosPorCantidad[productoSeleccionado][tipoSeleccionado];
    let precioFinal = 0;

    if (cantidad >= 100) {
        precioFinal = precio[100];
    } else if (cantidad >= 50) {
        precioFinal = precio[50];
    } else if (cantidad >= 25) {
        precioFinal = precio[25];
    } else {
        precioFinal = precio[0];
    }

    let precioPorUnidad = precioFinal.toFixed(2);
    let totalPrecio = (precioFinal * cantidad).toFixed(2);
    const nombreVisible = nombresVisibles[productoSeleccionado]?.[tipoSeleccionado] || tipoSeleccionado;

    const mensajePrecio = `Precio por unidad: S/ ${precioPorUnidad}
✨ El precio por ${cantidad} unidades de ${nombreVisible} es de S/ ${totalPrecio}`;

// Limpiar antes de actualizar
const precioElemento = document.getElementById("precio");
precioElemento.innerText = "";  // Limpiar el contenido previamente

// Solo actualizar el precio si es diferente al último
if (precioElemento.innerText !== mensajePrecio) {
    precioElemento.innerText = mensajePrecio;
}

    return mensajePrecio; // Retornar el mensajePrecio para usarlo en la función resumen
}

// Función para actualizar el resumen
function actualizar_resumen(mensajePrecio, productoSeleccionado, cantidad) {
    const resumenElemento = document.getElementById("resumen");

    // Limpiar contenido previo de #resumen
    resumenElemento.innerText = ""; // Limpiar el contenido de #resumen

    // Resumen del producto
    const resumen = textosResumen[productoSeleccionado] || "";
    const mensajeFinal = "\n\nLa personalización se coordina luego de realizar el abono del pedido.\n¿Hay algo en lo que pueda ayudarte o alguna duda que tengas? 😊💬";

    const resumenCompleto = mensajePrecio + "\n\n" + resumen.trim() + mensajeFinal;
    resumenElemento.innerText = resumenCompleto;
    resumenElemento.style.display = "block";  // Asegurarse de mostrarlo
}

// Función para copiar el resumen (sin "Precio por unidad")
function copiar_resumen() {
    const resumen = document.getElementById("resumen").innerText;

    // Filtrar la línea "Precio por unidad" solo para copiar al portapapeles sin modificar el DOM
    const resumenFiltrado = resumen
        .split('\n')
        .filter(linea => !linea.startsWith("Precio por unidad"))
        .join('\n')
        .trim();

    // Copiar al portapapeles
    navigator.clipboard.writeText(resumenFiltrado).then(() => {
        alert("Resumen copiado al portapapeles ✅");
    }).catch(err => {
        alert("Error al copiar el resumen ❌");
        console.error(err);
    });
}

// Función principal que se ejecuta cuando el producto o la cantidad cambia
function cotizar_producto(productoSeleccionado) {
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if (isNaN(cantidad) || cantidad < 1) {
        // Si la cantidad es inválida, ocultar los elementos
        document.getElementById("precio").style.display = "none";
        document.getElementById("resumen").style.display = "none";
        document.getElementById("copiarResumen").style.display = "none";
        return;
    }

    // Obtener el mensaje de precio
    const mensajePrecio = actualizar_precio(productoSeleccionado, cantidad);

    // Actualizar el resumen, pasándole el mensaje de precio
    actualizar_resumen(mensajePrecio, productoSeleccionado, cantidad);

    // Asegurarse de mostrar el botón de copiar
    document.getElementById("copiarResumen").style.display = "inline-block";
}
