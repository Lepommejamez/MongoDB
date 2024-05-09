# run.py
from myproject import app
from flask import request, jsonify, make_response
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['Biblioteca']

#DONE!!!!
# region Insertar/Actualizar/Borrar Autor
@app.route('/insert_author', methods=['POST'])
def insert_author():
    data = request.get_json()
    nombre = data['name']
    autores = db['Autor']

    if nombre == '':
        return make_response(jsonify({'success': False}), 500)  # 401 is for Unauthorized

    if autores.find_one({"name": nombre}):
        print('El autor ya existe')
        response = make_response(jsonify({'success': False}), 400)  # 400 is for Bad Request
    else:
        autores.insert_one({"name": nombre, "libros": []})
        response = make_response(jsonify({'success': True}), 200)  # 200 is for OK
    return response

@app.route('/update_author', methods=['POST'])
def update_author():
    data = request.get_json()
    oldName = data['oldName']
    newName = data['newName']

    
    if oldName == '' or newName == '':
        return make_response(jsonify({'success': False}), 500)

    autores = db['Autor']
    libros = db['Libro']

    autor = autores.find_one({"name": oldName})
    if autor:
        libros_autor = libros.find({"autores": oldName})
        for libro in libros_autor:
            libros.update_one({"_id": libro["_id"]}, {"$pull": {"autores": oldName}})
            libros.update_one({"_id": libro["_id"]}, {"$push": {"autores": newName}})
        autores.update_one({"name": oldName}, {"$set": {"name": newName}})
        response = make_response(jsonify({'success': True}), 200)
    else:
        response = make_response(jsonify({'success': False}), 400)
    return response

@app.route('/delete_author', methods=['POST'])
def delete_author():
    print("a")
    data = request.get_json()
    nombre = data['name']

    if nombre == '':
        return make_response(jsonify({'success': False}), 500)  # 401 is for Unauthorized

    autores = db['Autor']
    libros = db['Libro']

    autor = autores.find_one({"name": nombre})
    if autor:
        libros_autor = libros.find({"autores": nombre})
        for libro in libros_autor:
            libros.update_one({"_id": libro["_id"]}, {"$pull": {"autores": nombre}})
            libros.update_one({"_id": libro["_id"]}, {"$push": {"autores": "Autor desconocido"}})
        autores.delete_one({"name": nombre})
        response = make_response(jsonify({'success': True}), 200)
    else:
        response = make_response(jsonify({'success': False}), 400)
    return response
# endregion

#DONE!!!!
# region Insertar/Actualizar/Borrar Libro
@app.route('/insert_book', methods=['POST'])
def insert_book():
    data = request.get_json()
    autores = db['Autor']
    libros = db['Libro']

    nombre = data['name']
    author = data['author']
    code = data['code']

    if nombre == '' or author == '' or code == '':
        return make_response(jsonify({'success': False}), 500)

    #Modificar los libros en la tabla autores
    if autores.find({"name": author}):
        autores.find_one_and_update({"name": author}, {"$push": {"libros": nombre}})
    else:
        autores.insert_one({"name": author, "libros": []})
        autores.find_one_and_update({"name": author}, {"$push": {"libros": nombre}})

    #Modificar en la tabla
    if libros.find_one({"name": nombre}):
        print('El Libro ya existe')
        if author in libros.find_one({"name": nombre})['autores']:
            return make_response(jsonify({'success': False}), 401)
        else:
            if autores.find_one({"name": author}):
                libros.find_one_and_update({"name": nombre}, {"$push": {"autores": author}})
                return make_response(jsonify({'success': True}), 200)
            else:
                return make_response(jsonify({'success': False}), 400)
    else:
        libros.insert_one({"name": nombre, "autores": [author], "ISBN": code})
        return make_response(jsonify({'success': True}), 200)

@app.route('/update_book', methods=['POST'])
def update_book():
    data = request.get_json()
    oldName = data['oldName']
    newName = data['newName'] 

    if oldName == '' or newName == '':
        return make_response(jsonify({'success': False}), 500)
    
    autores = db['Autor']
    libros = db['Libro']

    lib = libros.find_one({"name": oldName})
    if lib:
        autor_libro = autores.find({"libros": oldName})
        for autor in autor_libro:
            autores.update_one({"_id": autor["_id"]}, {"$pull": {"libros": oldName}})
            autores.update_one({"_id": autor["_id"]}, {"$push": {"libros": newName}})
        libros.update_one({"name": oldName}, {"$set": {"name": newName}})
        return make_response(jsonify({'success': True}), 200)
    else:
        return make_response(jsonify({'success': False}), 400)

