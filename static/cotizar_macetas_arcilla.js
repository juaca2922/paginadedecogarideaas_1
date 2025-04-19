const preciosPorCantidadArcilla = {
    macetas_de_arcilla: {
        maceta_arcilla: { 0: 7.50, 25: 6.50, 50: 5.90, 100: 5.70 },
        maceta_arcilla_con_yute: { 0: 8.10, 25: 7.10, 50: 6.50, 100: 6.30 },
        maceta_arcilla_con_caja: { 0: 9.00, 25: 8.00, 50: 7.40, 100: 7.20 },
        maceta_arcilla_corazon: { 0: 8.00, 25: 7.00, 50: 6.40, 100: 6.20 },  // Este tipo está bien
        maceta_arcilla_corazon_con_caja: { 0: 9.50, 25: 8.50, 50: 7.90, 100: 7.70 }
    }
};

const nombresVisiblesArcilla = {
    macetas_de_arcilla: {
        maceta_arcilla: "Maceta de arcilla",
        maceta_arcilla_con_yute: "Maceta de arcilla con yute",
        maceta_arcilla_con_caja: "Maceta de arcilla con caja",
        maceta_arcilla_corazon: "Maceta de arcilla de corazón",
        maceta_arcilla_corazon_con_caja: "Maceta de arcilla de corazón con caja"
    }
};

function conectarEventosArcilla() {
    const intervalo = setInterval(() => {
        const tipo = document.getElementById('tipo_maceta');
        const cantidad = document.getElementById('cantidad');

        if (tipo && cantidad) {
            tipo.addEventListener('change', mostrarPrecioArcilla);
            cantidad.addEventListener('input', mostrarPrecioArcilla);
            cantidad.addEventListener('change', mostrarPrecioArcilla);
            mostrarPrecioArcilla();
            clearInterval(intervalo);
        }
    }, 50);
}

function mostrarPrecioArcilla() {
    const tipoSelect = document.getElementById('tipo_maceta');
    const cantidadInput = document.getElementById('cantidad');
    const precioElement = document.getElementById('precio-macetas');
    const resumenElement = document.getElementById('resumen-cotizacion');

    if (!tipoSelect || !cantidadInput || !precioElement || !resumenElement) return;

    const tipo = tipoSelect.value;
    const producto = tipoSelect.dataset.producto;
    const cantidad = parseInt(cantidadInput.value);

    // Verifica qué valores están siendo asignados
    console.log("Producto seleccionado:", producto);  // Asegúrate de que se imprime 'macetas_de_arcilla'
console.log("Tipo de maceta seleccionado:", tipo);  // Asegúrate de que se imprime el tipo de maceta
    console.log('Cantidad:', cantidad);  // Debería mostrar la cantidad ingresada por el usuario

    if (!tipo || isNaN(cantidad) || cantidad <= 0 || !preciosPorCantidadArcilla[producto]?.[tipo]) {
        console.error('No se encontraron los precios o tipo de maceta');
        precioElement.style.display = 'none';
        resumenElement.style.display = 'none';
        return;
    }

    let precioUnitario = 0;
    const escalas = preciosPorCantidadArcilla[producto][tipo];

    if (cantidad <= 24) {
        precioUnitario = escalas[0];
    } else if (cantidad <= 49) {
        precioUnitario = escalas[25];
    } else if (cantidad <= 99) {
        precioUnitario = escalas[50];
    } else {
        precioUnitario = escalas[100];
    }

    const precioTotal = (precioUnitario * cantidad).toFixed(2);
    const tipoNombre = nombresVisiblesArcilla[producto][tipo];

    console.log(`Calculando precio: ${precioUnitario}, Total: ${precioTotal}`);

    precioElement.innerHTML = `
        <strong>Precio Unitario:</strong> S/ ${precioUnitario.toFixed(2)}<br>
        <strong>Precio Total:</strong> S/ ${precioTotal}
    `;
    precioElement.style.display = 'block';

    resumenElement.innerHTML = `
        <div id="texto-cotizacion">
            <pre style="white-space: pre-wrap; font-family: inherit; font-size: 3rem;">
✨ El precio por ${cantidad} unidades de ${tipoNombre} es de S/ ${Number(precioTotal).toLocaleString('es-PE', { minimumFractionDigits: 2 })} soles.

Cada una incluye:
🪴 Maceta de arcilla decorada
🌱 Suculenta natural
💌 Tarjetita personalizada con el nombre y mensaje que desees

La personalización se coordina luego de realizar el abono del pedido.
¿Te gustaría hacer tu pedido o ver algunos modelos? Estoy para ayudarte 🌿💬
            </pre>
        </div>

        <button class="btn btn-success mt-3" onclick="copiarResumenArcilla()" style="font-size: 3.5rem; padding: 15px 30px;">
            📋 Copiar mensaje
        </button>
        <div id="mensaje-copiado" class="text-success mt-2" style="display:none;">¡Texto copiado!</div>
    `;

    resumenElement.style.display = 'block';
}


function copiarResumenArcilla() {
    const contenedor = document.getElementById("texto-cotizacion");
    const temp = document.createElement("textarea");
    temp.value = contenedor.innerText.trim();
    document.body.appendChild(temp);
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);

    const mensaje = document.getElementById("mensaje-copiado");
    mensaje.style.display = "block";
    setTimeout(() => {
        mensaje.style.display = "none";
    }, 2000);
}


