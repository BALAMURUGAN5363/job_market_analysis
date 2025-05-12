from flask import Flask
from flask_cors import CORS
from routes.upload import upload_bp  # Changed from upload_route to upload

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = 'uploads'

# Register route
app.register_blueprint(upload_bp, url_prefix='/api')

if __name__ == '__main__':
    app.run(debug=True, port=5001)  # Try a different port
