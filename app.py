from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/article.html')
def article():
    return render_template('article.html')

@app.route('/characters.html')
def characters():
    return render_template('characters.html')

@app.route('/partials/header')
def header_partial():
    return render_template('partials/header.html')
    
@app.route('/author.html')
def author():
    return render_template('author.html')

if __name__ == '__main__':
    app.run(debug=True)


