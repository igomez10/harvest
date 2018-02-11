from flask import Flask, render_template, jsonify, send_from_directory
app = Flask(__name__, static_folder='static')

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

@app.route('/farmerCurrent')
def farmerCurrent():
    return render_template('farmerCurrent.html')

@app.route('/data')
def data():
    return send_from_directory(app.static_folder, 'strains.json')

@app.route('/AccountPurchaser')
def AccountPurchaser():
    return render_template('AccountPurchaser.html')
