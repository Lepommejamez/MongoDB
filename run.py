# run.py
from myproject import app
from flask import request, jsonify, make_response
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['Biblioteca']

#DONE
# region Insertar/Actualizar/Borrar Autor
@app.route('/insert_author', methods=['POST'])
def insert_author():
    data = request.get_json()
    nombre = data['name']
    autores = db['Autor']
    if autores.find_one({"name": nombre}):
        print('El autor ya existe')
    else:
        autores.insert_one({"name": nombre, "libros": []})
    return jsonify({'success': True})

@app.route('/update_author', methods=['POST'])
def update_author():
    data = request.get_json()
    oldName = data['oldName']
    newName = data['newName']
    autores = db['Autor']
    libros = db['Libro']

    autor = autores.find_one({"name": oldName})
    if autor:
        libros_autor = libros.find({"Autores": oldName})
        for libro in libros_autor:
            libros.update_one({"_id": libro["_id"]}, {"$pull": {"Autores": oldName}})
            libros.update_one({"_id": libro["_id"]}, {"$push": {"Autores": newName}})
        autores.update_one({"name": oldName}, {"$set": {"name": newName}})
    return jsonify({'success': True})

@app.route('/delete_author', methods=['POST'])
def delete_author():
    data = request.get_json()
    nombre = data['name']
    autores = db['Autor']
    libros = db['Libro']

    autor = autores.find_one({"name": nombre})
    if autor:
        libros_autor = libros.find({"Autores": nombre})
        for libro in libros_autor:
            libros.update_one({"_id": libro["_id"]}, {"$pull": {"Autores": nombre}})
            libros.update_one({"_id": libro["_id"]}, {"$push": {"Autores": "Autor desconocido"}})
        autores.delete_one({"name": nombre})
   
    #Aquí se borraría el autor de la base de datos
    print('Se va a borrar el autor con el nombre: ' + nombre)
    return jsonify({'success': True})
# endregion

#DONE
# region Insertar/Actualizar/Borrar Libro
@app.route('/insert_book', methods=['POST'])
def insert_book():
    data = request.get_json()
    autores = db['Autor']
    libros = db['Libro']

    nombre = data['name']
    author = data['author']

    #Modificar los libros en la tabla autores
    if len(list(autores.find({"name": author}))) > 0:
        autores.find_one_and_update({"name": author}, {"$push": {"libros": nombre}})
    else:
        autores.insert_one({"name": author, "libros": []})
        autores.find_one_and_update({"name": author}, {"$push": {"libros": nombre}})

    #Modificar en la tabla
    if len(list(libros.find({"name": nombre}))) > 0:
        print('El Libro ya existe')
        libros.find_one_and_update({"name": nombre}, {"$push": {"Autores": author}, "ISBN": data['code']})
    else:
        libros.insert_one({"name": nombre, "Autores": [author], "ISBN": data['code']})


    #print('El nombre del libro ingresado es: ' + nombre + 'y lo escribio: ' + author)
    return jsonify({'success': True})

@app.route('/update_book', methods=['POST'])
def update_book():
    data = request.get_json()
    oldName = data['oldName']
    newName = data['newName'] 
    autores = db['Autor']
    libros = db['Libro']

    lib = libros.find_one({"name": oldName})
    if lib:
        autor_libro = autores.find({"libros": oldName})
        for autor in autor_libro:
            autores.update_one({"_id": autor["_id"]}, {"$pull": {"libros": oldName}})
            autores.update_one({"_id": autor["_id"]}, {"$push": {"libros": newName}})
        libros.update_one({"name": oldName}, {"$set": {"name": newName}})

    #Aquí se actualizaría el libro en la base de datos
    print('El nombre anterior del autor es: ' + oldName)
    print('El nuevo nombre del autor es: ' + newName)
    return jsonify({'success': True})

@app.route('/delete_book', methods=['POST'])
def delete_book():
    data = request.get_json()
    nombre = data['name']

    autores = db['Autor']
    libros = db['Libro']

    libro = libros.find_one({"name": nombre})
    if libro:
        autores_libro = autores.find({"libros": nombre})
        for autor in autores_libro:
            autores.update_one({"_id": autor["_id"]}, {"$pull": {"libros": nombre}})
        libros.delete_one({"name": nombre})

    #Aquí se borraría el autor de la base de datos
    print('Se va a borrar el libro con el nombre: ' + nombre)
    return jsonify({'success': True})
# endregion

#TODO: Probar que se cambien los ISBN de los libros
# region Insertar/Actualizar/Borrar Edicion
#DONE
@app.route('/insert_edicion', methods=['POST'])
def insert_edicion():
    data = request.get_json()
    codigo = data['code']
    año = data['año']
    lengua = data['language']
    ediciones = db['Edicion']

    if ediciones.find_one({"ISBN": codigo}):
        print('La edicion ya existe')
    else:
        ediciones.insert_one({"ISBN": codigo, "año": año, "Idioma": lengua})

    #Aquí se insertaría el libro en la base de datos
    #print('El codigo de la Edicion ingresado es: ' + codigo)
    #print('El año de la Edicion ingresado es: ' + año)
    #print('La lengua de la Edicion ingresado es: ' + lengua)
    return jsonify({'success': True})

#DONE
@app.route('/get_edicion', methods=['POST'])
def get_edicion():
    data = request.get_json()
    received_text = data['text']
    ediciones = db['Edicion']

    ans = ediciones.find_one({"ISBN": received_text})
    if ans:
        return jsonify({'field1': ans['ISBN'], 'field2': ans['año'], 'field3': ans['Idioma']})
    else:
        return jsonify({'field1': '', 'field2': '', 'field3': ''})
    
    print("Los resultados del query son: " + result1 + ", " + result2 + ", " + result3)

