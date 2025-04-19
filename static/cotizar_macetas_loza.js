const preciosPorCantidadLoza = {
    macetas_de_loza: {
        maceta_loza_redonda: { 0: 8.00, 25: 6.60, 50: 6.00, 100: 5.80 },
        maceta_loza_redonda_con_caja: { 0: 9.50, 25: 8.10, 50: 7.50, 100: 7.30 },
        maceta_loza_octogonal: { 0: 8.50, 25: 8.00, 50: 7.40, 100: 7.20 },
        maceta_loza_paloma: { 0: 9.00, 25: 7.00, 50: 6.40, 100: 6.20 },
        maceta_loza_paloma_con_caja: { 0: 10.50, 25: 8.50, 50: 7.90, 100: 7.70 } // Agregado la coma
    }
};

const nombresVisiblesLoza = {
    macetas_de_loza: {
        maceta_loza_redonda: "Maceta de loza redonda",
        maceta_loza_redonda_con_caja: "Maceta de loza redonda con caja",
        maceta_loza_octogonal: "Maceta de loza octogonal",
        maceta_loza_paloma: "Maceta de loza paloma",
        maceta_loza_paloma_con_caja: "Maceta de loza paloma con caja" // Agregado la coma
    }
};

// Se ejecuta cuando el usuario selecciona un producto
function mostrarOpcionesLoza() {
    const producto = document.getElementById('producto').value;
    const contenedor = document.getElementById('producto-seleccionado');
    const cantidadContainer = document.getElementById('cantidad-container');

    if (!producto) {
        contenedor.innerHTML = '';
        cantidadContainer.style.display = 'none';
        return;
    }

    cantidadContainer.style.display = 'block';
    contenedor.innerHTML = '<p>Cargando opciones...</p>';

    fetch(`/cotizar_producto_seleccionado/${producto}`)
        .then(res => res.text())
        .then(html => {
            contenedor.innerHTML = html;
            conectarEventosLoza();
        })
        .catch(err => {
            console.error('Error al cargar el fragmento:', err);
            contenedor.innerHTML = '<p>No se pudo cargar el fragmento.</p>';
        });
}

// Reconecta eventos dinámicos una vez insertado el fragmento
function conectarEventosLoza() {
    const intervalo = setInterval(() => {
        const tipo = document.getElementById('tipo_maceta');
        const cantidad = document.getElementById('cantidad');

        if (tipo && cantidad) {
            tipo.addEventListener('change', mostrarPrecioLoza);
            cantidad.addEventListener('input', mostrarPrecioLoza);
            cantidad.addEventListener('change', mostrarPrecioLoza);
            mostrarPrecioLoza();
            clearInterval(intervalo);
        }
    }, 50);
}

// Calcula precio y muestra resumen
function mostrarPrecioLoza() {
    const tipoSelect = document.getElementById('tipo_maceta');
    const cantidadInput = document.getElementById('cantidad');
    const precioElement = document.getElementById('precio-macetas');
    const resumenElement = document.getElementById('resumen-cotizacion');

    if (!tipoSelect || !cantidadInput || !precioElement || !resumenElement) return;

    const tipo = tipoSelect.value;
    const producto = tipoSelect.dataset.producto;
    const cantidad = parseInt(cantidadInput.value);

    if (!tipo || isNaN(cantidad) || cantidad <= 0 || !preciosPorCantidadLoza[producto]?.[tipo]) {
        precioElement.style.display = 'none';
        resumenElement.style.display = 'none';
        return;
    }

    let precioUnitario = 0;
    const escalas = preciosPorCantidadLoza[producto][tipo];

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
    const tipoNombre = nombresVisiblesLoza[producto][tipo];

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
🪴 Maceta de loza decorada
🌱 Suculenta natural
💌 Tarjetita personalizada con el nombre y mensaje que desees

La personalización se coordina luego de realizar el abono del pedido.
¿Te gustaría hacer tu pedido o ver algunos modelos? Estoy para ayudarte 🌿💬
            </pre>
        </div>

        <button class="btn btn-success mt-3"
                onclick="copiarResumenLoza()"
                style="font-size: 3.5rem; padding: 15px 30px;">
            📋 Copiar mensaje
        </button>
        <div id="mensaje-copiado" class="text-success mt-2" style="display:none;">¡Texto copiado!</div>
    `;

    resumenElement.style.display = 'block';
}

function copiarResumenLoza() {
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
