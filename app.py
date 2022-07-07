from flask import Flask, render_template, request, redirect, url_for
import os
webroot = 'src'
static_dir = os.path.join(webroot,'static')
template_dir = os.path.join(webroot,'templates')
app = Flask(__name__, static_folder=static_dir, template_folder=template_dir)

@app.route('/')
def VirtualAssistant():
    return render_template('VirtualAssistant.html')

if __name__ =='__main__':
    app.run(debug=True)