import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")  # Esto carga la página principal

@app.route('/cotizar')
def cotizar():
    return render_template('cotizar.html')
if __name__ == "__main__":
    # Obtiene el puerto asignado por Render, si no existe usa el puerto 5000 por defecto
    port = int(os.environ.get("PORT", 5000))
    # Ejecuta el servidor en 0.0.0.0 para
    app.run(host="0.0.0.0", port=port)
