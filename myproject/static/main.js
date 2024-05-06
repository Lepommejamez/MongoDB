// main.js
console.log("Hello from JavaScript!");
function myFunction() 
{
    alert("Operacion Exitosa!");
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
            document.getElementById('copiaActualizar').style.display = 'none';
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
            var autorName = document.getElementById('inputAutorInsertar').value;
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
            fetch('/insert_book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: libroName})
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
    });