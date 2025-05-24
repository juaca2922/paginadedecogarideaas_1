from flask import Flask, render_template, request
import os

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

@app.route('/publicar/exposicion')
def publicare_exposicion():
    return render_template('publicar/publicare_exposicion.html')

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


# Esto carga el desplegllabe de Para Proforma
@app.route('/caligv')
def caligv():
    return render_template('caligv.html')

# Función para obtener el siguiente número de proforma
def obtener_siguiente_numero_proforma():
    ruta_contador = "contador.txt"
    
    # Si el archivo no existe, creamos uno con 0
    if not os.path.exists(ruta_contador):
        with open(ruta_contador, 'w') as f:
            f.write('0')

    # Leemos el número actual
    with open(ruta_contador, 'r') as f:
        numero_actual = int(f.read().strip())

    # Calculamos el siguiente número
    siguiente_numero = numero_actual + 1

    # Guardamos el siguiente número para futuras proformas
    with open(ruta_contador, 'w') as f:
        f.write(str(siguiente_numero))

    return siguiente_numero

@app.route('/proforma', methods=['GET', 'POST'])
def proforma():
    if request.method == 'POST':
        # Recibimos los datos del formulario
        cliente_nombre = request.form['clienteNombre']
        direccion_cliente = request.form['direccionCliente']
        ruc_cliente = request.form['rucCliente']
        producto = request.form['producto']
        cantidad = int(request.form['cantidad'])
        precio = float(request.form['precio'])
        comentarios = request.form['comentarios']
        fecha = request.form['fecha']

        # Calculamos el total
        total = cantidad * precio

        # Obtener el siguiente número de proforma
        numero_proforma = obtener_siguiente_numero_proforma()

        # Creación de lista de productos (puedes mejorar esto para recibir más productos)
        productos = [{
            'descripcion': producto,
            'cantidad': cantidad,
            'precio': precio,
            'subtotal': total
        }]

        # Pasamos los datos a la plantilla
        return render_template('proforma.html', 
                               cliente_nombre=cliente_nombre,
                               direccion_cliente=direccion_cliente,
                               ruc_cliente=ruc_cliente,
                               producto=producto,
                               cantidad=cantidad,
                               precio=precio,
                               total=total,
                               comentarios=comentarios,
                               fecha=fecha,
                               numero_proforma=numero_proforma,
                               productos=productos)
    
    # Si es un GET, simplemente renderizamos la plantilla vacía
    return render_template('proforma.html', 
                           cliente_nombre=None,
                           direccion_cliente=None,
                           ruc_cliente=None,
                           producto=None,
                           cantidad=None,
                           precio=None,
                           total=None,
                           comentarios=None,
                           fecha=None,
                           numero_proforma=None,
                           productos=None)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)