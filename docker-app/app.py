from flask import Flask

app = Flask(__name__)

@app.route("/")
def homepage():
    return "HomePage"

@app.route("/register")
def registerpage():
    return "Register Page"

@app.route("/login")
def loginpage():
    return "Login Page"


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8080)
