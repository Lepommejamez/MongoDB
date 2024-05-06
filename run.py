# run.py
from myproject import app
from flask import request, jsonify

@app.route('/selected_option', methods=['POST'])
def selected_option():
    data = request.get_json()
    print('La opción seleccionada es: ' + data['option'])
    return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)