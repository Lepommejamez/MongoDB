// main.js
console.log("Hello from JavaScript!");
function success() 
{
    alert("Operacion Exitosa!");
}

function error(text) 
{
    alert("Ha ocurrido un error! :c " + text);
}



document.addEventListener('DOMContentLoaded', (event) => 
    {
        document.getElementById('dropdown1').addEventListener('change', function() 
        {
            var selectedOption = this.value;
            
            // Ocultar todos los campos
            document.getElementById('fieldsAutor').style.display = 'none';
            document.getElementById('fieldsLibro').style.display = 'none';
            document.getElementById('fieldsEdicion').style.display = 'none';
            document.getElementById('fieldsUsuario').style.display = 'none';
            document.getElementById('fieldsCopia').style.display = 'none';
            document.getElementById('fieldsPrestamo').style.display = 'none';
            
            // Mostrar los campos para la opción seleccionada
                  if (selectedOption === 'Autor') 
                {
                    document.getElementById('fieldsAutor').style.display = 'block';
                } 
            else if (selectedOption === 'Libro') 
                {
                    document.getElementById('fieldsLibro').style.display = 'block';
                } 
            else if (selectedOption === 'Edicion') 
                {
                    document.getElementById('fieldsEdicion').style.display = 'block';
                }
            else if (selectedOption === 'Usuario') 
                {
                    document.getElementById('fieldsUsuario').style.display = 'block';
                }
            else if (selectedOption === 'Copia') 
                {
                    document.getElementById('fieldsCopia').style.display = 'block';
                }
            else if (selectedOption === 'Prestamo') 
                {
                    document.getElementById('fieldsPrestamo').style.display = 'block';
                }
        });

        document.getElementById('dropdownAutores').addEventListener('change', function() 
        {
            var selectedOption = this.value;
            
            // Ocultar todos los campos
            document.getElementById('autorInsertar').style.display = 'none';
            document.getElementById('autorActualizar').style.display = 'none';
            document.getElementById('autorBorrar').style.display = 'none';
            
            // Mostrar los campos para la opción seleccionada
                  if (selectedOption === 'Insertar') 
                {
                    document.getElementById('autorInsertar').style.display = 'block';
                } 
            else if (selectedOption === 'Actualizar') 
                {
                    document.getElementById('autorActualizar').style.display = 'block';
                } 
            else if (selectedOption === 'Borrar') 
                {
                    document.getElementById('autorBorrar').style.display = 'block';
                }
        });

        document.getElementById('dropdownLibro').addEventListener('change', function() 
        {
            var selectedOption = this.value;
            
            // Ocultar todos los campos
            document.getElementById('libroInsertar').style.display = 'none';
            document.getElementById('libroActualizar').style.display = 'none';
            document.getElementById('libroBorrar').style.display = 'none';
            
            // Mostrar los campos para la opción seleccionada
                  if (selectedOption === 'Insertar') 
                {
                    document.getElementById('libroInsertar').style.display = 'block';
                } 
            else if (selectedOption === 'Actualizar') 
                {
                    document.getElementById('libroActualizar').style.display = 'block';
                } 
            else if (selectedOption === 'Borrar') 
                {
                    document.getElementById('libroBorrar').style.display = 'block';
                }
        });

        document.getElementById('dropdownEdicion').addEventListener('change', function() 
        {
            var selectedOption = this.value;
            
            // Ocultar todos los campos
            document.getElementById('edicionInsertar').style.display = 'none';
            document.getElementById('edicionActualizar').style.display = 'none';
            document.getElementById('edicionBorrar').style.display = 'none';
            
            // Mostrar los campos para la opción seleccionada
                  if (selectedOption === 'Insertar') 
                {
                    document.getElementById('edicionInsertar').style.display = 'block';
                } 
            else if (selectedOption === 'Actualizar') 
                {
                    document.getElementById('edicionActualizar').style.display = 'block';
                } 
            else if (selectedOption === 'Borrar') 
                {
                    document.getElementById('edicionBorrar').style.display = 'block';
                }
        });

        document.getElementById('dropdownUsuario').addEventListener('change', function() 
        {
            var selectedOption = this.value;
            
            // Ocultar todos los campos
            document.getElementById('usuarioInsertar').style.display = 'none';
            document.getElementById('usuarioActualizar').style.display = 'none';
            document.getElementById('usuarioBorrar').style.display = 'none';
            
            // Mostrar los campos para la opción seleccionada
                  if (selectedOption === 'Insertar') 
                {
                    document.getElementById('usuarioInsertar').style.display = 'block';
                } 
            else if (selectedOption === 'Actualizar') 
                {
                    document.getElementById('usuarioActualizar').style.display = 'block';
                } 
            else if (selectedOption === 'Borrar') 
                {
                    document.getElementById('usuarioBorrar').style.display = 'block';
                }
        });

        document.getElementById('dropdownCopia').addEventListener('change', function() 
        {
            var selectedOption = this.value;
            
            // Ocultar todos los campos
            document.getElementById('copiaInsertar').style.display = 'none';
            document.getElementById('copiaBorrar').style.display = 'none';
            
            // Mostrar los campos para la opción seleccionada
                  if (selectedOption === 'Insertar') 
                {
                    document.getElementById('copiaInsertar').style.display = 'block';
                } 
            else if (selectedOption === 'Actualizar') 
                {
                    document.getElementById('copiaActualizar').style.display = 'block';
                } 
            else if (selectedOption === 'Borrar') 
                {
                    document.getElementById('copiaBorrar').style.display = 'block';
                }
        });

        document.getElementById('dropdownPrestamo').addEventListener('change', function() 
        {
            var selectedOption = this.value;
            
            // Ocultar todos los campos
            document.getElementById('prestamoInsertar').style.display = 'none';
            document.getElementById('prestamoActualizar').style.display = 'none';
            document.getElementById('prestamoBorrar').style.display = 'none';
            
            // Mostrar los campos para la opción seleccionada
                  if (selectedOption === 'Insertar') 
                {
                    document.getElementById('prestamoInsertar').style.display = 'block';
                } 
            else if (selectedOption === 'Actualizar') 
                {
                    document.getElementById('prestamoActualizar').style.display = 'block';
                } 
            else if (selectedOption === 'Borrar') 
                {
                    document.getElementById('prestamoBorrar').style.display = 'block';
                }
        });

        // Codigo para modificar la tabla Autor
        document.getElementById('autorInsertarButton').addEventListener('click', function() {
            var autorName = document.getElementById('inputAutorInsertar1').value;
            fetch('/insert_author', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: autorName})
            });
        });

        document.getElementById('autorActualizarButton').addEventListener('click', function() {
            var oldAuthorName = document.getElementById('inputAutorActualizar1').value;
            var newAuthorName = document.getElementById('inputAutorActualizar2').value;
            fetch('/update_author', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({oldName: oldAuthorName, newName: newAuthorName})
            });
        });

        document.getElementById('autorBorrarButton').addEventListener('click', function() {
            var authorName = document.getElementById('inputAutorBorrar').value;
            fetch('/delete_author', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: authorName})
            });
        });

        // Codigo para modificar la tabla Libro
        document.getElementById('libroInsertarButton').addEventListener('click', function() {
            var libroName = document.getElementById('inputLibroInsertar').value;
            var authorName = document.getElementById('inputLibroInsertar1').value;
            var bookCode = document.getElementById('inputLibroInsertar2').value;
            fetch('/insert_book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: libroName , author: authorName, code: bookCode})
            });
        });

        document.getElementById('libroActualizarButton').addEventListener('click', function() {
            var oldBookName = document.getElementById('inputLibroActualizar1').value;
            var newBookName = document.getElementById('inputLibroActualizar2').value;
            fetch('/update_book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({oldName: oldBookName, newName: newBookName})
            });
        });

        document.getElementById('libroBorrarButton').addEventListener('click', function() {
            var bookName = document.getElementById('inputLibroBorrar').value;
            fetch('/delete_book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: bookName})
            });
        });

        // Codigo para modificar la tabla Edicion
        document.getElementById('edicionInsertarButton').addEventListener('click', function() {
            var cod = document.getElementById('inputEdicionInsertar1').value;
            var year = document.getElementById('inputEdicionInsertar2').value;
            var lang = document.getElementById('inputEdicionInsertar3').value;
            fetch('/insert_edicion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({code: cod, año: year, language: lang})
            });
        });

        document.getElementById('edicionActualizarButton1').addEventListener('click', function() {
            var searchText = document.getElementById('inputEdicionActualizar1').value;
            fetch('/get_edicion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text: searchText})
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('inputEdicionActualizar2').value = data.field1;
                document.getElementById('inputEdicionActualizar3').value = data.field2;
                document.getElementById('inputEdicionActualizar4').value = data.field3;
            });
        });

        document.getElementById('edicionActualizarButton2').addEventListener('click', function() {
            var oldCod = document.getElementById('inputEdicionActualizar1').value;
            var cod = document.getElementById('inputEdicionActualizar2').value;
            var year = document.getElementById('inputEdicionActualizar3').value;
            var lang = document.getElementById('inputEdicionActualizar4').value;
            fetch('/update_edicion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({prevCode: oldCod, code: cod, año: year, language: lang})
            });
        });

        document.getElementById('edicionBorrarButton').addEventListener('click', function() {
            var edName = document.getElementById('inputEdicionBorrar').value;
            fetch('/delete_edicion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: edName})
            });
        });

         // Codigo para modificar la tabla Copia
        document.getElementById('copiaInsertarButton').addEventListener('click', function() {
            var num = document.getElementById('inputCopiaInsertar1').value;
            var ISNB = document.getElementById('inputCopiaInsertar2').value;
            
            fetch('/insert_copia', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({numero: num , codigo: ISNB})
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Ese numero de copia ya existe");
                                break;
                            case '401':
                                error("La ISBN no existe");
                                break;
                            default:
                                error();
                        }
                    }
                    else
                    {
                        success();
                    }
                // Si el servidor devuelve un código de estado 2xx, se considera una respuesta exitosa
                return response.json();
                })
        });

        document.getElementById('copiaBorrarButton').addEventListener('click', function() {
            var numn = document.getElementById('inputCopiaBorrar').value;
            fetch('/delete_copia', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({num : numn})
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Ese numero de copia ya existe");
                                break;
                            case '401':
                                error("La ISBN no existe");
                                break;
                            default:
                                error();
                        }
                    }
                    else
                    {
                        success();
                    }
                // Si el servidor devuelve un código de estado 2xx, se considera una respuesta exitosa
                return response.json();
                })
        });

        // Codigo para modificar la tabla Usuario
        document.getElementById('usuarioInsertarButton').addEventListener('click', function() {
            var userId = document.getElementById('inputUsuarioInsertar1').value;
            var userName = document.getElementById('inputUsuarioInsertar2').value;
            fetch('/insert_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: userId, name: userName})
            });
        });

        document.getElementById('usuarioActualizarButton1').addEventListener('click', function() {
            var searchText = document.getElementById('inputUsuarioActualizar1').value;
            fetch('/get_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text: searchText})
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('inputUsuarioActualizar2').value = data.field1;
                document.getElementById('inputUsuarioActualizar3').value = data.field2;
            });
        });

        document.getElementById('usuarioActualizarButton2').addEventListener('click', function() {
            var searchText = document.getElementById('inputUsuarioActualizar1').value;
            fetch('/update_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text: searchText})
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('inputUsuarioActualizar2').value = data.field1;
                document.getElementById('inputUsuarioActualizar3').value = data.field2;
            });
        });

        document.getElementById('usuarioBorrarButton').addEventListener('click', function() {
            var userName = document.getElementById('inputUsuarioBorrar').value;
            fetch('/delete_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: userName})
            });
        });

        //Codigo para modificar la tabla Prestamo
        document.getElementById('prestamoInsertarButton').addEventListener('click', function() {
            var fecha1 = document.getElementById('inputPrestamoInsertar1').value;
            var fecha1 = document.getElementById('inputPrestamoInsertar2').value;
            fetch('/insert_prestamo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({fechaPrestamo: fecha1, fechaDev: fecha1})
            });
        });

    });