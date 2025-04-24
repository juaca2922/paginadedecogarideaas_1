import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")  # Esto carga la página principal

@app.route('/cotizar')
def cotizar():
    return render_template('cotizar.html')

@app.route('/respuestas/respuesta_hola')
def respuesta_hola():
    return render_template('respuestas/respuesta_hola.html')

@app.route('/respuestas/respuesta_precio')
def respuesta_precio():
    return render_template('respuestas/respuesta_precio.html')

@app.route('/respuestas/respuesta_ubicacion')
def respuesta_ubicacion():
    return render_template('respuestas/respuesta_ubicacion.html')

@app.route('/respuestas/respuesta_pago')
def respuesta_pago():
    return render_template('respuestas/respuesta_pago.html')

@app.route('/respuestas/respuesta_delivery')
def respuesta_delivery():
    return render_template('respuestas/respuesta_delivery.html')

@app.route('/respuestas/respuesta_modelos')
def respuesta_modelos():
    return render_template('respuestas/respuesta_modelos.html')

if __name__ == "__main__":
    # Obtiene el puerto asignado por Render, si no existe usa el puerto 5000 por defecto
    port = int(os.environ.get("PORT", 5000))
    # Ejecuta el servidor en 0.0.0.0 para que sea accesible desde cualquier dirección
    app.run(host="0.0.0.0", port=port)