# run.py
from myproject import app
from flask import request, jsonify
from pymongo import MongoClient


# region Insertar/Actualizar/Borrar autor
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

if __name__ == '__main__':
    app.run(debug=True)