import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")  # Esto carga la página principal

@app.route('/respuesta_hola')
def respuesta_hola():
    return render_template('respuesta_hola.html')

@app.route('/respuesta_precio')
def respuesta_precio():
    return render_template('respuesta_precio.html')

@app.route('/cotizar')
def cotizar():
    return render_template('cotizar.html')

@app.route('/respuesta_ubicacion')
def respuesta_ubicacion():
    return render_template('respuesta_ubicacion.html')

@app.route('/respuesta_metododepago')
def respuesta_pago():
    return render_template('respuesta_pago.html')

@app.route('/respuesta_delivery')
def respuesta_delivery():
    return render_template('respuesta_delivery.html')

@app.route('/respuesta_modelos')
def respuesta_modelos():
    return render_template('respuesta_modelos.html')

@app.route('/cotizar_producto_seleccionado/<producto>')
def cotizar_producto_seleccionado(producto):
    if producto == 'macetas':
        return render_template('fragments/macetas_fragment.html')
    elif producto == 'macetas_de_loza':
        return render_template('fragments/macetas_loza_fragment.html')
    elif producto == 'macetas_de_arcilla':
        return render_template('fragments/macetas_arcilla_fragment.html')
    elif producto == 'velas':
        return render_template('fragments/velas_fragment.html')
    elif producto == 'velas_tubo':
        return render_template('fragments/velas_tubo_fragment.html')
    else:
        return "<p>Producto no encontrado</p>", 404



if __name__ == "__main__":
    # Obtiene el puerto asignado por Render, si no existe usa el puerto 5000 por defecto
    port = int(os.environ.get("PORT", 5000))
    # Ejecuta el servidor en 0.0.0.0 para
    app.run(host="0.0.0.0", port=port)

