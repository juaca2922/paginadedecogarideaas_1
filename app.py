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


@app.route('/cotizar/<producto_seleccionado>')
def cotizar_producto(producto_seleccionado):
    # Usamos un nombre más sencillo para el archivo, asegurándonos de que no haya caracteres especiales
    template_name = f'cotizar_{producto_seleccionado}.html'

    # Validamos si la plantilla existe antes de intentar cargarla
    try:
        return render_template(template_name)
    except:
        # Si no existe la plantilla, mostramos un error 404
        return "Error: El producto seleccionado no existe", 404


@app.route("/cotizar/macetas")
def cotizar_macetas():
    return render_template('cotizar_macetas.html')
@app.route('/cotizar/macetas_de_loza')
def cotizar_macetas_de_loza():
    return render_template('cotizar_macetas_de_loza.html')
@app.route('/cotizar/macetas_de_arcilla')
def cotizar_macetas_de_arcilla():
    return render_template('cotizar_macetas_de_arcilla.html')
@app.route('/cotizar_velas')
def cotizar_velas():
    return render_template('cotizar_velas.html')
@app.route('/cotizar_velas_tubo')
def cotizar_velas_tubo():
    return render_template('cotizar_velas_tubo.html')


if __name__ == "__main__":
    # Obtiene el puerto asignado por Render, si no existe usa el puerto 5000 por defecto
    port = int(os.environ.get("PORT", 5000))
    # Ejecuta el servidor en 0.0.0.0 para
    app.run(host="0.0.0.0", port=port)

