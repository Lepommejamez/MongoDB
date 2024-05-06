// main.js
console.log("Hello from JavaScript!");
function myFunction() 
{
    alert("Operacion Exitosa!");
}

document.addEventListener('DOMContentLoaded', (event) => 
    {
        /*
        document.getElementById('myButton').addEventListener('click', function() 
        {
            var selectedOption = document.getElementById('myDropdown').value;
            fetch('/selected_option', 
            {
                method: 'POST',
                headers: 
                {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({option: selectedOption})
            });
        });*/

        document.getElementById('dropdown1').addEventListener('change', function() 
        {
            var selectedOption = this.value;
            
            // Ocultar todos los campos
            document.getElementById('fieldsAutor').style.display = 'none';
            document.getElementById('fieldsLibro').style.display = 'none';
            document.getElementById('fieldsEdicion').style.display = 'none';
            document.getElementById('fieldsUsuario').style.display = 'none';
            
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
    });