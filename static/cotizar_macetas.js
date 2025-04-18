const preciosPorCantidad = {
    macetas: {
        macetas: {
            0: 6.00,
            25: 4.80,
            50: 4.20,
            100: 4.00
        },
        macetas_con_yute: {
            0: 6.50,
            25: 5.30,
            50: 4.70,
            100: 4.50
        },
        macetas_con_caja: {
            0: 7.50,
            25: 6.80,
            50: 6.20,
            100: 6.00
        },
        macetas_con_sticker: {
            0: 6.40,
            25: 5.20,
            50: 4.60,
            100: 4.40
        }
    }
};

const nombresVisibles = {
    macetas: {
        macetas: "Macetita",
        macetas_con_yute: "Macetita con yute",
        macetas_con_caja: "Macetita con caja",
        macetas_con_sticker: "Macetita con sticker"
    }
};

// Se ejecuta cuando el usuario selecciona un producto
function mostrarOpciones() {
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
            conectarEventos();
        })
        .catch(err => {
            console.error('Error al cargar el fragmento:', err);
            contenedor.innerHTML = '<p>No se pudo cargar el fragmento.</p>';
        });
}

// Reconecta eventos dinámicos una vez insertado el fragmento
function conectarEventos() {
    const intervalo = setInterval(() => {
        const tipo = document.getElementById('tipo_maceta');
        const cantidad = document.getElementById('cantidad');

        if (tipo && cantidad) {
            tipo.addEventListener('change', mostrarPrecio);
            cantidad.addEventListener('input', mostrarPrecio);
            cantidad.addEventListener('change', mostrarPrecio);
            mostrarPrecio();
            clearInterval(intervalo);
        }
    }, 50);
}

// Calcula precio y muestra resumen
function mostrarPrecio() {
    const tipoSelect = document.getElementById('tipo_maceta');
    const cantidadInput = document.getElementById('cantidad');
    const precioElement = document.getElementById('precio-macetas');
    const resumenElement = document.getElementById('resumen-cotizacion');

    if (!tipoSelect || !cantidadInput || !precioElement || !resumenElement) return;

    const tipo = tipoSelect.value;
    const producto = tipoSelect.dataset.producto;
    const cantidad = parseInt(cantidadInput.value);

    if (!tipo || isNaN(cantidad) || cantidad <= 0 || !preciosPorCantidad[producto]?.[tipo]) {
        precioElement.style.display = 'none';
        resumenElement.style.display = 'none';
        return;
    }

    let precioUnitario = 0;
    const escalas = preciosPorCantidad[producto][tipo];

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
    const tipoNombre = nombresVisibles[producto][tipo];

    precioElement.innerHTML = `
        <strong>Precio Unitario:</strong> S/ ${precioUnitario.toFixed(2)}<br>
        <strong>Precio Total:</strong> S/ ${precioTotal}
    `;
    precioElement.style.display = 'block';

resumenElement.innerHTML = `
    <div id="texto-cotizacion">
        <pre style="white-space: pre-wrap; font-family: inherit; font-size: 1.8rem;">
✨ El precio por ${cantidad} unidades de ${tipoNombre} es de S/ ${Number(precioTotal).toLocaleString('es-PE', { minimumFractionDigits: 2 })} soles.

Cada una incluye:
🪴 Macetita decorada
🌱 Suculenta natural
💌 Tarjetita personalizada con el nombre y mensaje que desees

La personalización se coordina luego de realizar el abono del pedido.
¿Te gustaría hacer tu pedido o ver algunos modelos? Estoy para ayudarte 🌿💬
        </pre>
    </div>

    <button class="btn btn-outline-primary mt-3" style="font-size: 1.8rem; padding: 1rem 2rem;" onclick="copiarResumen()">📋 Copiar mensaje</button>
    <div id="mensaje-copiado" class="text-success mt-2" style="display:none;">¡Texto copiado!</div>
`;

    resumenElement.style.display = 'block';
}

function copiarResumen() {
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