@app.route('/delete_book', methods=['POST'])
def delete_book():
    data = request.get_json()
    nombre = data['name']

    if nombre == '':
        return make_response(jsonify({'success': False}), 500)

    autores = db['Autor']
    libros = db['Libro']

    libro = libros.find_one({"name": nombre})
    if libro:
        autores_libro = autores.find({"libros": nombre})
        for autor in autores_libro:
            autores.update_one({"_id": autor["_id"]}, {"$pull": {"libros": nombre}})
        libros.delete_one({"name": nombre})
        return make_response(jsonify({'success': True}), 200)
    else:
        return make_response(jsonify({'success': False}), 400)
# endregion

#DONE!!!!
# region Insertar/Actualizar/Borrar Edicion
@app.route('/insert_edicion', methods=['POST'])
def insert_edicion():
    data = request.get_json()
    codigo = data['code']
    año = data['año']
    lengua = data['language']

    if codigo == '' or año == '' or lengua == '':
        return make_response(jsonify({'success': False}), 500)

    ediciones = db['Edicion']

    if ediciones.find_one({"ISBN": codigo}):
        print('La edicion ya existe')
        return make_response(jsonify({'success': False}), 400)
    else:
        ediciones.insert_one({"ISBN": codigo, "año": año, "Idioma": lengua})
        return make_response(jsonify({'success': True}), 200)

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

@app.route('/update_edicion', methods=['POST'])
def update_edicion():
    data = request.get_json()
    old = data['prevCode']
    codigo = data['code']
    año = data['año']
    lengua = data['language']

    if old == '' or codigo == '' or año == '' or lengua == '':
        return make_response(jsonify({'success': False}), 500)

    ediciones = db['Edicion']
    libros = db['Libro']

    ed = ediciones.find_one({"ISBN": old})
    if ed:
        libros_cod = libros.find({"ISBN": old})
        for libro in libros_cod:
            libros.update_one({"_id": libro["_id"]}, {"$set": {"ISBN": codigo}})
        ediciones.update_one({"ISBN": old}, {"$set": {"ISBN": codigo, "año": año, "Idioma": lengua}})
        return make_response(jsonify({'success': True}), 200)
    else:
        return make_response(jsonify({'success': False}), 400)

@app.route('/delete_edicion', methods=['POST'])
def delete_edicion():
    data = request.get_json()
    nombre = data['name']

    if nombre == '':
        return make_response(jsonify({'success': False}), 500)

    ediciones = db['Edicion']

    edicion = ediciones.find_one({"ISBN": nombre})
    if edicion:
        ediciones.delete_one({"ISBN": nombre})
        return make_response(jsonify({'success': True}), 200)
    else:
        return make_response(jsonify({'success': False}), 400)
# endregion

#DONE!!!!
# region Insertar/Actualizar/Borrar Copia
@app.route('/insert_copia', methods=['POST'])
def insert_copia():
    data = request.get_json()
    
    copias = db['Copia']
    numero = data['numero']
    codigo = data['codigo']

    if numero == '' or codigo == '':
        return make_response(jsonify({'success': False}), 500)

    ediciones = db['Edicion']
    
    if not ediciones.find_one({'ISBN': codigo}):
        print('La edicion no existe')
        return make_response(jsonify({'success': False}), 401)
    
    if copias.find_one({'numero': numero}):
        print('La copia ya existe')
        return make_response(jsonify({'success': False}), 400)  # 400 is for Bad Request
    else:
        copias.insert_one({'numero': numero, 'ISBN': codigo})
        return make_response(jsonify({'success': True}), 200)  # 200 is for OK

@app.route('/delete_copia', methods=['POST'])
def delete_copia():
    data = request.get_json()
    num = data['num']

    if num == '':
        return make_response(jsonify({'success': False}), 500)

    copias = db['Copia']

    copia = copias.find_one({"numero": num})
    if copia:
        copias.delete_one({"numero": num})
        return make_response(jsonify({'success': True}), 200)
    else:
        return make_response(jsonify({'success': False}), 401)
# endregion

#DONE!!!!
# region Insertar/Actualizar/Borrar Usuario
@app.route('/insert_user', methods=['POST'])
def insert_user():
    data = request.get_json()
    nombre = data['name']

    if nombre == '':
        return make_response(jsonify({'success': False}), 500)
    
    rut = data['id']

    usuarios = db['Usuario']
    if usuarios.find_one({"rut": rut}):
        return make_response(jsonify({'success': False}), 400)  # 400 is for Bad Request
    else:
        usuarios.insert_one({"rut": rut, "name": nombre})
        return make_response(jsonify({'success': True}), 200)  # 200 is for OK

@app.route('/get_user', methods=['POST'])
def get_user():
    data = request.get_json()
    rut = data['text']
    usuarios = db['Usuario']
    print("aaaaa")

    ans = usuarios.find_one({"rut": rut})
    if ans:
        return jsonify({'field1': ans['rut'], 'field2': ans['name']})
    else:
        return jsonify({'field1': '', 'field2': ''})

