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

        //DONE
        // Codigo para modificar la tabla Autor
        document.getElementById('autorInsertarButton').addEventListener('click', function() {
            var autorName = document.getElementById('inputAutorInsertar1').value;
            fetch('/insert_author', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: autorName})
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Ese autor ya existe.");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
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

        document.getElementById('autorActualizarButton').addEventListener('click', function() {
            var oldAuthorName = document.getElementById('inputAutorActualizar1').value;
            var newAuthorName = document.getElementById('inputAutorActualizar2').value;
            fetch('/update_author', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({oldName: oldAuthorName, newName: newAuthorName})
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Ese autor no existe.");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
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

        document.getElementById('autorBorrarButton').addEventListener('click', function() {
            var authorName = document.getElementById('inputAutorBorrar').value;
            fetch('/delete_author', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: authorName})
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            default:
                                error();
                                break;
                            case '400':
                                error("Ese autor no existe.");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
                                break;
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
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            default:
                                error();
                                break
                            case '400':
                                error("Ese autor no existe.");
                                break;
                                case '401':
                                    error("Ese autor ya existe.");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
                                break;
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

        document.getElementById('libroActualizarButton').addEventListener('click', function() {
            var oldBookName = document.getElementById('inputLibroActualizar1').value;
            var newBookName = document.getElementById('inputLibroActualizar2').value;
            fetch('/update_book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({oldName: oldBookName, newName: newBookName})
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            default:
                                error();
                                break
                            case '400':
                                error("Ese libro no existe.");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
                                break;
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

        document.getElementById('libroBorrarButton').addEventListener('click', function() {
            var bookName = document.getElementById('inputLibroBorrar').value;
            fetch('/delete_book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: bookName})
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            default:
                                error();
                                break
                            case '400':
                                error("Ese libro no existe.");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
                                break;
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
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Esa edicion ya existe.");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
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
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Esa edicion no existe.");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
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
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Esa edicion no existe.");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
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
                            case '500':
                                error("Por favor llene todos los campos.");
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
                                error("Ese numero de copia no existe");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
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
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Ese RUT ya existe");
                                break;
                            case '401':
                                error("La ISBN no existe");
                                break;
                            case '500': 
                                error("Por favor llene todos los campos.");
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
            var oldId = document.getElementById('inputUsuarioActualizar1').value;
            var newId = document.getElementById('inputUsuarioActualizar2').value;
            var sdkjnakdja = document.getElementById('inputUsuarioActualizar3').value;
            fetch('/update_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({oldRUT: oldId, newRUT: newId, newName: sdkjnakdja})
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Ese usuario no existe");
                                break;
                            case '401':
                                error("La ISBN no existe");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
                                break;
                            case '402':
                                error("Ese usuario ya existe");
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
                });
        });

        document.getElementById('usuarioBorrarButton').addEventListener('click', function() {
            var userName = document.getElementById('inputUsuarioBorrar').value;
            fetch('/delete_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({rut: userName})
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Ese usuario no existe");
                                break;
                            case '401':
                                error("La ISBN no existe");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
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

        //Codigo para modificar la tabla Prestamo
        document.getElementById('prestamoInsertarButton').addEventListener('click', function() {
            var fecha1 = document.getElementById('inputPrestamoInsertar1').value;
            var fecha2 = document.getElementById('inputPrestamoInsertar2').value;
            var cod1 = document.getElementById('inputPrestamoInsertar3').value;
            var cod2 = document.getElementById('inputPrestamoInsertar4').value;
            fetch('/insert_prestamo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({fechaPrestamo: fecha1, fechaDev: fecha2, rut: cod1, copia: cod2})
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Usuario no encontrado");
                                break;
                            case '401':
                                error("Copia no encontrada");
                                break;
                            case '402':
                                error("Esa copia del libro ya esta prestada. Intenta de nuevo.");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
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

        document.getElementById('prestamoActualizarButton1').addEventListener('click', function() {
            var searchText = document.getElementById('inputPrestamoActualizar1').value;
            fetch('/get_prestamo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({text: searchText})
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('inputPrestamoActualizar2').value = data.field1;
                document.getElementById('inputPrestamoActualizar3').value = data.field2;
            })
        });

        document.getElementById('prestamoActualizarButton2').addEventListener('click', function() {
            var id = document.getElementById('inputPrestamoActualizar1').value;
            var newDate1 = document.getElementById('inputPrestamoActualizar2').value;
            var newDate2 = document.getElementById('inputPrestamoActualizar3').value;
            fetch('/update_prestamo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({copia: id, date1: newDate1, date2: newDate2})
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Copia no encontrada.");
                                break;
                            case '401':
                                error("La ISBN no existe");
                                break;
                            case '402':
                                error("Esa copia del libro ya esta prestada. Intenta de nuevo.");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
                                break;
                            default:
                                error();
                        }
                    }
                    else
                    {
                        success();
                    }
                return response.json();
                })
        });

        document.getElementById('prestamoBorrarButton').addEventListener('click', function() {
            var prestamoId = document.getElementById('inputPrestamoBorrar1').value;
            fetch('/delete_prestamo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: prestamoId})
            })
            .then(response => 
                {
                    if (!response.ok) 
                    {
                        switch(String(response.status))
                        {
                            case '400':
                                error("Copia no encontrada.");
                                break;
                            case '401':
                                error("La ISBN no existe");
                                break;
                            case '500':
                                error("Por favor llene todos los campos.");
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
        })

        //Obtener datos para la tabla
        $(document).ready(function() {
            $('#consultasShow').click(function() {
                $('#todo').hide();
                $('#consultasShow').hide();
                $('#todo2').show();
                $('#consultasHide').show();
            });
        });

        $(document).ready(function() {
            $('#consultasHide').click(function() {
                $('#todo').show();
                $('#consultasShow').show(); 
                $('#todo2').hide();
                $('#consultasHide').hide();
                $('botonesConsulta').hide();
            });
        });

        $(document).ready(function() {
            $('#consulta1').click(function() {
                // Define los nombres de las columnas
                var columns = ["Titulo", "Autores", "Libros", "ISBN", "Año", "Idioma", "Numero Copia"];
        
                // Vacía el encabezado de la tabla
                $('#miTabla thead').empty();
        
                // Crea el nuevo encabezado de la tabla
                var header = '<tr>';
                columns.forEach(function(column) {
                    header += '<th>' + column + '</th>';
                });
                header += '</tr>';
                $('#miTabla thead').append(header);
        
                $.ajax({
                    url: '/getTableData1',  // Ruta al servidor de Python
                    method: 'GET',
                    success: function(data) {
                        // Vacía el cuerpo de la tabla
                        $('#miTabla tbody').empty();
        
                        // Llena la tabla con los datos recibidos
                        data.forEach(function(row) {
                            var html = '<tr>';
                            row.forEach(function(cell) {
                                html += '<td>' + cell + '</td>';
                            });
                            html += '</tr>';
                            $('#miTabla tbody').append(html);
                        });
                    }
                });
            });
        });

        $(document).ready(function() {
            $('#consulta2').click(function() {
                // Define los nombres de las columnas
                var columns = ["RUT", "Nombre Usuario", "Libro"];
        
                // Vacía el encabezado de la tabla
                $('#miTabla thead').empty();
        
                // Crea el nuevo encabezado de la tabla
                var header = '<tr>';
                columns.forEach(function(column) {
                    header += '<th>' + column + '</th>';
                });
                header += '</tr>';
                $('#miTabla thead').append(header);
        
                $.ajax({
                    url: '/getTableData2',  // Ruta al servidor de Python
                    method: 'GET',
                    success: function(data) {
                        // Vacía el cuerpo de la tabla
                        $('#miTabla tbody').empty();
        
                        // Llena la tabla con los datos recibidos
                        data.forEach(function(row) {
                            var html = '<tr>';
                            row.forEach(function(cell) {
                                html += '<td>' + cell + '</td>';
                            });
                            html += '</tr>';
                            $('#miTabla tbody').append(html);
                        });
                    }
                });
            });
        });
    });