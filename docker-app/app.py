from flask import Flask, render_template

app = Flask(__name__)

user = False

@app.route("/")
def home():
    return render_template("index.html", user=user)

@app.route("/register")
def register():
    return render_template("register.html", title="Register")

@app.route("/login")
def login():
    return render_template("login.html", title="Login")

@app.route("/logout")
def logout():
    return "Logout"

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=8080)
