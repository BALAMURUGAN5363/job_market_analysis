import os
import pandas as pd
from services.analyzeData import analyze_csv  # Changed from analyze_data to analyzeData
from werkzeug.utils import secure_filename

def handle_upload(file):
    filename = secure_filename(file.filename)
    filepath = os.path.join('uploads', filename)
    file.save(filepath)

    try:
        df = pd.read_csv(filepath)
        result = analyze_csv(df)
        return result
    except Exception as e:
        return {'error': str(e)}
