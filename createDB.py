from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017/')
db = client['Biblioteca']

#Crear colecciones
autores = db['Autor']
libros = db['Libro']
ediciones = db['Edicion']
copias = db['Copia']
usuarios = db['Usuario']
prestamos = db['Prestamo']

# Insertar autores
autores.insert_one({"name": "Gabriel García Márquez", "libros": ["Cien años de soledad", "El amor en los tiempos del cólera", "Crónica de una muerte anunciada"]})
autores.insert_one({"name": "Jane Austen", "libros": ["Orgullo y prejuicio", "Sentido y sensibilidad", "Emma"]})
autores.insert_one({"name": "J.K. Rowling", "libros": ["Harry Potter y la piedra filosofal", "Harry Potter y la cámara secreta", "Harry Potter y el prisionero de Azkaban"]})
autores.insert_one({"name": "Haruki Murakami", "libros": ["Tokio Blues (Norwegian Wood)", "1Q84", "Kafka en la orilla"]})
autores.insert_one({"name": "Stephen King", "libros": ["It", "El resplandor", "Cementerio de animales"]})
autores.insert_one({"name": "Virginia Woolf", "libros": ["La señora Dalloway", "Al faro", "Orlando"]})
autores.insert_one({"name": "J.R.R. Tolkien", "libros": ["El señor de los anillos", "El hobbit", "El Silmarillion"]})
autores.insert_one({"name": "George Orwell", "libros": ["1984", "Rebelión en la granja", "Homenaje a Cataluña"]})
autores.insert_one({"name": "F. Scott Fitzgerald", "libros": ["El gran Gatsby", "Suave es la noche", "El curioso caso de Benjamin Button"]})
autores.insert_one({"name": "Agatha Christie", "libros": ["Asesinato en el Orient Express", "Diez negritos", "Muerte en el Nilo"]})
autores.insert_one({"name": "Ernest Hemingway", "libros": ["El viejo y el mar", "Por quién doblan las campanas", "Fiesta"]})

# Insertar libros
libros.insert_many([
        {
            "name": "Cien años de soledad",
            "autores": ["Gabriel García Márquez"],
            "ISBN": "0001-001"
        },
        {
            "name": "El amor en los tiempos del cólera",
            "autores": ["Gabriel García Márquez"],
            "ISBN": "0001-002"
        },
        {
            "name": "Crónica de una muerte anunciada",
            "autores": ["Gabriel García Márquez"],
            "ISBN": "0001-003"
        },
        {
            "name": "Orgullo y prejuicio",
            "autores": ["Jane Austen"],
            "ISBN": "0002-001"
        },
        {
            "name": "Sentido y sensibilidad",
            "autores": ["Jane Austen"],
            "ISBN": "0002-002"
        },
        {
            "name": "Emma",
            "autores": ["Jane Austen"],
            "ISBN": "0002-003"
        },
        {
            "name": "Harry Potter y la piedra filosofal",
            "autores": ["J.K. Rowling"],
            "ISBN": "0003-001"
        },
        {
            "name": "Harry Potter y la cámara secreta",
            "autores": ["J.K. Rowling"],
            "ISBN": "0003-002"
        },
        {
            "name": "Harry Potter y el prisionero de Azkaban",
            "autores": ["J.K. Rowling"],
            "ISBN": "0003-003"
        },
        {
            "name": "Tokio Blues (Norwegian Wood)",
            "autores": ["Haruki Murakami"],
            "ISBN": "0004-001"
        },
        {
            "name": "1Q84",
            "autores": ["Haruki Murakami"],
            "ISBN": "0004-002"
        },
        {
            "name": "Kafka en la orilla",
            "autores": ["Haruki Murakami"],
            "ISBN": "0004-003"
        },
        {
            "name": "It",
            "autores": ["Stephen King"],
            "ISBN": "0005-001"
        },
        {
            "name": "El resplandor",
            "autores": ["Stephen King"],
            "ISBN": "0005-002"
        },
        {
            "name": "Cementerio de animales",
            "autores": ["Stephen King"],
            "ISBN": "0005-003"
        },
        {
            "name": "La señora Dalloway",
            "autores": ["Virginia Woolf"],
            "ISBN": "0006-001"
        },
        {
            "name": "Al faro",
            "autores": ["Virginia Woolf"],
            "ISBN": "0006-002"
        },
        {
            "name": "Orlando",
            "autores": ["Virginia Woolf"],
            "ISBN": "0006-003"
        },
        {
            "name": "El señor de los anillos",
            "autores": ["J.R.R. Tolkien"],
            "ISBN": "0007-001"
        },
        {
            "name": "El hobbit",
            "autores": ["J.R.R. Tolkien"],
            "ISBN": "0007-002"
        },
        {
            "name": "El Silmarillion",
            "autores": ["J.R.R. Tolkien"],
            "ISBN": "0007-003"
        },
        {
            "name": "1984",
            "autores": ["George Orwell"],
            "ISBN": "0008-001"
        },
        {
            "name": "Rebelión en la granja",
            "autores": ["George Orwell"],
            "ISBN": "0008-002"
        },
        {
            "name": "Homenaje a Cataluña",
            "autores": ["George Orwell"],
            "ISBN": "0008-003"
        },
        {
            "name": "El gran Gatsby",
            "autores": ["F. Scott Fitzgerald"],
            "ISBN": "0009-001"
        },
        {
            "name": "Suave es la noche",
            "autores": ["F. Scott Fitzgerald"],
            "ISBN": "0009-002"
        },
        {
            "name": "El curioso caso de Benjamin Button",
            "autores": ["F. Scott Fitzgerald"],
            "ISBN": "0009-003"
        },
        {
            "name": "Asesinato en el Orient Express",
            "autores": ["Agatha Christie"],
            "ISBN": "010-001"
        },
        {
            "name": "Diez negritos",
            "autores": ["Agatha Christie"],
            "ISBN": "010-002"
        },
        {
            "name": "Muerte en el Nilo",
            "autores": ["Agatha Christie"],
            "ISBN": "010-003"
        },
        {
            "name": "El viejo y el mar",
            "autores": ["Ernest Hemingway"],
            "ISBN": "011-001"
        },
        {
            "name": "Por quién doblan las campanas",
            "autores": ["Ernest Hemingway"],
            "ISBN": "011-002"
        },
        {
            "name": "Fiesta",
            "autores": ["Ernest Hemingway"],
            "ISBN": "011-003"
        }
    ]
)

