from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['Biblioteca']
autores = db['Autor']
libros = db['Libro']
ediciones = db['Edicion']
copias = db['Copia']