#TODO: Probar que se cambien los ISBN de los libros
@app.route('/update_edicion', methods=['POST'])
def update_edicion():
    data = request.get_json()
    old = data['prevCode']
    codigo = data['code']
    año = data['año']
    lengua = data['language']
    ediciones = db['Edicion']
    libros = db['Libro']

    ed = ediciones.find_one({"ISBN": old})
    if ed:
        libros_cod = libros.find({"ISBN": old})
        for libro in libros_cod:
            libros.update_one({"_id": libro["_id"]}, {"$set": {"ISBN": old}})
        ediciones.update_one({"ISBN": old}, {"$set": {"ISBN": codigo, "año": año, "Idioma": lengua}})

    #Aquí se insertaría el libro en la base de datos
    #print('El codigo de la Edicion ingresado es: ' + codigo)
    #print('El año de la Edicion ingresado es: ' + año)
    #print('La lengua de la Edicion ingresado es: ' + lengua)
    return jsonify({'success': True})

#DONE
@app.route('/delete_edicion', methods=['POST'])
def delete_edicion():
    data = request.get_json()
    nombre = data['name']
    ediciones = db['Edicion']

    edicion = ediciones.find_one({"ISBN": nombre})
    if edicion:
        ediciones.delete_one({"ISBN": nombre})

    #Aquí se borraría el autor de la base de datos
    print('Se va a borrar la edicion con el codigo: ' + nombre)
    return jsonify({'success': True})
# endregion

#DONE   
# region Insertar/Actualizar/Borrar Copia
@app.route('/insert_copia', methods=['POST'])
def insert_copia():
    data = request.get_json()
    
    copias = db['Copia']
    numero = data['numero']
    codigo = data['codigo']
    ediciones = db['Edicion']
    
    if not ediciones.find_one({'ISBN': codigo}):
        print('La edicion no existe')
        return make_response(jsonify({'success': False}), 401)
    
    if copias.find_one({'numero': numero}):
        print('La copia ya existe')
        response = make_response(jsonify({'success': False}), 400)  # 400 is for Bad Request
    else:
        copias.insert_one({'numero': numero, 'ISBN': codigo})
        response = make_response(jsonify({'success': True}), 200)  # 200 is for OK
    return response

@app.route('/delete_copia', methods=['POST'])
def delete_copia():
    data = request.get_json()
    num = data['num']
    autores = db['Autor']
    libros = db['Libro']

    copias = db['Copia']

    copia = copias.find_one({"numero": num})
    if copia:
        copias.delete_one({"numero": num})
        return make_response(jsonify({'success': True}), 200)
    else:
        return make_response(jsonify({'success': False}), 401)
   
    #Aquí se borraría el autor de la base de datos
    #print('Se va a borrar el autor con el nombre: ' + nombre)
# endregion

#TODO
# region Insertar/Actualizar/Borrar Prestamo
@app.route('/insert_prestamo', methods=['POST'])
def insert_prestamo():
    data = request.get_json()
    fechaInicio = data['fechaPrestamo']
    fechaFin = data['fechaDev']

    #Aquí se insertaría el autor en la base de datos
    print('Fecha de inicio:', fechaInicio)
    print('Fecha de fin:', fechaFin)
    return {'success': True}

# endregion

#TODO
# region Insertar/Actualizar/Borrar Usuario
#TODO
@app.route('/insert_user', methods=['POST'])
def insert_user():
    data = request.get_json()
    nombre = data['name']
    id = data['id']

    #Aquí se insertaría el autor en la base de datos
    print('El nombre del usuario ingresado es: ' + nombre + ' con id: ' + id)
    return jsonify({'success': True})

#TODO !!!
@app.route('/get_user', methods=['POST'])
def get_user():
    data = request.get_json()
    rut = data['text']
    usuarios = db['Usuario']

    ans = usuarios.find_one({"RUT": rut})
    if ans:
        return jsonify({'field1': ans['RUT'], 'field2': ans['nombre']})
    else:
        return jsonify({'field1': '', 'field2': ''})
    
    result1, result2, result3 = 'Texto 1', 'Texto 2', 'Texto 3'
    print("Los resultados del query son: " + result1 + ", " + result2 + ", " + result3)
    return jsonify({'field1': result1, 'field2': result2, 'field3': result3})

#TODO !!!
@app.route('/update_usuario', methods=['POST'])
def update_usuario():
    data = request.get_json()
    old = data['prevCode']
    codigo = data['code']
    año = data['año']
    lengua = data['language']
    ediciones = db['Edicion']
    libros = db['Libro']

    ed = ediciones.find_one({"ISBN": old})
    if ed:
        libros_cod = libros.find({"ISBN": old})
        for libro in libros_cod:
            libros.update_one({"_id": libro["_id"]}, {"$set": {"ISBN": old}})
        ediciones.update_one({"ISBN": old}, {"$set": {"ISBN": codigo, "año": año, "Idioma": lengua}})

    #Aquí se insertaría el libro en la base de datos
    #print('El codigo de la Edicion ingresado es: ' + codigo)
    #print('El año de la Edicion ingresado es: ' + año)
    #print('La lengua de la Edicion ingresado es: ' + lengua)
    return jsonify({'success': True})

#TODO
@app.route('/delete_user', methods=['POST'])
def delete_user():
    data = request.get_json()
    nombre = data['name']

    #Aquí se borraría el autor de la base de datos
    print('Se va a borrar el usuario con el ID: ' + nombre)
    return jsonify({'success': True})

# endregion

if __name__ == '__main__':
    app.run(debug=True)
