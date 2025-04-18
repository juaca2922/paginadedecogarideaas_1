const preciosPorCantidadMacetas = {
    macetas: {
        macetas: { 0: 6.00, 25: 4.80, 50: 4.20, 100: 4.00 },
        macetas_con_yute: { 0: 6.50, 25: 5.30, 50: 4.70, 100: 4.50 },
        macetas_con_caja: { 0: 7.50, 25: 6.80, 50: 6.20, 100: 6.00 },
        macetas_con_sticker: { 0: 6.40, 25: 5.20, 50: 4.60, 100: 4.40 }
    }
};

const nombresVisiblesMacetas = {
    macetas: {
        macetas: "Macetita",
        macetas_con_yute: "Macetita con yute",
        macetas_con_caja: "Macetita con caja",
        macetas_con_sticker: "Macetita con sticker"
    }
};

// Función específica solo para MACETAS
function conectarEventosMacetas() {
    const intervalo = setInterval(() => {
        const tipo = document.getElementById('tipo_maceta');
        const cantidad = document.getElementById('cantidad');

        if (tipo && cantidad) {
            tipo.addEventListener('change', mostrarPrecioMacetas);
            cantidad.addEventListener('input', mostrarPrecioMacetas);
            cantidad.addEventListener('change', mostrarPrecioMacetas);
            mostrarPrecioMacetas();
            clearInterval(intervalo);
        }
    }, 50);
}

function mostrarPrecioMacetas() {
    const tipoSelect = document.getElementById('tipo_maceta');
    const cantidadInput = document.getElementById('cantidad');
    const precioElement = document.getElementById('precio-macetas');
    const resumenElement = document.getElementById('resumen-cotizacion');

    if (!tipoSelect || !cantidadInput || !precioElement || !resumenElement) return;

    const tipo = tipoSelect.value;
    const producto = tipoSelect.dataset.producto;
    const cantidad = parseInt(cantidadInput.value);

    if (!tipo || isNaN(cantidad) || cantidad <= 0 || !preciosPorCantidadMacetas[producto]?.[tipo]) {
        precioElement.style.display = 'none';
        resumenElement.style.display = 'none';
        return;
    }

    let precioUnitario = 0;
    const escalas = preciosPorCantidadMacetas[producto][tipo];

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
    const tipoNombre = nombresVisiblesMacetas[producto][tipo];

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
🪴 Macetita decorada
🌱 Suculenta natural
💌 Tarjetita personalizada con el nombre y mensaje que desees

La personalización se coordina luego de realizar el abono del pedido.
¿Te gustaría hacer tu pedido o ver algunos modelos? Estoy para ayudarte 🌿💬
            </pre>
        </div>

        <button class="btn btn-success mt-3"
                onclick="copiarResumenMacetas()"
                style="font-size: 3.5rem; padding: 15px 30px;">
            📋 Copiar mensaje
        </button>
        <div id="mensaje-copiado" class="text-success mt-2" style="display:none;">¡Texto copiado!</div>
    `;

    resumenElement.style.display = 'block';
}

function copiarResumenMacetas() {
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

