import os
import pandas as pd
from services.analyzeData import analyze_csv
from flask import Blueprint, request, jsonify
from controllers.parserController import handle_upload  # Changed from parser_controller to parserController

upload_bp = Blueprint('upload', __name__)

@upload_bp.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'Filename is empty'}), 400

    result = handle_upload(file)
    return jsonify(result)

@upload_bp.route('/analysis', methods=['GET'])
def get_analysis():
    try:
        filepath = os.path.join('uploads', 'job_market_data.csv')
        if not os.path.exists(filepath):
            return jsonify({'error': 'No data file found'}), 404
            
        df = pd.read_csv(filepath)
        result = analyze_csv(df)
        return jsonify(result)
    except Exception as e:
        return jsonify({'error': str(e)}), 500
