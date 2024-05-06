// main.js
console.log("Hello from JavaScript!");
function myFunction() {
    alert("El botón fue clickeado!");
}

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('myButton').addEventListener('click', function() {
        var selectedOption = document.getElementById('myDropdown').value;
        fetch('/selected_option', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({option: selectedOption})
        });
    });
});