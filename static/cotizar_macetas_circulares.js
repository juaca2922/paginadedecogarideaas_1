const preciosPorCantidadCirculares = {
    macetas_circulares: {
        maceta_circular: { 0: 7.00, 25: 6.50, 50: 6.00, 100: 5.80 },
        maceta_circular_girasol: { 0: 7.80, 25: 7.20, 50: 6.70, 100: 6.50 },
        maceta_circular_caja: { 0: 8.00, 25: 7.50, 50: 7.00, 100: 6.80 },
        maceta_circular_girasol_caja: { 0: 8.80, 25: 8.20, 50: 7.60, 100: 7.40 }
    }
};

const nombresVisiblesCirculares = {
    macetas_circulares: {
        maceta_circular: "Maceta circular",
        maceta_circular_girasol: "Maceta circular con girasol",
        maceta_circular_caja: "Maceta circular con caja",
        maceta_circular_girasol_caja: "Maceta circular con girasol y caja"
    }
};

function conectarEventosCirculares() {
    const intervalo = setInterval(() => {
        const tipo = document.getElementById('tipo_maceta');
        const cantidad = document.getElementById('cantidad');

        if (tipo && cantidad) {
            tipo.addEventListener('change', mostrarPrecioCirculares);
            cantidad.addEventListener('input', mostrarPrecioCirculares);
            cantidad.addEventListener('change', mostrarPrecioCirculares);
            mostrarPrecioCirculares();
            clearInterval(intervalo);
        }
    }, 50);
}

function mostrarPrecioCirculares() {
    const tipoSelect = document.getElementById('tipo_maceta');
    const cantidadInput = document.getElementById('cantidad');
    const precioElement = document.getElementById('precio-macetas');
    const resumenElement = document.getElementById('resumen-cotizacion');

    if (!tipoSelect || !cantidadInput || !precioElement || !resumenElement) return;

    const tipo = tipoSelect.value;
    const producto = tipoSelect.dataset.producto;
    const cantidad = parseInt(cantidadInput.value);

    if (!tipo || isNaN(cantidad) || cantidad <= 0 || !preciosPorCantidadCirculares[producto]?.[tipo]) {
        precioElement.style.display = 'none';
        resumenElement.style.display = 'none';
        return;
    }

    let precioUnitario = 0;
    const escalas = preciosPorCantidadCirculares[producto][tipo];

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
    const tipoNombre = nombresVisiblesCirculares[producto][tipo];

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
🪴 Maceta decorada
🌱 Suculenta natural
💌 Tarjetita personalizada con el nombre y mensaje que desees

La personalización se coordina luego de realizar el abono del pedido.
¿Te gustaría hacer tu pedido o ver algunos modelos? Estoy para ayudarte 🌿💬
            </pre>
        </div>

        <button class="btn btn-success mt-3"
                onclick="copiarResumenCirculares()"
                style="font-size: 3.5rem; padding: 15px 30px;">
            📋 Copiar mensaje
        </button>
        <div id="mensaje-copiado" class="text-success mt-2" style="display:none;">¡Texto copiado!</div>
    `;

    resumenElement.style.display = 'block';
}

function copiarResumenCirculares() {
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

