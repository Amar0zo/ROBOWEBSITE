from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from myapp.robot import Robot
from django.template import RequestContext
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import FileSystemStorage
from django.http import HttpResponseRedirect
from .forms import FileUploadForm
import os

def index(request):
    connected = False
    robot_socket = None
    joints = []
    if request.method == 'POST':
        print (request.POST)
        if 'robot_ip' in request.POST:
            robot_ip = request.POST['robot_ip']
            try:
                robot_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
                robot_socket.settimeout(2)
                robot_socket.connect((robot_ip, 30002))
                robot_socket.settimeout(None)
                connected = True
            except:
                pass
        elif 'brake_release' in request.POST:
            connected = True
            robot_socket.settimeout(2)
            comand = "brake_release"
            robot_socket.send(command.encode())
            pass  # do something
        elif 'command' in request.POST:
            pass  # do something
        elif 'power_on' in request.POST:
            connected = True
            robot_socket.send("power on\n".encode())
            pass  # do something
        elif 'power_off' in request.POST:
            pass  # do something
    return render(request, 'index.html', {'connected': connected})

# def printer_more(request):
#   template = loader.get_template('printer_more.html')
#   return HttpResponse(template.render())

@csrf_exempt
def printer_more(request):
    if request.method == 'POST':
        form = FileUploadForm(request.POST, request.FILES)
        if form.is_valid():
            uploaded_file = request.FILES['file']
            fs = FileSystemStorage()
            filename = fs.save(uploaded_file.name, uploaded_file)
            uploaded_file_url = fs.url(filename)
            return HttpResponseRedirect(request.path_info)
    return render(request, 'printer_more.html',)