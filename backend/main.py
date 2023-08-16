from flask import Flask
from flask_cors import CORS
import pymysql


app = Flask(__name__)
CORS(app)
db = pymysql.connect(host="localhost", user="root",
                     db="portfolio_website", autocommit=True)


@app.route("/", methods=["GET"])
def home():
    cursor = db.cursor()
    cmd = "SHOW TABLES"
    cursor.execute(cmd)
    tables = cursor.fetchall()
    return "Hello!"
