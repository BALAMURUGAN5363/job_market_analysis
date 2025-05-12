# 💼 Job Market Analysis Dashboard

Analyze trends in data jobs, required skills, and salaries across various cities using this interactive dashboard.

## 📊 Project Overview

This project helps users upload a CSV file (job listings scraped from LinkedIn/Indeed) and visualizes:
- In-demand skills
- Job openings by location
- Salary trends per role or city
- NLP-powered keyword insights

Built using:
- 📌 **Frontend**: Angular + ngx-charts
- ⚙️ **Backend**: Flask API
- 🧠 **Data Processing**: Python (pandas, spaCy, TextBlob)

---

## 🚀 Features

- 📁 Upload job market CSV files (skills, titles, cities, salaries)
- 📈 Visualize job openings, average salaries, and top skills
- 🧠 NLP-based skill extraction and sentiment on job descriptions
- 💾 Local data storage and history for comparisons

---

## 📂 Project Structure

job-market-analysis/
├── backend/
│ ├── controllers/
│ │ └── parserController.py
│ ├── services/
│ │ └── analyzeData.py
│ ├── routes/
│ │ └── upload.py
│ ├── uploads/
│ │ └── *.csv
│ └── server.py
├── frontend/
│ ├── src/
│ │ ├── app/
│ │ │ ├── home/
│ │ │ │ ├── home.component.ts/html/css
│ │ │ ├── app.component.ts
│ │ │ ├── app.route.ts, app.config.ts

---

## 📥 How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/job-market-analysis.git
