import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")  # Esto carga la página principal


 # Esto carga el desplegllabe de  repuetas rapidas

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

 # Esto carga el desplegllabe de Para Publicar

@app.route('/publicar/para_toda_ocasion')
def publicare_para_toda_ocasion():
    return render_template('publicar/publicare_para_toda_ocasion.html')

@app.route('/publicar/bautizo')
def publicare_Bautizo():
    return render_template('publicar/publicare_bautizo.html')

@app.route('/publicar/baby_shower')
def publicare_Baby_Shower():
    return render_template('publicar/publicare_baby_shower.html')

@app.route('/publicar/comunion')
def publicare_Comunión():
    return render_template('publicar/publicare_comunion.html')

@app.route('/publicar/cumpleanos')
def publicare_Cumpleaños():
    return render_template('publicar/publicare_cumpleanos.html')

@app.route('/publicar/dia_de_la_madre')
def publicare_Día_de_la_Madre():
    return render_template('publicar/publicare_dia_de_la_madre.html')

@app.route('/publicar/dia_del_trabajador')
def publicare_Día_del_Trabajador():
    return render_template('publicar/publicare_dia_del_trabajador.html')

@app.route('/publicar/dia_de_la_mujer')
def publicare_Día_de_la_Mujer():
    return render_template('publicar/publicare_dia_de_la_mujer.html')

@app.route('/publicar/quince_anos')
def publicare_Quince_Años():
    return render_template('publicar/publicare_quince_anos.html')

@app.route('/publicar/corporativo')
def publicare_Corporativo():
    return render_template('publicar/publicare_corporativo.html')

@app.route('/publicar/matrimonio')
def publicare_Matrimonio():
    return render_template('publicar/publicare_matrimonio.html')

@app.route('/publicar/misa_de_honras')
def publicare_Misa_de_Honras():
    return render_template('publicar/publicare_misa_de_honras.html')

@app.route('/publicar/san_valentin')
def publicare_San_Valentín():
    return render_template('publicar/publicare_san_valentin.html')

@app.route('/publicar/navidad')
def publicare_Navidad():
    return render_template('publicar/publicare_navidad.html')





if __name__ == "__main__":
    # Obtiene el puerto asignado por Render, si no existe usa el puerto 5000 por defecto
    port = int(os.environ.get("PORT", 5000))
    # Ejecuta el servidor en 0.0.0.0 para que sea accesible desde cualquier dirección
    app.run(host="0.0.0.0", port=port)