@app.route('/update_user', methods=['POST'])
def update_usuario():
    data = request.get_json()
    prevRut = data['oldRUT']
    rut = data['newRUT']
    name = data['newName']

    usuario = db['Usuario']
    prestamo = db['Prestamo']

    if prevRut == '' or rut == '' or name == '':
        return make_response(jsonify({'success': False}), 500)

    if usuario.find_one({"rut": rut}):  # Si ya existe un usuario con el nuevo RUT
        return make_response(jsonify({'success': False}), 402)

    

    us = usuario.find_one({"rut": prevRut})
    if us:
        prestamos_usuario = prestamo.find({"rut": prevRut})
        for prest in prestamos_usuario:
            prestamo.update_one({"_id": prest["_id"]}, {"$set": {"rut": rut}})
        usuario.update_one({"rut": prevRut}, {"$set": {"rut": rut, "name": name}})
        return make_response(jsonify({'success': True}), 200)
    else:
        return make_response(jsonify({'success': False}), 400)

@app.route('/delete_user', methods=['POST'])
def delete_user():
    data = request.get_json()
    rut = data['rut']

    if rut == '':
        return make_response(jsonify({'success': False}), 500)

    usuario = db['Usuario']
    prestamo = db['Prestamo']
    
    usuarios = db['Usuario'] #

    us = usuario.find_one({"rut": rut})
    if us:
        prestamos_usuario = prestamo.find({"rut": rut})
        for prest in prestamos_usuario:
            prestamo.delete_one({"rut": rut})
        usuario.delete_one({"rut": rut})
        return make_response(jsonify({'success': True}), 200)  # 200 is for OK
    else:
        print('No se encontró ningún usuario con el ID proporcionado')
        return make_response(jsonify({'success': False}), 400)  # 400 is for Bad Request
# endregion

#DONE!!!!
# region Insertar/Actualizar/Borrar Prestamo
@app.route('/insert_prestamo', methods=['POST'])
def insert_prestamo():
    data = request.get_json()

    fechaInicio = data['fechaPrestamo']
    fechaFin = data['fechaDev']
    rut = data['rut']
    numCopia = data['copia']

    if fechaInicio == '' or fechaFin == '' or rut == '' or numCopia == '':
        return make_response(jsonify({'success': False}), 500)

    prestamos = db['Prestamo']
    usuarios = db['Usuario']
    copias = db['Copia']

    usuario = usuarios.find_one({"rut": rut})
    copia = copias.find_one({"numero": numCopia})

    if prestamos.find_one({"copia": numCopia}):
        disponible = False
    else:
        disponible = True

    if usuario and copia and disponible:
        prestamos.insert_one({"fechaPrestamo": fechaInicio, "fechaDev": fechaFin, "rut": rut, "copia": numCopia})
        return make_response(jsonify({'success': True}), 200)  # 200 is for OK
    else:
        if not usuario:
            return make_response(jsonify({'success': False}), 400)  # 400 is for Bad Request
        if not copia:
            return make_response(jsonify({'success': False}), 401)  # 401 is for Unauthorized
        if not disponible:
            return make_response(jsonify({'success': False}), 402) # 402 is for Payment Required
    return make_response(jsonify({'success': True}), 200)  # 200 is for OK

@app.route('/get_prestamo', methods=['POST'])
def get_prestamo():
    data = request.get_json()
    rut = data['text']

    prestamos = db['Prestamo']

    pres = prestamos.find_one({"copia": rut})
    if pres:
        return jsonify({'field1': pres['fechaPrestamo'], 'field2': pres['fechaDev']})
    else:
        return jsonify({'field1': '', 'field2': ''})

@app.route('/update_prestamo', methods=['POST'])
def update_prestamo():
    data = request.get_json()
    
    numCopia = data['copia']
    fecha1 = data['date1']
    fecha2 = data['date2']

    if numCopia == '' or fecha1 == '' or fecha2 == '':
        return make_response(jsonify({'success': False}), 500)

    prestamos = db['Prestamo']

    prestamo = prestamos.find_one({"copia": numCopia})

    if prestamo:
        prestamos.update_one({"copia": numCopia}, {"$set": {"fechaPrestamo": fecha1, "fechaDev": fecha2}})
        print('Prestamo actualizado con éxito')
        return make_response(jsonify({'success': True}), 200)  # 200 is for OK
    else:
        print('Prestamo no encontrado')
        return make_response(jsonify({'success': False}), 400)

@app.route('/delete_prestamo', methods=['POST'])
def delete_prestamo():
    data = request.get_json()
    id = data['id']

    if id == '':
        return make_response(jsonify({'success': False}), 500)

    prestamos = db['Prestamo']
    copias = db['Copia']

    prestamo = prestamos.find_one({"copia": id})

    if prestamo:
        prestamos.delete_one({"copia": id})
        return make_response(jsonify({'success': True}), 200)  # 200 is for OK
    else:
        return make_response(jsonify({'success': False}), 400)
# endregion

if __name__ == '__main__':
    app.run(debug=True)
