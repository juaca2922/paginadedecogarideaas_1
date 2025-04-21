function cotizar_producto(productoSeleccionado) {
    // Obtener el tipo y cantidad
    let tipoSeleccionado = document.getElementById('tipo_' + productoSeleccionado).value;
    let cantidad = parseInt(document.getElementById("cantidad").value);

    // Validar cantidad
    if (isNaN(cantidad) || cantidad < 1) {
        document.getElementById("precio").style.display = "none";
        document.getElementById("resumen").style.display = "none";
        document.getElementById("copiarResumen").style.display = "none";
        return;
    }

    // Precio escalonado
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

    // Calcular precios
    let precioPorUnidad = precioFinal.toFixed(2);
    let totalPrecio = (precioFinal * cantidad).toFixed(2);
    const nombreVisible = nombresVisibles[productoSeleccionado]?.[tipoSeleccionado] || tipoSeleccionado;

    // Mensaje final con formato
    const mensajePrecio = `Precio por unidad: S/ ${precioPorUnidad}
✨ El precio por ${cantidad} unidades de ${nombreVisible} es de S/ ${totalPrecio}`;

    // Mostrar precio
    document.getElementById("precio").innerText = mensajePrecio;
    document.getElementById("precio").style.display = "block";

    // Resumen del producto
    const resumen = textosResumen[productoSeleccionado] || "";
    const mensajeFinal = "\n\nLa personalización se coordina luego de realizar el abono del pedido.\n¿Te gustaría hacer tu pedido o ver algunos modelos? ¡Estoy para ayudarte! 💬";

    const resumenCompleto = mensajePrecio + "\n\n" + resumen.trim() + mensajeFinal;

    document.getElementById("resumen").innerText = resumenCompleto;
    document.getElementById("resumen").style.display = "block";

    // Mostrar botón copiar
    document.getElementById("copiarResumen").style.display = "inline-block";
}
