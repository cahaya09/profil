from flask import Flask, render_template_string, request, send_from_directory
app = Flask(__name__, static_url_path='', static_folder='.')

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/<path:filename>')
def static_files(filename):
    # Serve CSS, JS and other files
    return send_from_directory('.', filename)

@app.route('/contact', methods=['POST'])
def contact():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    # For safety, we are not sending email. In production, integrate email or DB here.
    print(f'Contact from {name} <{email}>: {message}')
    return 'OK', 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)