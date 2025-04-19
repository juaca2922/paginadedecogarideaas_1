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

            // Detectar el producto y conectar el JS correspondiente
            if (producto === 'macetas') {
                conectarEventosMacetas();
            } else if (producto === 'macetas_circulares') {
                conectarEventosCirculares();
            } else if (producto === 'macetas_de_loza') {
                conectarEventosLoza();
            } else if (producto === 'macetas_de_arcilla') {
                conectarEventosArcilla(); // Asegúrate de que esta función esté definida
            }
        })
        .catch(err => {
            console.error('Error al cargar el fragmento:', err);
            contenedor.innerHTML = '<p>No se pudo cargar el fragmento.</p>';
        });
}
