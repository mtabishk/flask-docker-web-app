from flask import Flask, render_template, request
from pymongo import MongoClient

app = Flask(__name__)

user = False

def get_database():
    CONNECTION_STRING = "mongodb://localhost:27017/"
    client = MongoClient(CONNECTION_STRING)
    return client['myusersdb']


@app.route("/")
def home():
    return render_template("index.html", user=user)

@app.route("/register", methods=['POST', 'GET'])
def register():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        mydb = get_database()
        mycoll = mydb['users']
        ret =mycoll.insert_one({"email": email , "password": password })
        if ret:
            return render_template("register.html", title="Register", msg="User registered successfully")
    return render_template("register.html", title="Register")

@app.route("/login", methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        mydb = get_database()
        mycoll = mydb['users']
        ret = mycoll.find({"email": email})
        for r in ret:
            ret_email = r['email']
            ret_pass = r['password']
        if ret_email == email and ret_pass == password:
            return render_template("index.html", user=email)
        else:
            return render_template("login.html", msg="Invalid credentials")
    return render_template("login.html", title="Login")

@app.route("/logout")
def logout():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8080)
