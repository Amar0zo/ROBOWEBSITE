from django.http import HttpResponse
from django.shortcuts import render
from django.template import loader
from myapp.robot import Robot
from socket import socket
# import robot

robot_port= 29999
robocik = Robot(port=robot_port)

def index(request):

    if request.method == 'POST':
        print (request.POST)
        if 'robot_ip' in request.POST:
            robot_ip = request.POST['robot_ip']
            robocik.connect(robot_ip)
        elif 'brake_release' in request.POST:
            robocik.send_command("brake release")
            pass  # do something
        elif 'command' in request.POST:
            pass  # do something
        elif 'power_on' in request.POST:
            robocik.send_command("power on")
            pass  # do something
        elif 'power_off' in request.POST:
            robocik.send_command("power off")
            pass  # do something
    return render(request, 'index.html', {'connected': robocik._connected})

def printer_more(request):
  template = loader.get_template('printer_more.html')
  return HttpResponse(template.render())
