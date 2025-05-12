__all__ = ['analyze_csv']

def analyze_csv(df):
    try:
        response = {}

        # Example: Skill frequency analysis
        if 'Skills' in df.columns:
            skill_counts = df['Skills'].str.split(',').explode().str.strip().value_counts().head(10)
            response['top_skills'] = skill_counts.to_dict()

        # Example: Average Salary
        if 'Salary' in df.columns:
            df['Salary'] = df['Salary'].replace('[$,]', '', regex=True).astype(float)
            response['average_salary'] = round(df['Salary'].mean(), 2)

        # Example: Job Titles
        if 'Job Title' in df.columns:
            title_counts = df['Job Title'].value_counts().head(5)
            response['top_job_titles'] = title_counts.to_dict()

        return response
    except Exception as e:
        return {'error': str(e)}