# Insertar ediciones
ediciones.insert_many([
        {
            "ISBN": "0001-001",
            "año": "1967",
            "Idioma": "Español"
        },
        {
            "ISBN": "0001-002",
            "año": "1985",
            "Idioma": "Español"
        },
        {
            "ISBN": "0001-003",
            "año": "1981",
            "Idioma": "Español"
        },
        {
            "ISBN": "0001-004",
            "año": "1967",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0001-005",
            "año": "1985",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0001-006",
            "año": "1981",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0002-001",
            "año": "1813",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0002-002",
            "año": "1811",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0002-003",
            "año": "1815",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0003-001",
            "año": "1997",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0003-002",
            "año": "1998",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0003-003",
            "año": "1999",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0004-001",
            "año": "1987",
            "Idioma": "Japones"
        },
        {
            "ISBN": "0004-002",
            "año": "2009",
            "Idioma": "Japones"
        },
        {
            "ISBN": "0004-003",
            "año": "2002",
            "Idioma": "Japones"
        },
        {
            "ISBN": "0005-001",
            "año": "1986",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0005-002",
            "año": "1977",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0005-003",
            "año": "1983",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0006-001",
            "año": "1925",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0006-002",
            "año": "1927",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0006-003",
            "año": "1928",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0007-001",
            "año": "1954",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0007-002",
            "año": "1937",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0007-003",
            "año": "1977",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0008-001",
            "año": "1949",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0008-002",
            "año": "1945",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0008-003",
            "año": "1938",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0009-001",
            "año": "1925",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0009-002",
            "año": "1934",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "0009-003",
            "año": "1922",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "010-001",
            "año": "1934",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "010-002",
            "año": "1939",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "010-003",
            "año": "1937",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "011-001",
            "año": "1952",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "011-002",
            "año": "1940",
            "Idioma": "Ingles"
        },
        {
            "ISBN": "011-003",
            "año": "1926",
            "Idioma": "Ingles"
        }
    ]
)

# Insertar copias
j=0
for i in ediciones.find():
    for _ in range(1, 6):
        numero = str(j).zfill(4)
        copias.insert_one({
            'numero': str(numero),
            'ISBN': i['ISBN']
        }) 
        j+=1

usuarios.insert_many([
    {
        "rut": "98414141",
        "name": "Daniel"
    },
    {
        "rut": "98414142",
        "name": "Felipe"
    },
    {
        "rut": "98414143",
        "name": "Juan"
    },
    {
        "rut": "98414144",
        "name": "Cristian"
    },
    {
        "rut": "98414145",
        "name": "Javier"
    },
    {
        "rut": "98414146",
        "name": "Jorge"
    },
    {
        "rut": "98414147",
        "name": "Mauricio"
    },
    {
        "rut": "98414148",
        "name": "Matias"
    },
    {
        "rut": "98414149",
        "name": "Fernando"
    },
    {
        "rut": "98414150",
        "name": "Diego"
    }
])

prestamos.insert_many([

    {
        "fechaPrestamo": "2024-05-01",
        "fechaDev": "2024-05-01",
        "rut": "98414141",
        "copia": "0000"
    },
    {
         "fechaPrestamo": "2024-05-21",
        "fechaDev": "2024-06-01",
        "rut": "98414142",
        "copia": "0013"
    },
    {
        "fechaPrestamo": "2024-05-01",
        "fechaDev": "2024-05-07",
        "rut": "98414143",
        "copia": "0009"
    }
])