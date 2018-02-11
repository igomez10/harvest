from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/nav')
def nav():
    return render_template('nav.html')

@app.route('/farmerProfile')
def farmerProfile():
    return render_template('farmerProfile.html')

@app.route('/farmerHistory')
def farmerHistory():
    return render_template('farmerHistory.html')

@app.route('/search')
def search():
    return render_template('search.html')
