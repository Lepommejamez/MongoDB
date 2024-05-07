# run.py
from myproject import app
from flask import request, jsonify
#from pymongo import MongoClient


# region Insertar/Actualizar/Borrar Autor
@app.route('/insert_author', methods=['POST'])
def insert_author():
    data = request.get_json()
    nombre = data['name']

    #Aquí se insertaría el autor en la base de datos
    print('El nombre del autor ingresado es: ' + nombre)
    return jsonify({'success': True})

@app.route('/update_author', methods=['POST'])
def update_author():
    data = request.get_json()
    oldName = data['oldName']
    newName = data['newName']
    
    #Aquí se actualizaría el autor en la base de datos
    print('El nombre anterior del autor es: ' + oldName)
    print('El nuevo nombre del autor es: ' + newName)
    return jsonify({'success': True})

@app.route('/delete_author', methods=['POST'])
def delete_author():
    data = request.get_json()
    nombre = data['name']

    #Aquí se borraría el autor de la base de datos
    print('Se va a borrar el autor con el nombre: ' + nombre)
    return jsonify({'success': True})
# endregion

# region Insertar/Actualizar/Borrar Libro
@app.route('/insert_book', methods=['POST'])
def insert_book():
    data = request.get_json()
    nombre = data['name']

    #Aquí se insertaría el libro en la base de datos
    print('El nombre del libro ingresado es: ' + nombre)
    return jsonify({'success': True})

@app.route('/update_book', methods=['POST'])
def update_book():
    data = request.get_json()
    oldName = data['oldName']
    newName = data['newName']
    
    #Aquí se actualizaría el libro en la base de datos
    print('El nombre anterior del autor es: ' + oldName)
    print('El nuevo nombre del autor es: ' + newName)
    return jsonify({'success': True})

@app.route('/delete_book', methods=['POST'])
def delete_book():
    data = request.get_json()
    nombre = data['name']

    #Aquí se borraría el autor de la base de datos
    print('Se va a borrar el libro con el nombre: ' + nombre)
    return jsonify({'success': True})
# endregion

# region Insertar/Actualizar/Borrar Edicion
@app.route('/insert_edicion', methods=['POST'])
def insert_edicion():
    data = request.get_json()
    codigo = data['code']
    año = data['año']
    lengua = data['language']

    #Aquí se insertaría el libro en la base de datos
    print('El codigo de la Edicion ingresado es: ' + codigo)
    print('El año de la Edicion ingresado es: ' + año)
    print('La lengua de la Edicion ingresado es: ' + lengua)
    return jsonify({'success': True})

@app.route('/update_edicion', methods=['POST'])
def update_edicion():
    data = request.get_json()
    oldName = data['oldName']
    newName = data['newName']
    
    #Aquí se actualizaría el libro en la base de datos
    print('El nombre anterior del autor es: ' + oldName)
    print('El nuevo nombre del autor es: ' + newName)
    return jsonify({'success': True})

@app.route('/delete_edicion', methods=['POST'])
def delete_edicion():
    data = request.get_json()
    nombre = data['name']

    #Aquí se borraría el autor de la base de datos
    print('Se va a borrar el libro con el nombre: ' + nombre)
    return jsonify({'success': True})

# endregion

# region Insertar/Actualizar/Borrar Usuario


# endregion

# region Insertar/Actualizar/Borrar Copia


# endregion

# region Insertar/Actualizar/Borrar Prestamo


# endregion
if __name__ == '__main__':
    app.run(debug=True)