from flask import Flask, render_template
from flask_socketio import SocketIO,send
#from pynput.keyboard import Key, Listener


app = Flask(__name__)
app.config['SECRET_KEY']= 'secret'
socketio = SocketIO(app)


@app.route ('/')
def index():
    return "hello"

if __name__ == '__capturacedula__':
    socketio.run(app)
